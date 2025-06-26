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

const verification = ({ setappModal }) => {
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
      disabled: false,
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
      disabled: true,
    },
  ];

  return (
    <Stack>
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
            Identity Verification
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} gap={5} sx={{ mt: 5 }}>
            {options.map((option) => (
              <Stack
                spacing={2}
                sx={{
                  width: "100%",
                  maxWidth: 580,
                  p: "24px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: 3,
                }}
              >
                <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
                  {option.header}
                </Typography>
                <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                  Requirements
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: 16, color: "#828C9B" }}
                >
                  {option.requirements}
                </Typography>
                <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                  Features and Limits
                </Typography>
                <Stack sx={{ height: 176 }} spacing={1}>
                  {option.features.map((feature) => (
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Stack spacing={1} direction={"row"}>
                        {feature.icon}
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: 16,
                            color: "#828C9B",
                          }}
                        >
                          {feature.name}
                        </Typography>
                      </Stack>
                      <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                        {feature.type}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => (window.location.href = "/first-level")}
                  size="large"
                  disabled={option.disabled}
                  sx={{ background: "#E69A00", color: "#000" }}
                >
                  Verify
                </Button>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Footer seamless={true} />
    </Stack>
  );
};

export default verification;
