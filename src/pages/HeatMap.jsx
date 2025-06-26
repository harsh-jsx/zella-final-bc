import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Box, Stack } from "@mui/material";

const HeatMap = () => {
  return (
    <>
      <Navbar />
      <Stack id="box" sx={{ width: "100%", height: "90vh" }}>
        <Box
          className="tradingview-widget-container"
          sx={{ width: "100%", height: "100%" }}
        >
          <iframe
            allowtransparency="true"
            frameBorder="0"
            src="https://www.tradingview-widget.com/embed-widget/forex-heat-map/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A900%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22SEK%22%2C%22NOK%22%2C%22DKK%22%2C%22HKD%22%5D%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22zellabit.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-heat-map%22%2C%22page-uri%22%3A%22zellabit.com%2Ftools%2Fheat-map%22%7D"
            title="crypto mkt-screener TradingView widget"
            lang="en"
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
        </Box>
      </Stack>
      <Footer />
    </>
  );
};

export default HeatMap;
