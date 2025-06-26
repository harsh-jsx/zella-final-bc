import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Stack,
  Link,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./list.json";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signInWithEmail } from "../lib/authController";
import Footer from "../component/Footer";

const LoginPage = ({ setappModal }) => {
  const [user, authStateLoading] = useAuthState(auth);
  const [showPassword, setShowPassword] = React.useState(false);
  const [captchaImg, setcaptchaImg] = React.useState("");
  const [passwordError, setpasswordError] = useState(null);
  const [emailError, setemailError] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [captchaValuee, setcaptchaValuee] = React.useState("");
  const [formData, setformData] = React.useState({
    email: "",
    password: "",
    captchaValueByUser: "",
  });
  const [inputFocused, setinputFocused] = useState({
    email: false,
    password: false,
    captcha: false,
  });

  const handleTogglePassword = () => {
    setShowPassword((show) => !show);
  };

  useEffect(() => {
    if (user) {
      navigate("/profile/wallet");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    seterror(null);
    setLoading(true);
    setemailError(null);
    setpasswordError(null);

    try {
      const email = formData.email;
      const password = formData.password;
      const captchaValueByUser = formData.captchaValueByUser;

      if (!email || !password) {
        setemailError("Email is required");
        setpasswordError("Password is required");
        return;
      }
      if (parseInt(captchaValuee) !== parseInt(formData.captchaValueByUser)) {
        console.log(captchaValuee, formData.captchaValueByUser);

        seterror("Captcha is incorrect");
        return;
      }

      await signInWithEmail(e, email, password);

      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        selectRandomCaptcha();
        setpasswordError("User not found");
      }
      if (error.code === "auth/invalid-email") {
        selectRandomCaptcha();
        setpasswordError("Invalid email");
      }
      if (error.code === "auth/too-many-requests") {
        setpasswordError("Too many requests");
        selectRandomCaptcha();
      }
      if (error.code === "auth/user-disabled") {
        setpasswordError("User disabled");
        selectRandomCaptcha();
      }
      if (error.code === "auth/operation-not-allowed") {
        setpasswordError("Operation not allowed");
        selectRandomCaptcha();
      }
      if (error.code === "auth/invalid-credential") {
        setpasswordError("Invalid credential");
        selectRandomCaptcha();
      }
    }
    setLoading(false);
  };

  const selectRandomCaptcha = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomCaptcha = data[randomIndex];

    setcaptchaImg(randomCaptcha.imageUrl);
    setcaptchaValuee(randomCaptcha.captchaValue);
  };

  React.useEffect(() => {
    selectRandomCaptcha();
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#08080C",
          minHeight: "95vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: 0,
            height: 0,
            position: "absolute",
            top: 0,
            left: 0,
            background: "transparent",
            boxShadow: "0px 0px 10000px 250px rgba(255, 0, 0, 0.2)",
            zIndex: 10,
          }}
        ></Box>
        <Box
          sx={{
            width: 0,
            height: 0,
            position: "absolute",
            right: 0,
            bottom: 0,
            background: "transparent",
            boxShadow: "0px 0px 10000px 250px rgba(0, 0, 255, 0.2)",
            zIndex: 10,
          }}
        ></Box>
        <Container
          maxWidth="xs"
          sx={{ marginTop: 6 }}
          component={"form"}
          onSubmit={handleSubmit}
        >
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="body2"
              color="gray"
              mb={1}
              sx={{
                fontSize: 12,
                fontFamily: '"inter", sans-serif',
                color: "#fff",
                opacity: 0.7,
              }}
            >
              Make sure you are using the official site
            </Typography>
            <Box
              sx={{
                background:
                  "linear-gradient(90deg, #1c1c20 70.24%, rgba(28, 28, 32, 0) 83.83%)",
                p: 1.2,
                width: 200,
                borderRadius: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "white", fontSize: 14, display: "flex" }}
              >
                <svg
                  class="login-make-sure__url__icon"
                  fill="none"
                  viewBox="0 0 8 11"
                  height="11"
                  width="8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 4h-.5V3a2.5 2.5 0 00-5 0v1H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM2.5 4V3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1h-3z"
                    fill="#5F6368"
                  ></path>
                </svg>{" "}
                <Typography
                  sx={{
                    fontSize: 10,
                    fontFamily: '"inter", sans-serif',
                    color: "#fff",
                    ml: 1,
                  }}
                >
                  https://globefi.com
                </Typography>
              </Typography>
            </Box>
            <Typography
              variant="h4"
              fontWeight={700}
              color="white"
              gutterBottom
              sx={{
                fontFamily: "inter-bold",
                fontSize: 32,
              }}
            >
              Log In
            </Typography>
            <Typography
              variant="body2"
              color="gray"
              mb={2}
              sx={{ fontSize: 16 }}
            >
              Don't have an account yet?{" "}
              <Link href="/register" color="primary" underline="hover">
                Create an account
              </Link>
            </Typography>
            <Box
              sx={{
                width: "100%",
                background: "transparent",
                border: `1px solid ${
                  inputFocused.email ? "#F5A623" : "rgba(255,255,255, 0.2)"
                }`,
                transition: "all ease 0.3s",
                borderRadius: 3,
              }}
            >
              <TextField
                size="small"
                fullWidth
                type="email"
                error={emailError}
                helperText={emailError}
                required
                label="E-Mail"
                variant="outlined"
                onChange={(e) => {
                  setformData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
                margin="normal"
                InputLabelProps={{ sx: { color: "gray" } }}
                sx={{
                  color: "gray",
                  fontSize: 22,
                  backgroundColor: "transparent",
                  height: "100%",
                  label: { marginTop: "-5px" },
                  "& .Mui-focused": {
                    marginTop: "0px",
                    color: "gray !important",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255, 0)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255, 0)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(255,255,255, 0)",
                    },
                  },
                }}
                inputRef={(input) => {
                  if (input) {
                    input.onfocus = () =>
                      setinputFocused((prev) => ({ ...prev, email: true }));
                    input.onblur = () =>
                      setinputFocused((prev) => ({ ...prev, email: false }));
                  }
                }}
              />
            </Box>
            <Box
              sx={{
                border: `1px solid ${
                  inputFocused.password ? "#F5A623" : "rgba(255,255,255, 0.2)"
                }`,
                transition: "all ease 0.3s",
                borderRadius: 3,
                width: "100%",
                background: "transparent",
                mt: 2,
              }}
            >
              <TextField
                size="small"
                fullWidth
                error={passwordError}
                helperText={passwordError}
                required
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                margin="normal"
                onChange={(e) => {
                  setformData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        <Visibility sx={{ color: "gray" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ sx: { color: "gray" } }}
                sx={{
                  color: "gray",
                  fontSize: 22,
                  backgroundColor: "transparent",
                  height: "100%",
                  label: { marginTop: "-5px" },
                  "& .Mui-focused": {
                    marginTop: "0px",
                    color: "gray !important",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255, 0)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255, 0)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(255,255,255, 0)",
                    },
                  },
                }}
                inputRef={(input) => {
                  if (input) {
                    input.onfocus = () =>
                      setinputFocused((prev) => ({ ...prev, password: true }));
                    input.onblur = () =>
                      setinputFocused((prev) => ({ ...prev, password: false }));
                  }
                }}
              />
            </Box>

            <Box
              sx={{
                border: `1px solid ${
                  inputFocused.captcha ? "#F5A623" : "rgba(255,255,255, 0.2)"
                }`,
                transition: "all ease 0.3s",
                borderRadius: 3,
                width: "100%",
                background: "transparent",
                mt: 2,
              }}
            >
              <TextField
                size="small"
                fullWidth
                error={error}
                helperText={error}
                required
                type="number"
                label="Captcha"
                variant="outlined"
                margin="normal"
                onChange={(e) => {
                  setformData({
                    ...formData,
                    captchaValueByUser: e.target.value,
                  });
                }}
                InputProps={{
                  sx: { backgroundColor: "transparent", color: "white" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src={captchaImg}
                        alt=""
                        height={"50px"}
                        width={"100px"}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ sx: { color: "gray" } }}
                sx={{
                  color: "gray",
                  fontSize: 22,
                  backgroundColor: "transparent",
                  height: "100%",
                  label: { marginTop: "-5px" },
                  "& .Mui-focused": {
                    marginTop: "0px",
                    color: "gray !important",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255, 0)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255, 0)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgba(255,255,255, 0)",
                    },
                  },
                }}
                inputRef={(input) => {
                  if (input) {
                    input.onfocus = () =>
                      setinputFocused((prev) => ({ ...prev, captcha: true }));
                    input.onblur = () =>
                      setinputFocused((prev) => ({ ...prev, captcha: false }));
                  }
                }}
              />
            </Box>

            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{
                mt: 3,
                mb: 1,
                backgroundColor: "#f5a623",
                color: "black",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#f59f00",
                },
              }}
              type="submit"
            >
              Continue
            </Button>
            <Link
              href="/forgot-password"
              underline="hover"
              color="primary"
              variant="body2"
              textAlign="center"
              sx={{ width: "100%", mt: 2, textDecoration: "underline" }}
            >
              Forgot your password?
            </Link>

            <Paper
              elevation={0}
              sx={{
                mt: 4,
                backgroundColor: "#1a1a1a",
                p: 2,
                color: "gray",
                fontSize: 12,
                borderRadius: 2,
                fontFamily: "inter",
              }}
            >
              Use of the website GlobeFi is prohibited for citizens and/or
              residents of the following countries (territories): Russia
            </Paper>
          </Stack>
        </Container>
      </Box>
      <Footer seamless="true" />
    </>
  );
};

export default LoginPage;
