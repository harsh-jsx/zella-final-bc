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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import CloseIcon from "@mui/icons-material/Close";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import toast from "react-hot-toast";
import gsap from "gsap";

const Deposit = ({
  depositModal,
  assets,
  setdepositModal,
  coinSelect,
  setcoinSelect,
}) => {
  const [chainSelected, setchainSelected] = useState(false);
  const [hide, sethide] = useState(false);
  const [blur, setblur] = useState(true);
  const [selectedChain, setselectedChain] = useState(null);
  const [amount, setamount] = useState("");
  const [transactionID, settransactionID] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Fetch search params with the name type="all"

  useEffect(() => {
    document.body.style.overflow = "hidden";

    gsap.to("#depositModal", {
      top: "10%",
      duration: 1,
      ease: "power4.inOut",
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, [depositModal]);

  const handleCopy = () => {
    if (selectedChain && selectedChain.address) {
      navigator.clipboard.writeText(selectedChain.address);
      toast.success("Address copied to clipboard!");
    } else {
      toast.error("No address to copy.");
    }
  };

  const handleDepositSubmit = async () => {
    if (!selectedChain || !amount || !transactionID) {
      toast.error("Please fill all fields.");
      return;
    }
    try {
      const db = getFirestore();
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(selectedChain.address);

      await addDoc(collection(db, "deposits"), {
        userId: user ? user.uid : null,
        coin: assets[coinSelect].name,
        symbol: assets[coinSelect].symbol,
        chain: selectedChain.name,
        address: selectedChain?.address,
        amount,
        transactionID,
        createdAt: serverTimestamp(),
      });
      toast.success("Deposit Request sent!");
      setdepositModal(false);
    } catch (error) {
      console.log(error);

      alert("Error submitting deposit request.");
    }
  };

  const kuchHogaIsse = () => {
    // Handle the deposit action here

    if (!selectedChain) {
      toast.error("Please select a chain.");

      return;
    }

    gsap.fromTo(
      "#depositModal img",
      { y: 40, opacity: 0, filter: "blur(16px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      }
    );

    setblur(false);
    sethide(true);
  };

  useEffect(() => {
    setselectedChain(null);
    setchainSelected(false);
    setamount("");
    settransactionID("");
    sethide(false);
    setblur(true);
  }, [coinSelect]);

  return (
    <Box
      id="depositModal"
      sx={{
        position: isMobile ? "absolute" : "fixed",
        top: "500%",
        left: 0,
        width: "100%",
        minHeight: "75vh",
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
          pb: 4,
        }}
        alignItems={"center"}
      >
        <Stack sx={{ width: "100%", padding: 1 }} alignItems={"flex-end"}>
          <IconButton
            aria-label="close"
            onClick={() => {
              gsap.to("#depositModal", {
                top: "500%",
                duration: 1,
                ease: "power4.inOut",
                onComplete: () => setdepositModal(false),
              });
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Typography
          sx={{
            fontSize: 24,
            fontFamily: '"inter-bold", sans-serif',
            marginTop: "-20px",
          }}
        >
          Deposit {assets[coinSelect].name}
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
                    <img
                      src={assets[selected].icon}
                      alt="French Flag"
                      style={{ width: 30, height: 30, borderRadius: "50%" }}
                    />
                    <Typography variant="h6" sx={{ fontSize: 14 }}>
                      {assets[selected].name}
                    </Typography>
                  </Stack>
                );
              }}
            >
              {assets.map((lang, index) => (
                <MenuItem value={index} sx={{ display: "flex", gap: 2 }}>
                  <img
                    src={lang.icon}
                    alt="French Flag"
                    style={{ width: 30, height: 30, borderRadius: "50%" }}
                  />
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
                General balance:
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: '"inter", sans-serif',
                  color: "#000",
                }}
              >
                0.0 {assets[coinSelect].symbol}
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
                    value={selectedChain}
                    onClick={() => setselectedChain(chain)}
                    key={idx}
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
            <Stack
              sx={{
                filter: blur ? "blur(0px)" : "none",
                width: "100%",
                overflow: "hidden",
                paddingY: 4,
              }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src="data:image/png;base64,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"
                alt=""
                style={{
                  height: isMobile ? "150px" : "150px",
                  width: isMobile ? "150px" : "150px",
                  filter: blur ? "blur(10px)" : "blur(0px)",
                  objectFit: "contain",
                  paddingBottom: "20px",
                }}
              />
            </Stack>

            <Stack spacing={1} sx={{ mt: 2 }}>
              {[
                'Click the "Deposit to Address" button',
                "Transfer the required amount of coins to the provided address",
                "Wait for the funds to be credited to your account",
              ].map((text) => (
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      background: "gray",
                      borderRadius: "50%",
                    }}
                  ></Box>
                  <Typography sx={{ fontSize: 12 }}>{text}</Typography>
                </Stack>
              ))}
            </Stack>
            {hide ? (
              <Stack>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={selectedChain?.address}
                  sx={{
                    mt: 3,
                    height: 48,
                    fontFamily: "Roboto",
                    fontWeight: 500,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleCopy}>
                          <ContentCopyIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Amount"
                  variant="outlined"
                  type="number"
                  fullWidth
                  value={amount}
                  onChange={(e) => setamount(e.target.value)}
                  sx={{
                    mt: 3,
                    height: 48,
                    fontFamily: "Roboto",
                    fontWeight: 500,
                  }}
                />
                <TextField
                  label="Transaction ID"
                  variant="outlined"
                  fullWidth
                  value={transactionID}
                  onChange={(e) => settransactionID(e.target.value)}
                  sx={{
                    mt: 3,
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
                <Button
                  size="small"
                  variant="outlined"
                  fullWidth
                  onClick={kuchHogaIsse}
                  sx={{
                    mt: 3,
                    height: 48,

                    color: "#000",
                    borderColor: "#F7A600",
                    fontFamily: "Roboto",
                    fontWeight: 500,
                  }}
                >
                  Flat Deposit
                </Button>
                <Button
                  size="small"
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
                  Deposit to Address
                </Button>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Deposit;
