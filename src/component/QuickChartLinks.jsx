import { Stack } from "@mui/material";
import React from "react";
import SmallAssetCard from "./SmallAssetCard";

const images = [
  "https://bit-frame.net/assets/img/coins/BTC.png",
  "https://bit-frame.net/assets/img/coins/ETH.png",
  "https://bit-frame.net/assets/img/coins/BNB.png",
  "https://bit-frame.net/assets/img/coins/SOL.png",
];

const QuickChartLinks = () => {
  return (
    <Stack
      direction="row"
      gap={2}
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      marginY="30px"
    >
      <SmallAssetCard symbol="BTCUSDT" image={images[0]} label="BTC" />
      <SmallAssetCard symbol="ETHUSDT" image={images[1]} label="ETH" />
      <SmallAssetCard symbol="BNBUSDT" image={images[2]} label="BNB" />
      <SmallAssetCard symbol="SOLUSDT" image={images[3]} label="SOL" />
    </Stack>
  );
};

export default QuickChartLinks;
