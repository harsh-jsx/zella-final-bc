import {
  Button,
  Stack,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { createChart } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";

const MarketOverviewRow = ({ data, index }) => {
  const [change, setchange] = useState();
  const [price, setprice] = useState(null);
  const chartRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch current price + 24h change
        const tickerRes = await fetch(
          `https://api.binance.com/api/v3/ticker/24hr?symbol=${data.symbol}`
        );
        const tickerData = await tickerRes.json();

        const price = parseFloat(tickerData.lastPrice);
        const change = parseFloat(tickerData.priceChangePercent);

        // Fetch last 24 hourly candles for sparkline
        const candlesRes = await fetch(
          `https://api.binance.com/api/v3/klines?symbol=${data.symbol}&interval=1h&limit=24`
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
          crosshair: {
            vertLine: {
              visible: false,
            },
            horzLine: {
              visible: false,
            },
          },
        });

        chart
          .addAreaSeries({
            lineColor: change < 0 ? "red" : "limegreen",
            topColor: change < 0 ? "#F8C1BD" : "#C3EDD4",
            bottomColor: change < 0 ? "#FAD2CC" : "#CFEFD9",
            lineWidth: 2,
            priceLineVisible: false,
          })
          .setData(sparklineData);
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    };

    loadData();
  }, []);

  return (
    <TableRow
      key={index}
      sx={{
        border: 0,
        height: "64px",
        "&:hover": {
          background: "rgba(254, 190, 64, .08)",
        },
      }}
    >
      <TableCell component="th" scope="row" sx={{ border: 0 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <img
            src={data.image}
            alt="coin-image"
            width={30}
            style={{ borderRadius: "50%" }}
          />
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: '"Roboto", sans-serif',
              color: "#2b2b2b",
            }}
          >
            {data.label}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        sx={{
          border: 0,
          fontSize: 14,
          fontFamily: '"Roboto", sans-serif',
          color: "#2b2b2b",
        }}
      >
        ${price !== undefined ? price : "--"}
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        sx={{
          border: 0,
          fontSize: 14,
          fontFamily: '"Roboto", sans-serif',
          fontWeight: 800,
          color: change < 0 ? "red" : "limegreen",
        }}
      >
        {change !== undefined ? change.toFixed(2) : "--"}%
      </TableCell>
      {!isMobile && (
        <>
          <TableCell component="th" scope="row" sx={{ border: 0 }}>
            <div ref={chartRef}></div>
          </TableCell>
          <TableCell component="th" scope="row" sx={{ border: 0 }}>
            <Button
              size="small"
              variant="outlined"
              sx={{
                color: "#000",
                borderColor: "rgba(0, 0, 0, 0.2)",
                fontFamily: "Inter, sans-serif",
                textTransform: "none",
                "&:hover": { borderColor: "#F7A600", background: "#F7A600" },
              }}
            >
              Trade
            </Button>
          </TableCell>
        </>
      )}
    </TableRow>
  );
};

export default MarketOverviewRow;
