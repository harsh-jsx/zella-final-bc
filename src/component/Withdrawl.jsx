import {
  Button,
  MenuItem,
  Select,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Box,
  Switch,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import gsap from "gsap";

import CloseIcon from "@mui/icons-material/Close";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { getAuth } from "firebase/auth";

import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";

const Withdrawl = ({ assets, setwithdrawlModal }) => {
  const [user] = useAuthState(auth);
  const [coinSelect, setcoinSelect] = useState(0);
  const [loading, setLoading] = useState(true);

  const [price, setprice] = useState(null);
  const [chainSelected, setchainSelected] = useState(false);
  const [hide, sethide] = useState(false);
  const [blur, setblur] = useState(true);
  const [totalAmt, settotalAmt] = useState(0);
  const [selectedChain, setselectedChain] = useState(null);
  const [amount, setamount] = useState("");
  const [WithdrawlAddress, setWithdrawlAddress] = useState("");
  const [withdrawlamoutn, setwithdrawlamoutn] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    document.body.style.overflow = "hidden";

    gsap.to("#wModal", {
      top: "10%",
      duration: 1,
      ease: "power4.inOut",
    });

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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

      Object.entries(balance).forEach(([symbol, data]) => {
        const coin = data.currency;
        const balance = data.amount;
        const amount = balance * price[coin] || 0;
        total.push(amount);
      });
      const totalAmount = total.reduce((acc, curr) => acc + curr, 0);
      settotalAmt(totalAmount);
      console.log(totalAmt);

      return totalAmount;
    } catch (err) {
      console.error("Error calculating total user balance:", err);
      return 0;
    }
  };

  getTotalUserBalance();
  React.useEffect(() => {
    loadData();
  }, [assets]);

  const handleDepositSubmit = async () => {
    if (!amount || !WithdrawlAddress) {
      toast.error("Please fill all fields.");
      return;
    }
    try {
      //   const db = getFirestore();
      //   const auth = getAuth();
      //   const user = auth.currentUser;
      //   console.log(selectedChain.address);

      //   await addDoc(collection(db, "deposits"), {
      //     userId: user ? user.uid : null,
      //     coin: assets[coinSelect].name,
      //     chain: selectedChain.name,
      //     address: selectedChain?.address,
      //     amount,
      //     WithdrawlAddress,
      //     createdAt: serverTimestamp(),
      //   });
      //   toast.success("Deposit Request sent!");
      toast.error(`You need to deposit 100 more USDT in order to withdrawl`);
      setwithdrawlModal(false);
    } catch (error) {
      console.log(error);

      alert("Error submitting deposit request.");
    }
  };

  const kuchHogaIsse = () => {
    // Handle the deposit action here

    if (selectedChain) {
      toast.error("Please select a chain.");
      return;
    }
    setblur(false);
    sethide(true);
  };

  return (
    <Box
      id="wModal"
      sx={{
        position: isMobile ? "absolute" : "fixed",
        top: "500%",
        left: 0,
        width: "100%",
        minHeight: "90vh",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          background: "#fff",
          width: "100%",
          maxWidth: 1200,
          borderRadius: 2,
          boxShadow: 5,
          pb: 10,
        }}
        alignItems={"center"}
      >
        <Stack sx={{ width: "100%", padding: 1 }} alignItems={"flex-end"}>
          <IconButton
            aria-label="close"
            onClick={() => {
              gsap.to("#wModal", {
                top: "500%",
                duration: 1,
                ease: "power4.inOut",
                onComplete: () => setwithdrawlModal(false),
              });
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography
          sx={{ fontSize: 24, fontFamily: '"inter-bold", sans-serif' }}
        >
          Withdraw
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            background: "#f7f9fa",
            borderRadius: 2,
            px: 2,
            py: 1,
            mt: 1,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 12,
              color: "#22c55e",
              fontFamily: '"inter-bold", sans-serif',
            }}
          >
            Online
          </Typography>
        </Stack>
        <Stack
          direction={isMobile ? "column" : "row"}
          sx={{ width: "100%", mt: 2 }}
          justifyContent={"center"}
          spacing={isMobile ? 0 : 3}
        >
          <Stack
            sx={{
              width: isMobile ? "100%" : "45%",
              border: isMobile ? "none" : "1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: 1,
              padding: "20px 16px",
            }}
            spacing={2}
          >
            <Select
              size="small"
              fullWidth
              value={coinSelect}
              displayEmpty
              onChange={(e) => setcoinSelect(e.target.value)}
              renderValue={(selected) => {
                return (
                  <Stack direction="row" spacing={2} alignItems={"center"}>
                    <Typography variant="h6" sx={{ fontSize: 14 }}>
                      {assets[selected].name}
                    </Typography>
                  </Stack>
                );
              }}
            >
              {assets.map((lang, index) => (
                <MenuItem value={index} sx={{ display: "flex", gap: 2 }}>
                  <Typography variant="h6" sx={{ fontSize: 14 }}>
                    {lang.name}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ width: "100%" }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: '"inter", sans-serif',
                  color: "#969fa8",
                }}
              >
                General balance: {totalAmt || 1}
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: '"inter", sans-serif',
                  color: "#000",
                }}
              >
                {assets[coinSelect].symbol}
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              direction={"row"}
              alignItems={"center"}
              sx={{ width: "100%" }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: '"inter", sans-serif',
                  color: "#969fa8",
                }}
              >
                <CallMissedOutgoingIcon
                  sx={{
                    verticalAlign: "middle",
                    mr: 1,
                    mt: "-4px",
                  }}
                />
                Go to trading:
              </Typography>

              <Stack direction={"row"} spacing={1}>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: '"inter", sans-serif',
                    color: "#000",
                  }}
                >
                  BTC
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: '"inter", sans-serif',
                    color: "#000",
                  }}
                >
                  ETH
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: '"inter", sans-serif',
                    color: "#000",
                  }}
                >
                  USDT
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: '"inter", sans-serif',
                    color: "#000",
                  }}
                >
                  USDC
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: '"inter", sans-serif',
                    color: "#000",
                  }}
                >
                  TRX
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: '"inter", sans-serif',
                    color: "#000",
                  }}
                >
                  TON
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: '"inter", sans-serif',
                    color: "#000",
                  }}
                >
                  BON
                </Typography>
              </Stack>
            </Stack>
            <Stack
              spacing={1}
              direction={"row"}
              alignItems={"center"}
              sx={{ width: "100%" }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: '"inter", sans-serif',
                  color: "#969fa8",
                }}
              >
                Select the address Type:
              </Typography>
            </Stack>
            {assets[coinSelect].chains.map((chain, idx) => (
              <>
                <Stack direction={"row"} spacing={1} width={"100%"}>
                  <Button
                    variant="outlined"
                    onClick={() => setselectedChain(chain)}
                    key={idx}
                    value={chainSelected}
                    sx={{
                      width: "50%",
                      borderColor: "rgba(0, 0, 0, 0.3)",
                      color: "#000",
                      background:
                        selectedChain?.name === chain.name
                          ? "#4ade80"
                          : "transparent",
                    }}
                  >
                    {chain.name}
                  </Button>
                </Stack>
              </>
            ))}

            <Stack
              spacing={1}
              direction={"row"}
              alignItems={"center"}
              sx={{ width: "100%", padding: 2, background: "#F0F2F4" }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  fontFamily: '"inter", sans-serif',
                  color: "#3c3c44",
                }}
              >
                Send only {assets[coinSelect].symbol} to the deposit address.
                Sending any other coins or tokens to this address may result in
                loss of funds.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: isMobile ? "100%" : "45%",
              border: isMobile ? "none" : "1px solid rgba(0, 0, 0, 0.2)",

              borderRadius: 1,
              padding: "20px 16px",
            }}
          >
            {/* <Stepper activeStep={-1} orientation="vertical">
              <Step>
          
                <StepLabel
                  sx={{
                    fontSize: 14,
                    fontFamily: '"inter", sans-serif',
                    color: "#969fa8",
                    "& .MuiStepIcon-root": {
                      fontSize: "18px", // default is 24px — reduce for a smaller circle
                      width: 20,
                      height: 20,
                    },
                    "& .MuiStepIcon-text": {
                      fontSize: "12px", // number inside the circle
                    },
                  }}
                >
                  Select the Coin you want to withdraw
                </StepLabel>
              </Step>
              <Step
                sx={{
                  fontSize: 14,
                  fontFamily: '"inter", sans-serif',
                  color: "#969fa8",
                  marginTop: isMobile ? "-35px" : "-8px",
                  "& .MuiStepIcon-root": {
                    fontSize: "18px", // default is 24px — reduce for a smaller circle
                    width: 20,
                    height: 20,
                  },
                  "& .MuiStepIcon-text": {
                    fontSize: "12px", // number inside the circle
                  },
                }}
              >
                <StepLabel>Select the chain</StepLabel>
              </Step>
              <Step
                sx={{
                  fontSize: 14,
                  fontFamily: '"inter", sans-serif',
                  color: "#969fa8",
                  marginTop: isMobile ? "-35px" : "-8px",
                  "& .MuiStepIcon-root": {
                    fontSize: "18px", // default is 24px — reduce for a smaller circle
                    width: 20,
                    height: 20,
                  },
                  "& .MuiStepIcon-text": {
                    fontSize: "12px", // number inside the circle
                  },
                }}
              >
                <StepLabel>Enter your address and click on withdraw</StepLabel>
              </Step>
            </Stepper> */}
            {hide ? (
              <Stack>
                <TextField
                  label="Amount"
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={amount}
                  onChange={(e) => setamount(e.target.value)}
                  sx={{
                    mt: 3,
                    mb: 3,
                    height: 48,
                    fontFamily: "Roboto",
                    fontWeight: 500,
                  }}
                />
                <TextField
                  label="Withdrawl Address  "
                  variant="outlined"
                  fullWidth
                  value={WithdrawlAddress}
                  onChange={(e) => setWithdrawlAddress(e.target.value)}
                  sx={{
                    mt: 3,
                    mb: 3,
                    height: 48,
                    fontFamily: "Roboto",
                    fontWeight: 500,
                  }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    height: 48,
                    color: "#000",
                    background: "#F7A600",
                    fontFamily: "Roboto",
                    fontWeight: 500,
                  }}
                  onClick={handleDepositSubmit}
                >
                  Submit
                </Button>
              </Stack>
            ) : (
              <>
                <Typography
                  sx={{
                    fontFamily: "inter",
                    fontSize: "14px",
                    color: "#969fa8",
                  }}
                >
                  Withdrawal Address
                </Typography>
                <TextField
                  label="Crypto Address"
                  variant="outlined"
                  fullWidth
                  value={WithdrawlAddress}
                  onChange={(e) => setWithdrawlAddress(e.target.value)}
                  sx={{
                    mt: 3,
                    height: 48,
                    marginBottom: "20px",
                    fontFamily: "Roboto",
                    fontWeight: 500,
                  }}
                />
                <TextField
                  label="Amount"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={withdrawlamoutn}
                  onChange={(e) => setwithdrawlamoutn(e.target.value)}
                  sx={{
                    mt: 3,
                    height: 48,
                    marginBottom: "20px",
                    fontFamily: "Roboto",
                    fontWeight: 500,
                  }}
                />
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Switch />
                  <Typography
                    sx={{
                      opacity: 0.5,
                      fontSize: 14,
                      fontFamily: "Roboto",
                      fontWeight: 500,
                    }}
                  >
                    Show amount with commission
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    py: 2,
                  }}
                >
                  <Typography
                    sx={{
                      opacity: 0.5,
                      fontSize: 16,
                      fontFamily: "Roboto",
                      fontWeight: 500,
                    }}
                  >
                    You'll pay {withdrawlamoutn} BTC
                  </Typography>
                  <Typography
                    sx={{
                      opacity: 0.5,
                      fontSize: 16,
                      fontFamily: "Roboto",
                      fontWeight: 500,
                    }}
                  >
                    You'll get {withdrawlamoutn} BTC
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  onClick={kuchHogaIsse}
                  fullWidth
                  sx={{
                    mt: 1,
                    height: 48,
                    color: "#000",
                    background: "#F7A600",
                    fontFamily: "Roboto",
                    fontWeight: 500,
                  }}
                >
                  Request Withdrawl
                </Button>
                <Typography
                  sx={{
                    fontFamily: "inter",
                    fontSize: "14px",
                    color: "#969fa8",
                    mt: 2,
                  }}
                >
                  Payments can take anywhere from a few minutes to a few hours
                  to process.
                </Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Withdrawl;
