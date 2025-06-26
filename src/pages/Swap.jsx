import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
  Grid,
  IconButton,
  Avatar,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import toast from "react-hot-toast";
import { swapCoins } from "../lib/utils";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Navbar from "../component/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { styled } from "@mui/system";
import Footer from "../component/Footer";
import { auth, db } from "../firebase";

const tokens = [
  {
    symbol: "BTCUSDT",
    name: "Bitcoin",
    icon: "https://bit-frame.net/assets/img/coins/BTC.png",
    chains: [
      {
        name: "Bitcoin",
        address: "bc1qjtz05j8tx4cz8ctv9c6pt08upnljettg3tmtwy",
      },
    ],
  },
  {
    symbol: "ETHUSDT",
    name: "Ethereum",
    icon: "https://bit-frame.net/assets/img/coins/ETH.png",
    chains: [
      {
        name: "Ethereum",
        address: "ETH ChAIN KA ADDY BC",
      },
    ],
  },
  {
    symbol: "USDT",
    name: "Tether",
    icon: "https://bit-frame.net/assets/img/coins/USDT.png",
    chains: [
      {
        name: "TRC20",
        address: "TX7ByApuvevk4hfDRXSYNUQbowzBqTf8fE",
      },
      {
        name: "ERC20",
        address: "ERC20 ChAIN",
      },
      {
        name: "BEP20",
        address: "BEP20 ChAIN",
      },
    ],
  },

  {
    symbol: "BNBUSDT",
    name: "BNB",
    icon: "https://bit-frame.net/assets/img/coins/BNB.png",
    chains: [
      {
        name: "BSC",
        address: "BSC ChAIN KA ADDY BC",
      },
      {
        name: "BNB",
        address: "BNB ChAIN KA ADDY BC",
      },
    ],
  },
  {
    symbol: "SOLUSDT",
    name: "Solana",
    icon: "https://bit-frame.net/assets/img/coins/SOL.png",
    chains: [
      {
        name: "Solana",
        address: "CBy24cc65xrHazjgbHeYpJWvX5ekURP1jm99S68bfgc7",
      },
    ],
  },
  {
    symbol: "USDCBNB",
    name: "USD Coin",
    icon: "https://bit-frame.net/assets/img/coins/USDC.png",
    chains: [
      {
        name: "TRC20",
        address: "TX7ByApuvevk4hfDRXSYNUQbowzBqTf8fE",
      },
      {
        name: "ERC20",
        address: "ERC20 ChAIN",
      },
      {
        name: "BEP20",
        address: "BEP20 ChAIN",
      },
    ],
  },
  {
    symbol: "XRPUSDT",
    name: "Ripple",
    icon: "https://bit-frame.net/assets/img/coins/XRP.png",
    chains: [
      {
        name: "XRP",
        address: "rMxLDMiJY7F27gV88Jk2QtFm6UW2EhvBks",
      },
    ],
  },
  {
    symbol: "DOGEUSDT",
    name: "Dogecoin",
    icon: "https://bit-frame.net/assets/img/coins/DOGE.png",
    chains: [
      {
        name: "Dogecoin",
        address: "DC6WRTe7UY1ustsVBrnkJvrEQ2tgMwBFxZ",
      },
    ],
  },
  {
    symbol: "TONUSDT",
    name: "Toncoin",
    icon: "https://bit-frame.net/assets/img/coins/TON.png",
    chains: [
      {
        name: "Toncoin",
        address: "UQD85L2ZuArY3f8CFEFf2Ssnf9Y5y1ee",
      },
    ],
  },
  {
    symbol: "TRXUSDT",
    name: "TRON",
    icon: "https://bit-frame.net/assets/img/coins/TRX.png",
    chains: [
      {
        name: "TRON",
        address: "TRON ChAIN KA ADDY BC",
      },
    ],
  },
  {
    symbol: "ADAUSDT",
    name: "Cardano",
    icon: "https://bit-frame.net/assets/img/coins/ADA.png",
    chains: [
      {
        name: "Cardano",
        address: "ADA ChAIN KA ADDY BC",
      },
    ],
  },
  {
    symbol: "AVAXUSDT",
    name: "Avalanche",
    icon: "https://bit-frame.net/assets/img/coins/AVAX.png",
    chains: [
      {
        name: "Avalanche",
        address: "AVAX ChAIN KA ADDY BC",
      },
    ],
  },
  {
    symbol: "WBTCUSDT",
    name: "Wrapped Bitcoin",
    icon: "https://bit-frame.net/assets/img/coins/WBTC.png",
  },
];

