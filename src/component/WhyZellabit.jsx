import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const WhyZellabit = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack alignItems={"center"} sx={{ paddingTop: "100px" }}>
      <Stack
        sx={{ width: "95%", maxWidth: 1200 }}
        alignItems={"center"}
        gap={10}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: isMobile ? 30 : 51,
            fontFamily: '"Roboto", sans-serif',
            fontWeight: "bold",
          }}
        >
          Why GlobeFi?
        </Typography>
        <Stack
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={5}
          sx={{ width: "100%" }}
        >
          <Stack alignItems={"center"} sx={{ width: 350 }}>
            <img
              src="https://bit-frame.net/assets/img/why-we-1.png"
              alt="zellabit"
              style={{ width: 218, height: 189, objectFit: "contain" }}
            />
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: '"Roboto", sans-serif',
                margin: "38px 0 23px 0",
              }}
            >
              Trust
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: '"Roboto", sans-serif',
                opacity: 0.8,
              }}
            >
              Protect your information and assets with industry-leading security
              and financial stability.
            </Typography>
          </Stack>
          <Stack alignItems={"center"} sx={{ width: 350 }}>
            <img
              src="https://bit-frame.net/assets/img/why-we-2.png"
              alt="zellabit"
              style={{ width: 218, height: 189, objectFit: "contain" }}
            />
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: '"Roboto", sans-serif',
                margin: "38px 0 23px 0",
              }}
            >
              Security
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: '"Roboto", sans-serif',
                opacity: 0.8,
              }}
            >
              We keep your funds safe with wallet segregation and various
              security solutions.
            </Typography>
          </Stack>
          <Stack alignItems={"center"} sx={{ width: 350 }}>
            <img
              src="https://bit-frame.net/assets/img/why-we-3.png"
              alt="zellabit"
              style={{ width: 218, height: 189 }}
            />
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                fontFamily: '"Roboto", sans-serif',
                margin: "38px 0 23px 0",
              }}
            >
              Service
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 16,
                fontFamily: '"Roboto", sans-serif',
                opacity: 0.8,
              }}
            >
              Trade anytime, anywhere with an easy-to-use interface and
              world-class technology.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhyZellabit;
