import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const SignUpCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ mt: isMobile ? "100px" : "200px" }}
    >
      <Stack
        sx={{
          maxWidth: 1200,
          width: "90%",
          background: "#141619",
          px: 5,
          borderRadius: 4,
          height: isMobile ? "auto" : 149,
          py: 5,
        }}
        justifyContent={isMobile ? "center" : "space-between"}
        alignItems={"center"}
        direction={"row"}
        flexWrap={"wrap"}
        gap={5}
      >
        <Stack
          justifyContent={"space-evenly"}
          alignItems={isMobile ? "center" : "flex-start"}
          sx={{ height: "100%" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? 24 : 34,
              fontWeight: 800,
              fontFamily: `"Roboto", sans-serif`,
              textAlign: "center",
            }}
          >
            Want to start trading right now?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              fontSize: 16,
              fontWeight: 400,
              fontFamily: `"Roboto", sans-serif`,
              opacity: 0.8,
              textAlign: "center",
            }}
          >
            Login or register your account and get started!
          </Typography>
        </Stack>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ height: "100%" }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#F7A600",
              color: "#000",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              width: 200,
              textTransform: "none",
              "&:hover": { backgroundColor: "#e6a000" },
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignUpCard;
