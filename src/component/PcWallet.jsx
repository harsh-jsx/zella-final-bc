import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AssetTable from "./AssetTable";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

const PcWallet = ({
  depositModal,
  withdrawlModal,
  assets,
  setdepositModal,
  setwithdrawlModal,
}) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const [filteredAssets, setFilteredAssets] = React.useState(assets);
  const [loading, setLoading] = React.useState(false);
  const [change, setchange] = useState();
  const [price, setprice] = useState(null);
  const [totalAmt, settotalAmt] = useState(0);
  const [error, setError] = React.useState("");
  const [withdrawModal, setWithdrawModal] = React.useState(false);
  const [historyModal, setHistoryModal] = React.useState(false);
  const [selectedAsset, setSelectedAsset] = React.useState(null);
  const [userBalance, setuserBalance] = useState(null);

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

      setuserBalance(balance);
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

  React.useEffect(() => {
    if (!price) {
      loadData();
    }
    getTotalUserBalance();
    if (depositModal) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflowY = "scroll";
    } else if (withdrawlModal) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflowY = "scroll";
    } else {
      const scrollY = parseInt(document.body.style.top || "0") * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollY);
    }
    if (search) {
      const filtered = assets.filter((asset) =>
        asset.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredAssets(filtered);
    } else {
      setFilteredAssets(assets);
    }
  }, [search, assets, depositModal, price]);

  return (
    <Stack direction={"row"} justifyContent={"center"} sx={{ mt: 3 }}>
      <Stack spacing={2} sx={{ width: 200 }}>
        <Typography
          sx={{ fontSize: "1.5rem", fontFamily: '"inter-bold", sans-serif' }}
        >
          Balances
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{
            px: 2,
            height: "64px",
            background: "#fff",
            borderRadius: "10px 0px 0px 10px",
          }}
        >
          <Box
            sx={{ width: "2px", height: "80%", background: "#E732D5" }}
          ></Box>
          <Stack>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: '"inter-bold", sans-serif',
              }}
            >
              General
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontFamily: '"inter", sans-serif',
                opacity: 0.6,
              }}
            >
              Show Assets
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "100%",
          maxWidth: 1100,
          background: "#fff",
          borderRadius: 3,
          minHeight: "100vh",
          padding: "16px",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            width: "100%",
            padding: "16px",
            background: "#F0F2F4",
            borderRadius: 3,
          }}
        >
          <Stack gap={0.5}>
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: '"inter", sans-serif',
                opacity: 0.6,
              }}
            >
              Overall Balance
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontFamily: '"inter", sans-serif',
                fontWeight: "bold",
              }}
            >
              {totalAmt.toFixed(2) || 0.0} USD
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: '"inter", sans-serif',
                opacity: 0.6,
              }}
            >
              = {totalAmt.toFixed(2) / (price && price["BTCUSDT"]) || 0} BTC
            </Typography>
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setdepositModal(true);
              }}
              sx={{
                backgroundColor: "#F7A600",
                color: "#000",
                fontFamily: "Inter, sans-serif",
                width: 100,
                textTransform: "none",
                "&:hover": { backgroundColor: "#e6a000" },
              }}
            >
              Deposit
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => {
                navigate("/swap");
              }}
              sx={{
                color: "#000",
                borderColor: "rgba(0, 0, 0, 0.2)",
                fontFamily: "Inter, sans-serif",
                textTransform: "none",
                "&:hover": { borderColor: "#F7A600", background: "#F7A600" },
              }}
            >
              Swap
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => toast.error("You need to deposit 100$.")}
              sx={{
                color: "#000",
                borderColor: "rgba(0, 0, 0, 0.2)",
                fontFamily: "Inter, sans-serif",
                textTransform: "none",
                "&:hover": { borderColor: "#F7A600", background: "#F7A600" },
              }}
            >
              Transfer
            </Button>
            <Button
              size="small"
              onClick={() => {
                setwithdrawlModal(true);
              }}
              variant="outlined"
              sx={{
                color: "#000",
                borderColor: "rgba(0, 0, 0, 0.2)",
                fontFamily: "Inter, sans-serif",
                textTransform: "none",
                "&:hover": { borderColor: "#F7A600", background: "#F7A600" },
              }}
            >
              Withdraw
            </Button>
            <Button
              size="small"
              onClick={() => {
                navigate("/profile/history");
              }}
              sx={{
                borderColor: "rgba(0, 0, 0, 0.2)",
                fontFamily: "Inter, sans-serif",
                textTransform: "none",
                "&:hover": { borderColor: "#F7A600", background: "#F7A600" },
              }}
            >
              History
            </Button>
          </Stack>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            width: "100%",
            padding: "20px 0",
            background: "#fff",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="text"
              sx={{
                minWidth: 0,
                px: 0,
                color: "#222",
                fontWeight: 400,
                fontFamily: '"inter", sans-serif',
                textTransform: "none",
                fontSize: 16,
                "&:hover": { background: "transparent", color: "#222" },
                borderRadius: 2,
              }}
            >
              All
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                minWidth: 0,
                px: 2,
                background: "#F0F2F4",
                color: "#222",
                fontWeight: 400,
                fontFamily: '"inter", sans-serif',
                textTransform: "none",
                fontSize: 16,
                borderRadius: 2,
                boxShadow: "none",
                "&:hover": {
                  background: "#F0F2F4",
                  color: "#222",
                  boxShadow: "none",
                },
              }}
            >
              Crypto
            </Button>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography
                sx={{
                  fontSize: 16,
                  color: "#222",
                  fontFamily: '"inter", sans-serif',
                  fontWeight: 400,
                }}
              >
                State Currencies
              </Typography>
              <Box
                sx={{
                  background: "#F0F2F4",
                  borderRadius: "6px",
                  px: 1,
                  py: "2px",
                  ml: 0.5,
                  display: "inline-block",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#222",
                    fontFamily: '"inter-bold", sans-serif',
                    fontWeight: 700,
                  }}
                >
                  Soon
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <TextField
            placeholder="Search"
            variant="outlined"
            InputLabelProps={{
              sx: {
                color: "#888",
                fontSize: 12,
                fontFamily: '"inter", sans-serif',
              },
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            size="small"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: "#888", mr: 1 }} />,
              sx: {
                background: "#fff",
                borderRadius: 3,
                "& fieldset": {
                  borderColor: "#e0e0e0",
                },
              },
            }}
            sx={{
              minWidth: 200,
              background: "#fff",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#e0e0e0",
                },
                "&:hover fieldset": {
                  borderColor: "#bdbdbd",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#F7A600",
                },
              },
            }}
          />
        </Stack>

        <AssetTable
          assets={filteredAssets}
          prices={price}
          setwithdrawlModal={setwithdrawlModal}
          setdepositModal={setdepositModal}
          userBalance={userBalance}
        />
      </Stack>
    </Stack>
  );
};

export default PcWallet;
