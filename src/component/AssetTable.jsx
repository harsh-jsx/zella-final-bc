import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  Stack,
} from "@mui/material";
let l = 0.00;

const AssetTable = ({
  assets,
  setwithdrawlModal,
  setdepositModal,
  userBalance,
}) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [price, setprice] = useState(null);

  const loadData = async () => {
    setLoading(true);
    const coinList = [
      {
        label: "BTC/USDT",
        symbol: "BTCUSDT",
        nword:"BTC",
        image: "https://bit-frame.net/assets/img/coins/BTC.png",
      },
      {
        label: "ETH/USDT",
        symbol: "ETHUSDT",
        nword:"ETH",
        image: "https://bit-frame.net/assets/img/coins/ETH.png",
      },
      {
        label: "BNB/USDT",
        symbol: "BNBUSDT",
        nword:"BNB",

        image: "https://bit-frame.net/assets/img/coins/BNB.png",
      },
      {
        label: "SOL/USDT",
        symbol: "SOLUSDT",
        nword:"SOL",

        image: "https://bit-frame.net/assets/img/coins/SOL.png",
      },
      {
        label: "XRP/USDT",
        symbol: "XRPUSDT",
        nword:"XRP",

        image: "https://bit-frame.net/assets/img/coins/XRP.png",
      },
      {
        label: "DOGE/USDT",
        symbol: "DOGEUSDT",
        nword:"DOGE",
        image: "https://bit-frame.net/assets/img/coins/DOGE.png",
      },
      {
        label: "TON/USDT",
        symbol: "TONUSDT",
        nword:"TON",
        image: "https://bit-frame.net/assets/img/coins/TON.png",
      },
      {
        label: "TRX/USDT",
        symbol: "TRXUSDT",
        nword:"TRX",
        image: "https://bit-frame.net/assets/img/coins/TRX.png",
      },
      {
        label: "USDC/BNB",
        nword:"USDC",
        symbol: "USDCBNB",
        image: "https://bit-frame.net/assets/img/coins/USDC.png",
      },
      {
        label: "ADAUSDT/USDT",
        symbol: "ADAUSDT",
        nword:"AVA",
        image: "https://bit-frame.net/assets/img/coins/ADA.png",
      },
      {
        label: "AVAX/USDT",
        nword:"AVAX",
        symbol: "AVAXUSDT",
        image: "https://bit-frame.net/assets/img/coins/AVAX.png",
      },
      {
        label: "WBTC/USDT",
        symbol: "WBTCUSDT",
        nword:"WBTC",
        image: "https://bit-frame.net/assets/img/coins/WBTC.png",
      },
    ];

    coinList.map(async (data) => {
      try {
        // Fetch current price + 24h change
        const tickerRes = await fetch(
          `https://api.binance.com/api/v3/ticker/24hr?symbol=${data.symbol}`
        );

        const tickerData = await tickerRes.json();

        const price = parseFloat(tickerData.lastPrice);
        setprice((prev) => ({
          ...prev,
          [data.symbol]: price,
        }));
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [user]);

  const getValueofCoin = (symbol) => {
    return price[symbol] * userBalance[symbol].amount;
  };

  return (
    <Paper
      sx={{
        "&.MuiPaper-root": {
          boxShadow: 0,
        },
      }}
    >
      <Table sx={{ border: "none" }}>
        <TableHead
          sx={{
            borderRadius: 50,
          }}
        >
          <TableRow
            sx={{
              border: "none",
              background: "#F0F2F4",
              padding: "16px 0",
            }}
          >
            <TableCell
              sx={{
                fontSize: 12,
                fontFamily: '"Roboto", sans-serif',
                padding: "0 16px",
                fontWeight: 400,
                color: "rgba(0, 0, 0, .6)",
              }}
            >
              Assets
            </TableCell>
            <TableCell
              sx={{
                fontSize: 12,
                fontFamily: '"Roboto", sans-serif',
                padding: "0 16px",
                fontWeight: 400,
                color: "rgba(0, 0, 0, .87)",
              }}
            >
              Overall
            </TableCell>
            <TableCell
              sx={{
                fontSize: 12,
                fontFamily: '"Roboto", sans-serif',
                padding: "0 16px",
                fontWeight: 400,
                color: "rgba(0, 0, 0, .87)",
              }}
            >
              Main
            </TableCell>
            <TableCell
              sx={{
                fontSize: 12,
                fontFamily: '"Roboto", sans-serif',
                padding: "0 16px",
                fontWeight: 400,
                color: "rgba(0, 0, 0, .87)",
              }}
            >
              Trade
            </TableCell>
            <TableCell
              sx={{
                fontSize: 12,
                fontFamily: '"Roboto", sans-serif',
                padding: "0 16px",
                fontWeight: 400,
                color: "rgba(0, 0, 0, .87)",
              }}
            >
              Collateral
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset) => (
            <TableRow
              key={asset.symbol}
              sx={{
                border: "none",
                boxShadow: "none",
                "&:hover": {
                  background: "#F0F2F4",
                },
                padding: "none",
              }}
            >
              <TableCell
                sx={{ border: "none", boxShadow: "none", padding: "none" }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{ width: 200 }}
                >
                  <img
                    src={asset.icon}
                    alt="icon"
                    style={{ width: 32, height: 32, borderRadius: "50%" }}
                  />
                  <Stack>
                    <Typography
                      sx={{
                        fontFamily: '"inter-medium", sens-serif',
                        color: "#101014",
                        fontWeight: 500,
                        fontSize: 12,
                      }}
                    >
                      {asset.shortname}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"inter", sens-serif',
                        color: "#101014",
                        fontWeight: 400,
                        fontSize: 10,
                      }}
                    >
                      {asset.name}
                    </Typography>
                  </Stack>
                </Box>
              </TableCell>
              {[...Array(4)].map((_, i) => (
                <TableCell
                  key={i}
                  sx={{ border: "none", boxShadow: "none", padding: "none" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"inter-medium", sens-serif',
                      color: "#101014",
                      fontWeight: 500,
                      fontSize: 12,
                    }}
                  >
                    {i == 0
                      ? userBalance
                        ? userBalance[asset.symbol].amount.toFixed(2)
                        : 0.00
                      : 0.00}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontFamily: '"inter", sens-serif',
                      color: "#101014",
                      fontWeight: 400,
                      fontSize: 10,
                    }}
                  >
                    {i == 0
                      ? userBalance
                        ? userBalance[asset.symbol].amount * price[asset.symbol]
                        : 0.00
                      : 0.00}
                    {` `}
                    USD
                  </Typography>
                </TableCell>
              ))}
              <TableCell
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  border: "none",
                  boxShadow: "none",
                  padding: "none",
                }}
              >
                <Box display="flex" gap={1}>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => setdepositModal(true)}
                    sx={{
                      borderColor: "rgba(0,0,0,0.2)",
                      color: "#000",
                      fontWeight: 400,
                      fontSize: 12,
                      fontFamily: "inter",
                      padding: "4px 16px",
                    }}
                  >
                    Deposit
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => (window.location.href = "/swap")}
                    sx={{
                      borderColor: "rgba(0,0,0,0.2)",
                      color: "#000",
                      fontWeight: 400,
                      fontSize: 12,
                      fontFamily: "inter",
                      padding: "4px 16px",
                    }}
                  >
                    Swap
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => setwithdrawlModal(true)}
                    sx={{
                      borderColor: "rgba(0,0,0,0.2)",
                      color: "#000",
                      fontWeight: 400,
                      fontSize: 12,
                      fontFamily: "inter",
                      padding: "4px 16px",
                    }}
                  >
                    Withdrawl
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default function App({
  assets,
  setdepositModal,
  setwithdrawlModal,
  userBalance,
}) {
  return (
    <AssetTable
      assets={assets}
      setdepositModal={setdepositModal}
      setwithdrawlModal={setwithdrawlModal}
      userBalance={userBalance}
    />
  );
}
