import {
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { createChart } from "lightweight-charts";
import React, { useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MarketOverviewRow from "./MarketOverviewRow";
import { useNavigate } from "react-router-dom";

const coinList = [
  {
    label: "BTC/USDT",
    symbol: "BTCUSDT",
    image: "https://bit-frame.net/assets/img/coins/BTC.png",
  },
  {
    label: "ETH/USDT",
    symbol: "ETHUSDT",
    image: "https://bit-frame.net/assets/img/coins/ETH.png",
  },
  {
    label: "BNB/USDT",
    symbol: "BNBUSDT",
    image: "https://bit-frame.net/assets/img/coins/BNB.png",
  },
  {
    label: "SOL/USDT",
    symbol: "SOLUSDT",
    image: "https://bit-frame.net/assets/img/coins/SOL.png",
  },
  {
    label: "XRP/USDT",
    symbol: "XRPUSDT",
    image: "https://bit-frame.net/assets/img/coins/XRP.png",
  },
  {
    label: "DOGE/USDT",
    symbol: "DOGEUSDT",
    image: "https://bit-frame.net/assets/img/coins/DOGE.png",
  },
  {
    label: "TON/USDT",
    symbol: "TONUSDT",
    image: "https://bit-frame.net/assets/img/coins/TON.png",
  },
  {
    label: "TRX/USDT",
    symbol: "TRXUSDT",
    image: "https://bit-frame.net/assets/img/coins/TRX.png",
  },
];

const MarketOverview = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  let navigate = useNavigate();

  return (
    <Stack alignItems="center" sx={{ marginTop: "50px" }}>
      <Stack alignItems="center" sx={{ width: "97%", maxWidth: 1200 }}>
        <Stack spacing={1} sx={{ width: "100%" }}>
          <Typography
            variant="h1"
            sx={{
              color: "#000",
              fontSize: 34,
              fontWeight: 800,
              fontFamily: `"Roboto", sans-serif`,
            }}
          >
            Market Overview
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#000",
              fontSize: 16,
              fontWeight: 400,
              fontFamily: `"Roboto", sans-serif`,
              opacity: 0.8,
            }}
          >
            Popular cryptocurrencies on the market GlobeFi
          </Typography>
        </Stack>

        <Tabs
          value={0}
          variant={isMobile ? "fullWidth" : ""}
          sx={{
            width: "100%",
            marginTop: "47px",
            "& .css-1qltlow-MuiTabs-indicator": {
              backgroundColor: "#FFB800 !important",
            },
          }}
        >
          <Tab
            onClick={() => navigate("/profile/wallet")}
            label="Popular coins"
            sx={{
              color: "rgba(0, 0, 0, .8) !important",
              fontSize: 18,
              fontWeight: "bold",
              fontFamily: '"Roboto", sans-serif',
              textTransform: "unset !important",
            }}
          />
          <Tab
            label="New coins"
            onClick={() => navigate("/profile/wallet")}
            sx={{
              color: "rgba(0, 0, 0, .4) !important",
              fontSize: 18,
              fontFamily: '"Roboto", sans-serif',
              fontWeight: 400,
              textTransform: "unset !important",
            }}
          />
          <Tab
            onClick={() => navigate("/profile/wallet")}
            label="Showing Growth"
            sx={{
              color: "rgba(0, 0, 0, .4) !important",
              fontSize: 18,
              fontWeight: 400,
              fontFamily: '"Roboto", sans-serif',
              textTransform: "unset !important",
            }}
          />
          <Tab
            onClick={() => navigate("/profile/wallet")}
            label="Showing a decline"
            sx={{
              fontWeight: 400,
              color: "rgba(0, 0, 0, .4) !important",
              fontSize: 18,
              fontFamily: '"Roboto", sans-serif',
              textTransform: "unset !important",
            }}
          />
        </Tabs>

        <TableContainer
          component={Paper}
          sx={{
            marginTop: "12px",
            "&.MuiPaper-root": {
              boxShadow: 0,
            },
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ border: "none" }}>
                <TableCell
                  sx={{
                    color: "rgba(0, 0, 0, .4)",
                    "&.MuiTableCell-root": {
                      borderBottom: "none",
                    },
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    color: "rgba(0, 0, 0, .4)",
                    "&.MuiTableCell-root": {
                      borderBottom: "none",
                    },
                  }}
                >
                  Last Price
                </TableCell>
                <TableCell
                  sx={{
                    color: "rgba(0, 0, 0, .4)",
                    "&.MuiTableCell-root": {
                      borderBottom: "none",
                    },
                  }}
                >
                  24H Change
                </TableCell>
                {!isMobile && (
                  <>
                    <TableCell
                      sx={{
                        color: "rgba(0, 0, 0, .4)",
                        "&.MuiTableCell-root": {
                          borderBottom: "none",
                        },
                      }}
                    >
                      Crypto Markets
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "rgba(0, 0, 0, .4)",
                        "&.MuiTableCell-root": {
                          borderBottom: "none",
                        },
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      Operation
                    </TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {coinList.map((coin, index) => (
                <MarketOverviewRow data={coin} key={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <p
          style={{
            marginTop: 20,
            fontSize: 14,
            fontFamily: '"Roboto", sans-serif',
            color: "rgba(35, 40, 50, .8)",
            cursor: "pointer",
          }}
          onClick={() => navigate("/profile/wallet")}
        >
          View More {">"}
        </p>
      </Stack>
    </Stack>
  );
};

export default MarketOverview;
