import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Box, Stack } from "@mui/material";

const Screener = () => {
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
            src="https://www.tradingview-widget.com/embed-widget/screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A900%2C%22defaultColumn%22%3A%22overview%22%2C%22defaultScreen%22%3A%22general%22%2C%22market%22%3A%22crypto%22%2C%22showToolbar%22%3Atrue%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22zellabit.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptoscreener%22%2C%22page-uri%22%3A%22zellabit.com%2Ftools%2Fmarket-screener%22%7D"
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

export default Screener;
