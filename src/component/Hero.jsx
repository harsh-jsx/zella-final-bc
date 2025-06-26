import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Stack,
  TextField,
} from "@mui/material";
import HeroImage from "../assets/HeroImage.jpg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Hero = () => {
  const [user] = useAuthState(auth);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ background: "#101014", height: 500 }}
    >
      <Stack
        spacing={2}
        justifyContent={isMobile ? "center" : "auto"}
        alignItems={isMobile ? "center" : "auto"}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "inter-bold, sans-serif",
            color: "white",
            maxWidth: isMobile ? "400px" : "600px",
            fontSize: isMobile ? "27.2px" : "48px",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Buy, trade and invest in <br /> over 150 <br /> cryptocurrencies!
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "inter",
            color: "white",
            opacity: 0.6,
            fontSize: 20,
            textAlign: isMobile ? "center" : "left",
            maxWidth: isMobile ? "400px" : "auto",
          }}
        >
          Learn all the details about the advantages of trading on our exchange
        </Typography>
        {user ? (
          <>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                window.location.href = "/profile/wallet";
              }}
              sx={{
                backgroundColor: "#FFB800",
                color: "#000",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                borderRadius: 2,
                textTransform: "none",
                height: isMobile ? 40 : "auto",
                width: isMobile ? "90%" : 150,
                "&:hover": { backgroundColor: "#e6a000" },
              }}
            >
              Profile
            </Button>
          </>
        ) : (
          <Stack
            direction={isMobile ? "column" : "row"}
            gap={2}
            alignItems={isMobile ? "center" : "auto"}
            sx={{
              paddingTop: isMobile ? 10 : 0,
              width: isMobile ? "100%" : "auto",
            }}
          >
            <TextField
              placeholder="E-Mail"
              sx={{
                background: "#fff",
                width: isMobile ? "90%" : 400,
                borderRadius: 3,
                label: "black",
                input: {
                  border: "none",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                window.location.href = "/register";
              }}
              // onClick={(window.location.href = "/register")}
              sx={{
                backgroundColor: "#FFB800",
                color: "#000",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                textTransform: "none",
                borderRadius: 4,
                height: isMobile ? 40 : "auto",
                width: isMobile ? "90%" : 150,
                "&:hover": { backgroundColor: "#e6a000" },
              }}
            >
              Sign Up
            </Button>
          </Stack>
        )}
      </Stack>
      <Box sx={{ width: "34.8%", display: isMobile ? "none" : "block" }}>
        <img
          src={HeroImage}
          alt="lol"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Stack>
  );
};

export default Hero;
