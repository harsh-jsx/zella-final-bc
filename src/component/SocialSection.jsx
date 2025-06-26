import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const SocialSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      sx={{
        width: "100%",
        height: isMobile ? "30rem" : "42rem",
        background: "#08080C",
        marginTop: "100px",
        backgroundImage: "url(https://bit-frame.net/assets/img/mobiles.png)",
        backgroundPosition: "bottom",
        backgroundSize: isMobile ? "100%" : "54.8125rem",
        backgroundRepeat: "no-repeat",
        paddingTop: "100px",
        position: "relative",
        overflow: "hidden",
        zIndex: 10,
      }}
      spacing={2}
      alignItems={"center"}
    >
      <div
        class="social-section__background"
        style={{ zIndex: 5, display: isMobile ? "none" : "block" }}
      ></div>
      <div
        class="bg_2"
        style={{ zIndex: 5, display: isMobile ? "none" : "block" }}
      ></div>
      <div
        class="bg_3"
        style={{ zIndex: 5, display: isMobile ? "none" : "block" }}
      ></div>
      <div
        class="bg_4"
        style={{ zIndex: 5, display: isMobile ? "none" : "block" }}
      ></div>
      <Stack
        spacing={2}
        sx={{ width: "90%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontSize: isMobile ? 24 : 40,
            fontWeight: 800,
            fontFamily: `"inter-bold", sans-serif`,
            zIndex: 10,
          }}
        >
          Always on hand
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#fff",
            fontSize: isMobile ? 12 : 16,
            fontWeight: 400,
            fontFamily: `"inter", sans-serif`,
            opacity: 0.6,
            textAlign: "center",
            zIndex: 10,
          }}
        >
          We have gathered all the necessary tools in a secure application with
          a clear interface
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SocialSection;