const faqItems = [
  {
    question: "How to exchange cryptocurrency?",
    answer:
      "To exchange cryptocurrency, select the token you want to send and the token you want to receive. Enter the amount and click 'Exchange'.",
  },
  {
    question: "What is the exchange rate?",
    answer:
      "The exchange rate is the value of one cryptocurrency in terms of another. It can fluctuate based on market conditions.",
  },
  {
    question: "Are there any fees?",
    answer:
      "Yes, there may be network fees associated with the transaction. Please check the fee structure before proceeding.",
  },
];

const ExchangeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  borderRadius: "12px",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  justifyContent: "center",
  padding: theme.spacing(4),
  width: "100%",
  maxWidth: 1200,
  transition: "box-shadow 0.3s ease",
  margin: "auto",
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: "url(https://bit-frame.net/assets/img/swap-banner.svg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  textAlign: "center",
  color: "#fff",
}));

const TokenSelect = ({ value, onChange }) => (
  <TextField
    select
    fullWidth
    value={value}
    onChange={onChange}
    variant="outlined"
    sx={{
      mt: 1,
      borderRadius: 2,
      backgroundColor: "#fff",
      width: "100%",
      maxWidth: 450,
      height: 48,
    }}
    SelectProps={{
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: 300,
          },
        },
      },
      renderValue: (selected) => {
        const token = tokens.find((t) => t.symbol === selected);
        return (
          <Box display="flex" alignItems="center">
            <Avatar src={token?.icon} sx={{ width: 24, height: 24, mr: 1 }} />
            <Typography variant="body2">
              <strong>{token?.label}</strong> {token?.symbol}
            </Typography>
          </Box>
        );
      },
    }}
  >
    {tokens.map((token) => (
      <MenuItem key={token.symbol} value={token.symbol}>
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar src={token.icon} sx={{ width: 24, height: 24, mr: 1 }} />
            <Typography variant="body2">
              <strong>{token.label}</strong> {token.symbol}
            </Typography>
          </Box>
          <Typography variant="body2">0.0</Typography>
        </Box>
      </MenuItem>
    ))}
  </TextField>
);

