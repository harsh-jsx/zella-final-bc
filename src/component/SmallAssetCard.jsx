import { Box, Stack, Typography } from "@mui/material";
import { createChart } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";

const data = [
  { time: 1, value: 100 },
  { time: 2, value: 102 },
  { time: 3, value: 98 },
  { time: 4, value: 105 },
  { time: 5, value: 101 },
  { time: 6, value: 107 },
  { time: 7, value: 103 },
];

const SmallAssetCard = ({ symbol, label, image }) => {
  const [change, setchange] = useState();
  const [price, setprice] = useState(null);
  const chartRef = useRef();

  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch current price + 24h change
        const tickerRes = await fetch(
          `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
        );
        const tickerData = await tickerRes.json();

        const price = parseFloat(tickerData.lastPrice);
        const change = parseFloat(tickerData.priceChangePercent);

        // Fetch last 24 hourly candles for sparkline
        const candlesRes = await fetch(
          `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&limit=24`
        );
        const candlesData = await candlesRes.json();

        const sparklineData = candlesData.map((candle) => ({
          time: Math.floor(candle[0] / 1000), // open time in seconds
          value: parseFloat(candle[4]), // close price
        }));

        setprice(price);
        setchange(change);

        const chart = createChart(chartRef.current, {
          width: 120,
          height: 40,
          layout: {
            background: { type: "solid", color: "transparent" },
            textColor: "transparent",
          },
          grid: {
            vertLines: { visible: false },
            horzLines: { visible: false },
          },
          timeScale: { visible: false },
          rightPriceScale: { visible: false },
          crosshair: { mode: 0 },
        });

        chart
          .addLineSeries({
            color: change < 0 ? "red" : "limegreen",
            lineWidth: 2,
            priceLineVisible: false,
          })
          .setData(sparklineData);
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    };

    loadData();
  }, [symbol]);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        maxWidth: "290px",
        height: "120px",
        width: "100%",
        background: "#F7F7F7",
        borderRadius: 2,
      }}
      spacing={1}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "90%" }}
      >
        <Stack direction="row" gap={0.5}>
          <img
            src={image}
            alt="btc"
            style={{ width: "25px", height: "25px", borderRadius: "50%" }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#464646",
              fontSize: 16,
              fontWeight: 500,
              fontFamily: `"Roboto", sans-serif`,
            }}
          >
            {label}
          </Typography>
        </Stack>
        <Typography
          sx={{
            color: change < 0 ? "red" : "limegreen",
            fontSize: 16,
            fontWeight: 400,
            fontFamily: `"Roboto", sans-serif`,
          }}
        >
          {change}%
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "90%" }}
      >
        <Typography
          sx={{
            color: "#030d12",
            fontSize: 20,
            fontWeight: 600,
            fontFamily: `"Roboto", sans-serif`,
          }}
        >
          ${price}
        </Typography>
        <div ref={chartRef}></div>
      </Stack>
    </Stack>
  );
};

export default SmallAssetCard;
