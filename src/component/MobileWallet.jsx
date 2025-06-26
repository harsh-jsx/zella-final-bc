import {
  Box,
  Button,
  List,
  ListItemButton,
  Stack,
  TextField,
  Typography,
  Collapse,
} from "@mui/material";
import React, { useState } from "react";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { auth, db } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MobileWallet = ({
  assets,
  setdepositModal,
  setwithdrawlModal,
  setcoinSelect,
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
  const [depositModal, setDepositModal] = React.useState(false);
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

  const getTotalUserBalance = async () => {
    loadData();
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
    if (search) {
      const filtered = assets.filter((asset) =>
        asset.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredAssets(filtered);
    } else {
      setFilteredAssets(assets);
    }
    getTotalUserBalance();
  }, [search, assets, price]);

  return (
    <Stack
      alignItems={"center"}
      sx={{ background: "#fff", minHeight: "100vh" }}
    >
      <Stack
        sx={{
          height: 200,
          background:
            "radial-gradient(46.39% 130.06% at 50% 27.21%, #251527 0, #111115 100%)",
          width: "100%",
        }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
      >
        <Stack spacing={1} alignItems={"center"}>
          <Typography
            sx={{
              fontSize: 12,
              fontFamily: '"inter-medium", sans-serif',
              color: "#fff",
              opacity: 0.7,
            }}
          >
            Overall Balance
          </Typography>
          <Typography
            sx={{
              fontSize: 24,
              fontFamily: '"inter-medium", sans-serif',
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {totalAmt.toFixed(2)} USD
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Stack gap={1} alignItems={"center"}>
            <Button
              sx={{
                width: 48,
                height: 48,
                background: "#f5f5f5",
                borderRadius: 4,
                minWidth: 48,
              }}
              onClick={() => {
                setdepositModal(true);
              }}
            >
              <CallReceivedIcon sx={{ color: "#000" }} />
            </Button>
            <Typography
              sx={{
                fontSize: 12,
                fontFamily: '"inter", sans-serif',
                color: "#fff",
              }}
            >
              Deposit
            </Typography>
          </Stack>
          <Stack gap={1} alignItems={"center"}>
            <Button
              onClick={() => {
                window.location.href = "/swap";
              }}
              sx={{
                width: 48,
                height: 48,
                background: "#f5f5f5",
                borderRadius: 4,
                minWidth: 48,
              }}
            >
              <CompareArrowsIcon sx={{ color: "#000" }} />
            </Button>
            <Typography
              sx={{
                fontSize: 12,
                fontFamily: '"inter", sans-serif',
                color: "#fff",
              }}
            >
              Swap
            </Typography>
          </Stack>
          <Stack gap={1} alignItems={"center"}>
            <Button
              onClick={() => {
                toast.error(
                  "You need to deposit 100$ more in order to transfer"
                );
              }}
              sx={{
                width: 48,
                height: 48,
                background: "#f5f5f5",
                borderRadius: 4,
                minWidth: 48,
              }}
            >
              <CompareArrowsIcon sx={{ color: "#000", rotate: "90deg" }} />
            </Button>
            <Typography
              sx={{
                fontSize: 12,
                fontFamily: '"inter", sans-serif',
                color: "#fff",
              }}
            >
              Transfer
            </Typography>
          </Stack>
          <Stack gap={1} alignItems={"center"}>
            <Button
              onClick={() => {
                setwithdrawlModal(true);
              }}
              sx={{
                width: 48,
                height: 48,
                background: "#f5f5f5",
                borderRadius: 4,
                minWidth: 48,
              }}
            >
              <CallReceivedIcon sx={{ color: "#000", rotate: "180deg" }} />
            </Button>
            <Typography
              sx={{
                fontSize: 12,
                fontFamily: '"inter", sans-serif',
                color: "#fff",
              }}
            >
              Withdrawl
            </Typography>
          </Stack>
          <Stack gap={1} alignItems={"center"}>
            <Button
              onClick={() => {
                window.location.href = "/profile/history";
              }}
              sx={{
                width: 48,
                height: 48,
                background: "#f5f5f5",
                borderRadius: 4,
                minWidth: 48,
              }}
            >
              <SummarizeIcon sx={{ color: "#000" }} />
            </Button>
            <Typography
              sx={{
                fontSize: 12,
                fontFamily: '"inter", sans-serif',
                color: "#fff",
              }}
            >
              History
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems={"center"} sx={{ width: "95%", mt: 2 }}>
        <TextField
          placeholder="Search"
          variant="outlined"
          fullWidth
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

        <List
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            mt: 2,
          }}
        >
          {assets.map((asset, index) => {
            const [open, setopen] = useState(false);

            return (
              <>
                <ListItemButton
                  onClick={() => (open ? setopen(false) : setopen(true))}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 0,
                  }}
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
                        {asset.symbol}
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
                  {open ? (
                    <Stack direction={"row"} spacing={1}>
                      <Stack>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: '"inter-medium", sens-serif',
                            color: "#101014",
                            fontWeight: 500,
                            fontSize: 12,
                          }}
                        ></Typography>
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
                          0.00 USD
                        </Typography>
                      </Stack>
                      <ExpandLess sx={{ color: "#000" }} />
                    </Stack>
                  ) : (
                    <Stack direction={"row"} spacing={1}>
                      <Stack>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: '"inter-medium", sens-serif',
                            color: "#101014",
                            fontWeight: 500,
                            fontSize: 12,
                          }}
                        >
                          {/* {price[asset.symbol]} USD */}
                        </Typography>
                        {/* <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            fontFamily: '"inter", sens-serif',
                            color: "#101014",
                            fontWeight: 400,
                            fontSize: 10,
                          }}
                        >
                          0.00 USD
                        </Typography> */}
                      </Stack>
                      <ExpandMore sx={{ color: "#000" }} />
                    </Stack>
                  )}
                </ListItemButton>
                <Collapse
                  in={open}
                  timeout="auto"
                  unmountOnExit
                  sx={{
                    width: "100%",
                    background: "#F0F2F4",
                    padding: 2,
                  }}
                >
                  <List
                    component="div"
                    disablePadding
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      sx={{ width: "100%" }}
                    >
                      <Stack>
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
                          Main
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: '"inter-medium", sens-serif',
                            color: "#101014",
                            fontWeight: 500,
                            fontSize: 12,
                          }}
                        >
                          {userBalance
                            ? userBalance[asset.symbol].amount.toFixed(2)
                            : 0.0}
                          {/* {price[asset.symbol] || 0} */}
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
                          {userBalance
                            ? userBalance[asset.symbol].amount *
                              price[asset.symbol]
                            : 0.0}{" "}
                          USD
                        </Typography>
                      </Stack>
                      <Stack>
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
                          Trading
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: '"inter-medium", sens-serif',
                            color: "#101014",
                            fontWeight: 500,
                            fontSize: 12,
                          }}
                        >
                          0.00
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
                          0.00 USD
                        </Typography>
                      </Stack>
                      <Stack>
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
                          Collateral
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: '"inter-medium", sens-serif',
                            color: "#101014",
                            fontWeight: 500,
                            fontSize: 12,
                          }}
                        >
                          0.00
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
                          0.00 USD
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      sx={{ width: "100%" }}
                    >
                      <Button
                        onClick={() => {
                          setdepositModal(true);
                          setcoinSelect(index);
                        }}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "rgba(0,0,0,0.2)",
                          color: "#000",
                          fontWeight: 400,
                          fontSize: 12,
                          fontFamily: "inter",
                          padding: "4px 30px",
                        }}
                      >
                        Deposit
                      </Button>
                      <Button
                        size="small"
                        onClick={() => {
                          window.location.href = "/swap";
                        }}
                        variant="outlined"
                        sx={{
                          borderColor: "rgba(0,0,0,0.2)",
                          color: "#000",
                          fontWeight: 400,
                          fontSize: 12,
                          fontFamily: "inter",
                          padding: "4px 30px",
                        }}
                      >
                        Swap
                      </Button>
                      <Button
                        onClick={() => {
                          setwithdrawlModal(true);
                        }}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "rgba(0,0,0,0.2)",
                          color: "#000",
                          fontWeight: 400,
                          fontSize: 12,
                          fontFamily: "inter",
                          padding: "4px 30px",
                        }}
                      >
                        Withdraw
                      </Button>
                    </Stack>
                  </List>
                </Collapse>
              </>
            );
          })}
        </List>
      </Stack>
    </Stack>
  );
};

export default MobileWallet;
