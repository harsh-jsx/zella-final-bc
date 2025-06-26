import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Stack,
  Link,
  InputAdornment,
  IconButton,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./list.json";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import toast from "react-hot-toast";
const Promo = ({ setappModal }) => {
  const [inputFocused, setinputFocused] = useState({
    email: false,
    password: false,
    captcha: false,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const options = [
    {
      header: "Lv.1 Basic Verification",
      requirements: "Personal Information & Identification Document",
      features: [
        {
          icon: <ArrowForwardOutlinedIcon sx={{ color: "#E69A00" }} />,
          type: "Available",
          name: "Deposits",
        },
        {
          icon: (
            <ArrowForwardOutlinedIcon
              sx={{ rotate: "180deg", color: "#E69A00" }}
            />
          ),
          type: "Available",
          name: "Withdrawals",
        },
        {
          icon: <CompareArrowsOutlinedIcon sx={{ color: "#E69A00" }} />,
          type: "Available",
          name: "Spot Trading",
        },
      ],
      disabled: true,
    },
    {
      header: "Lv.2 Advanced Verification",
      requirements:
        "Identification Document & Trading volume more than 10,000 USDT",
      features: [
        {
          icon: <ArrowForwardOutlinedIcon sx={{ color: "#E69A00" }} />,
          type: "Unlimited",
          name: "Deposits",
        },
        {
          icon: (
            <ArrowForwardOutlinedIcon
              sx={{ rotate: "180deg", color: "#E69A00" }}
            />
          ),
          type: "Unlimited",
          name: "Withdrawals",
        },
        {
          icon: <CreditCardOutlinedIcon sx={{ color: "#E69A00" }} />,
          type: "Available",
          name: "Margin Trading",
        },
        {
          icon: <CompareArrowsOutlinedIcon sx={{ color: "#E69A00" }} />,
          type: "Available",
          name: "Futures Trading",
        },
      ],
      disabled: false,
    },
  ];

  const handleSubmit = () => {
    toast.error("You need to deposit 200$ in order to do that.");
  };

  return (
    <>
      <Stack height={"62.19vh"}>
        <Navbar />
        <Stack
          direction={isMobile ? "column" : "row"}
          sx={{ overflow: "hidden" }}
        >
          <Sidebar />
          <Stack sx={{ p: "32px", mt: 2, width: isMobile ? "100%" : "87%" }}>
            <Typography
              sx={{ fontFamily: "Roboto", fontSize: 24, fontWeight: "bold" }}
              gutterBottom
            >
              Promo codes
            </Typography>
            <Stack
              direction={"row"}
              alignContent={"center"}
              alignItems={"center"}
            >
              <img
                height={"30px"}
                width={"30px"}
                src="https://bit-frame.net/assets/img/settings/promo.svg"
                alt=""
              />{" "}
              <Typography ml={2}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Activate your gift code.
                </Typography>
                <br />{" "}
                <Typography>your gift card (promo) Enter code of</Typography>
              </Typography>
            </Stack>
            <Typography variant="h6" sx={{ color: "#D6850D" }} mt={2}>
              You haven't activated the promo codes yet
            </Typography>

            <ul className="ant-card-ul" style={{ marginTop: "20px" }}>
              <li>
                <Typography>
                  Project gift codes can be purchased and exchanged through
                  distributors and stockbrokers, as well as used to settle
                  payments with vendors.
                </Typography>
              </li>
              <li>
                <Typography>
                  Once you receive a gift code, you only need to take a few
                  steps to use it.
                </Typography>
              </li>
              <li>
                <Typography>
                  Usage options include: Reselling gift cards, loyalty rewards
                  and games, e-commerce purchases and more.
                </Typography>
              </li>
            </ul>
            <Stack
              height={"100%"}
              direction={"row"}
              alignContent={"center"}
              width={"100%"}
            >
              <Box
                sx={{
                  border: `1px solid ${"#F5A623"}`,
                  transition: "all ease 0.3s",
                  borderRadius: 3,
                  width: "20%",
                  background: "transparent",
                  mt: 2,
                }}
              >
                <TextField
                  size="small"
                  required
                  label="Promo Code"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ sx: { color: "gray" } }}
                  sx={{
                    color: "gray",
                    fontSize: 22,
                    backgroundColor: "transparent",
                    height: "100%",
                    label: { marginTop: "-5px" },
                    "& .Mui-focused": {
                      marginTop: "0px",
                      color: "gray !important",
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255,255,255, 0)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255,255,255, 0)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgba(255,255,255, 0)",
                      },
                    },
                  }}
                  inputRef={(input) => {
                    if (input) {
                      input.onfocus = () =>
                        setinputFocused((prev) => ({
                          ...prev,
                          password: true,
                        }));
                      input.onblur = () =>
                        setinputFocused((prev) => ({
                          ...prev,
                          password: false,
                        }));
                    }
                  }}
                />
              </Box>
              <Button
                onClick={handleSubmit}
                sx={{
                  mt: 3,
                  ml: 2,
                  textAlign: "center",
                  backgroundColor: "#f7a600",
                  color: "black",
                  height: "48px",
                  width: "150px",
                }}
              >
                Activate
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer seamless={true} />
    </>
  );
};

export default Promo;
