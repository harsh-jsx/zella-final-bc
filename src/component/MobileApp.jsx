import React from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  Stack,
  IconButton,
} from "@mui/material";
import gsap from "gsap";
import SettingsIcon from "@mui/icons-material/MoreVert";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState, useEffect } from "react";

const MobileApp = ({ setappModal }) => {
  useEffect(() => {
    gsap.to("#mappModal", {
      bottom: "0",
      duration: 1,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <Box sx={styles.modal} id="mappModal">
      <Box
        component="img"
        src="https://bit-frame.net/assets/img/untitled-app-modal.png"
        alt="Zellabit App Icon"
        sx={styles.image}
      />
      <Typography variant="h6" sx={styles.title}>
        MOBILE APP GlobeFi
      </Typography>
      <Typography sx={styles.subtitle}>Install our mobile app</Typography>

      <Stack direction="row" alignItems="center" spacing={1} sx={styles.step}>
        <SettingsIcon fontSize="small" />
        <Typography variant="body2">
          Select the "Settings" button from the browser menu
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1} sx={styles.step}>
        <LaunchIcon fontSize="small" />
        <Typography variant="body2">Select "Install Application"</Typography>
      </Stack>

      <Typography variant="caption" sx={styles.note}>
        Once you add the app, its icon will appear on your home screen and you
        will be able to use all GlobeFi tools faster and more conveniently from
        your device.
      </Typography>

      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          gsap.to("#mappModal", {
            bottom: "-100%",
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => setappModal(false),
          });
        }}
        sx={styles.button}
      >
        Thanks
      </Button>
    </Box>
  );
};

const styles = {
  modal: {
    zIndex: 1000000000,
    position: "fixed",
    bottom: "-100%",
    left: 0,
    width: "100%",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 3,
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 233,
    mb: 2,
    mx: "auto",
    display: "block",
  },
  title: {
    fontWeight: 600,
    mb: 1,
  },
  subtitle: {
    fontSize: 14,
    color: "text.secondary",
    mb: 2,
  },
  step: {
    mb: 1,
    textAlign: "left",
  },
  note: {
    display: "block",
    mt: 2,
    mb: 2,
    color: "text.secondary",
  },
  button: {
    bgcolor: "#fbbc04",
    color: "#000",
    fontWeight: "bold",
    "&:hover": {
      bgcolor: "#fbbf24",
    },
  },
};

export default MobileApp;
