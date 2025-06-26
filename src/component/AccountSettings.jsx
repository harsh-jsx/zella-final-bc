import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  Paper,
  Tooltip,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import ImageIcon from "@mui/icons-material/Image";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import GppGoodIcon from "@mui/icons-material/GppGood";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";
import { getDoc, doc } from "firebase/firestore";

const settingsList = [
  {
    icon: <Person2OutlinedIcon sx={{ fontSize: "20px" }} />,
    heading: "Profile Picture",
    subHeading: "Please upload a profile picture",
    buttonText: "Upload",
  },
  {
    icon: <HowToRegOutlinedIcon sx={{ fontSize: "20px" }} />,
    heading: "Identity Verification",
    subHeading: "Complete KYC verification to unlock new opportunities",
    buttonText: "Verify Now",
  },
  {
    icon: <GTranslateOutlinedIcon sx={{ fontSize: "20px" }} />,
    heading: "Google Two Factor Authentication",
    subHeading: "Additional protection when logging into an account",
    buttonText: "Settings",
  },
  {
    icon: <CropFreeOutlinedIcon sx={{ fontSize: "20px" }} />,
    heading: "Anti-Phishing Code",
    subHeading:
      "All of our official emails will contain anti-phishing code to prevent phishing attempts",
    buttonText: "Settings",
  },
];

const AccountSettings = () => {
  const [user] = useAuthState(auth);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [numID, setnumID] = useState(0);
  useEffect(() => {
    const getUserNumId = async () => {
      const userDocRef = await getDoc(doc(db, "users", user?.uid));
      if (!userDocRef.exists()) return 0;
      console.log(userDocRef);
      setnumID(userDocRef.data().uniquenumid);
    };

    getUserNumId();
  }, [user]);

  const headerList = [
    {
      title: "Last login time:",
      color: "#000",
      value: user?.metadata?.lastSignInTime,
    },
    {
      title: "Status:",
      color: "red",
      value: "Unverified",
    },
    {
      title: "VIP:",
      color: "red",
      value: "No",
    },
    {
      title: "Security level:",
      color: "red",
      value: "Low",
    },
  ];

  return (
    <Stack sx={{ p: "32px", mt: 2, width: isMobile ? "100%" : "87%" }}>
      <Typography
        sx={{ fontFamily: "Roboto", fontSize: 24, fontWeight: "bold" }}
        gutterBottom
      >
        Account Info
      </Typography>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={isMobile ? 2 : 0}
        sx={{ width: "100%", mt: isMobile ? "20px" : "64px" }}
      >
        <Stack spacing={2}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Avatar
              src="https://bit-frame.net/assets/img/avatar.svg"
              alt="avatar"
              sx={{ width: 90, height: 90 }}
            />
            <Stack spacing={1}>
              <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
                {user?.email.slice(0, 3)}***@****
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: 11,
                  color: "#81858c",
                  background: "#grey",
                  p: 2,
                  borderRadius: 50,
                }}
              >
                UID {numID}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={isMobile ? "space-between" : "auto"}
            flexWrap={"wrap"}
            gap={isMobile ? 2 : 7}
          >
            {headerList.map((item) => (
              <Stack gap={1}>
                <Typography sx={{ fontSize: 12, color: "#adb1b8" }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontWeight: "bold",
                    fontSize: 18,
                    color: item.color,
                  }}
                >
                  {item.value}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            padding: "24px",
            background: "#FFF3F0",
            borderRadius: 4,
            display: isMobile ? "none" : "flex",
          }}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={2}
        >
          <Stack spacing={1}>
            <Typography
              sx={{
                color: "#121214",
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "bold",
                width: "100%",
                maxWidth: 307,
              }}
            >
              Your account security level is Low. Please set up the following as
              soon as possible.
            </Typography>
            <Typography
              sx={{
                color: "red",
                fontSize: 14,
                lineHeight: "14px",
                width: "100%",
                maxWidth: 300,
                textDecoration: "underline",
              }}
            >
              {" "}
              Google 2FA Authentication
            </Typography>
          </Stack>
          <img
            src="https://bit-frame.net/assets/img/settings/security-2fa.svg"
            alt="idk"
          />
        </Stack>
      </Stack>
      <Stack sx={{ mt: 2, width: "100%" }}>
        {settingsList.map((setting) => (
          <Stack
            direction={isMobile ? "column" : "row"}
            sx={{ py: "22px", width: "100%" }}
            justifyContent={!isMobile ? "space-between" : "auto"}
            alignItems={!isMobile ? "center" : "auto"}
          >
            <Stack
              spacing={2}
              direction={"row"}
              justifyContent={!isMobile ? "center" : "auto"}
              alignItems={"center"}
            >
              <Box
                sx={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#F3F5F7",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {setting.icon}
              </Box>
              <Stack>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontSize: 16,
                    fontFamily: "Roboto",
                  }}
                >
                  {setting.heading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: "Roboto",
                    color: "#81858c",
                  }}
                >
                  {setting.subHeading}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              spacing={2}
              direction={"row"}
              justifyContent={isMobile ? "space-between" : "center"}
              alignItems={"center"}
              sx={{ mt: isMobile ? 3 : 0 }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: "Roboto",
                  color: "#81858c",
                }}
              >
                Not Configured
              </Typography>
              <Button
                variant="contained"
                size={isMobile ? "small" : ""}
                sx={{
                  backgroundColor: "#FFB800",
                  color: "#000",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#e6a000" },
                }}
              >
                {setting.buttonText}
              </Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default AccountSettings;
