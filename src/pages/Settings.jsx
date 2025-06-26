import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import AccountSettings from "../component/AccountSettings";

const Settings = ({ setappModal }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack>
      <Navbar />
      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{ overflow: "hidden" }}
      >
        <Sidebar />
        <AccountSettings />
      </Stack>
      <Footer seamless={true} />
    </Stack>
  );
};

export default Settings;