const Swap = ({ setappModal }) => {
  const [user, authStateLoading] = useAuthState(auth);
  const [fromToken, setFromToken] = useState("BTCUSDT");
  const [toToken, setToToken] = useState("ETHUSDT");
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [loading, setLoading] = React.useState(false);
  const [price, setprice] = useState(null);
  const [totalAmt, settotalAmt] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const loadData = async () => {
    setLoading(true);
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
      {
        label: "USDC/BNB",
        symbol: "USDCBNB",
        image: "https://bit-frame.net/assets/img/coins/USDC.png",
      },
      {
        label: "ADAUSDT/USDT",
        symbol: "ADAUSDT",
        image: "https://bit-frame.net/assets/img/coins/ADA.png",
      },
      {
        label: "AVAX/USDT",
        symbol: "AVAXUSDT",
        image: "https://bit-frame.net/assets/img/coins/AVAX.png",
      },
      {
        label: "WBTC/USDT",
        symbol: "WBTCUSDT",
        image: "https://bit-frame.net/assets/img/coins/WBTC.png",
      },
    ];

    coinList.map(async (data) => {
      try {
        // Fetch current price + 24h change
        const tickerRes = await fetch(
          `https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT`
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
    if (!user) {
      window.location.href = "/register";
    }
    loadData();

    const fetchDetails = async () => {
      const tickerRes = await fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${fromToken}`
      );
      const tickerData = await tickerRes.json();
      const price = parseFloat(tickerData.lastPrice);

      // dusre wale coin ka price
      const tickerRes2 = await fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${toToken}`
      );
      const tickerData2 = await tickerRes2.json();
      const price2 = parseFloat(tickerData2.lastPrice);
      const amountToSwapInSecondCoin =
        (parseFloat(fromAmount) * price) / price2;
      setToAmount(amountToSwapInSecondCoin);
    };

    fetchDetails();
  }, [fromToken, toToken, fromAmount]);

  const handleSubmit = async (fromToken, toToken) => {
    const userDocRef = await getDoc(doc(db, "users", user?.uid));
    if (!userDocRef.exists()) return 0;
    const userData = userDocRef.data();
    const balance = userData.balance;
    const response = await swapCoins(fromToken, toToken, fromAmount);

    const from = {
      amount: balance[fromToken].amount - parseFloat(response.amountToSwap),
      currency: balance[fromToken].currency,
    };
    const to = {
      amount:
        balance[toToken].amount + parseFloat(response.amountToSwapInSecondCoin),
      currency: balance[toToken].currency,
    };

    updateDoc(doc(db, "users", user?.uid), {
      [`balance.${fromToken}`]: from,
      [`balance.${toToken}`]: to,
    });

    // setToAmount(toAmount);

    setFromAmount(0);
    setFromAmount(0);
    toast.success("Swapped Succesfully!");
  };

  const getTotalUserBalance = async () => {
    if (!user) return 0;
    if (loading) {
      return;
    }
    try {
      const userDocRef = await getDoc(doc(db, "users", user.uid));
      if (!userDocRef.exists()) return 0;
      const userData = userDocRef.data();
      let total = [];
      const balance = userData.balance;

      Object.entries(balance).forEach(([symbol, data]) => {
        const coin = data.currency;
        const balance = data.amount;
        const amount = balance * price[coin] || 0;
        total.push(amount);
      });
      const totalAmount = total.reduce((acc, curr) => acc + curr, 0);
      settotalAmt(totalAmount);

      return totalAmount;
    } catch (err) {
      console.error("Error calculating total user balance:", err);
      return 0;
    }
  };

  getTotalUserBalance();

  return (
    <>
      <Navbar />
      <HeaderBox>
        <Stack
          alignItems={"flex-start"}
          sx={{ width: "100%", maxWidth: 1000, px: isMobile ? "20px" : 0 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
              fontSize: isMobile ? 24 : "auto",
            }}
          >
            Cryptocurrency Exchange
          </Typography>
          <Typography
            sx={{
              mt: 2,
              maxWidth: 600,
              color: "#f0f0f0",
              textShadow: "0 1px 4px rgba(0,0,0,0.15)",
              textAlign: "left",
              fontSize: isMobile ? 12 : "auto",
              opacity: 0.6,
            }}
          >
            Quickly exchange your crypto assets. Ensure your assets are on the
            trading balance before swapping.
          </Typography>
        </Stack>
      </HeaderBox>

      <Stack alignItems={"center"} mt={3}>
        <Stack
          sx={{
            width: "100%",
            maxWidth: 1200,
            py: 2,
            pb: 5,
            border: "1px solid rgba(0, 0, 0, 0.2)",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
            alignItems="center"
            gap={isMobile ? 2 : 3}
            sx={{ width: "90%" }}
          >
            <TokenSelect
              value={fromToken}
              onChange={(e) => setFromToken(e.target.value)}
            />
            <IconButton
              size="large"
              sx={{
                background:
                  "linear-gradient(135deg, #ffb400 60%, #ffda79 100%)",
                color: "#fff",
                boxShadow: "0 2px 8px rgba(255,180,0,0.15)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #ffa000 60%, #ffd54f 100%)",
                },
              }}
              onClick={() => {
                setFromToken(toToken);
                setToToken(fromToken);
                setFromAmount(toAmount);
                setToAmount(fromAmount);
              }}
            >
              <SwapHorizIcon fontSize="large" />
            </IconButton>
            <TokenSelect
              value={toToken}
              onChange={(e) => setToToken(e.target.value)}
            />
          </Stack>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
            alignItems="center"
            gap={3}
            sx={{ width: "90%", mt: 4 }}
          >
            <Stack sx={{ width: "100%" }}>
              <Typography>
                Available Balance:{" "}
                <Typography sx={{ textDecoration: "underline" }}>
                  0.0 BTC
                </Typography>
              </Typography>
              <TextField
                placeholder="Amout to send"
                fullWidth
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  "& input": { fontSize: 18 },
                }}
              />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{ mt: 1 }}
              >
                <Stack>
                  <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                    Current rate:{" "}
                  </Typography>
                  <Typography sx={{ fontSize: 13 }}>
                    1 {fromToken} ≈ 42.67335077 {toToken}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                    Rate for 24h.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: "bold",
                      fontWeight: "inter",
                      color: "red",
                    }}
                  >
                    -1.01%
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack sx={{ width: "100%", mt: 3 }}>
              <Typography>Available Balance: 0.0 {toToken}</Typography>
              <TextField
                placeholder="Amount to get"
                fullWidth
                type="number"
                value={toAmount || 0}
                onChange={(e) => setFromAmount(e.target.value)}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  "& input": { fontSize: 18 },
                }}
              />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{ mt: 1 }}
              >
                <Stack>
                  <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                    Commission:
                  </Typography>
                  <Typography sx={{ fontSize: 13 }}>0</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Button
            variant="contained"
            onClick={() => handleSubmit(fromToken, toToken)}
            size="small"
            sx={{
              backgroundColor: "#FFB800",
              color: "#000",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              width: isMobile ? "90%" : "auto",
              px: 1.5,
              py: 1,
              textTransform: "none",
              "&:hover": { backgroundColor: "#e6a000" },
              borderRadius: 2,
              mt: 5,
            }}
          >
            Exchange
          </Button>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default Swap;
