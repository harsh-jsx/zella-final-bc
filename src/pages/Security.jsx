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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./list.json";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Sidebar from "../component/Sidebar";
import { resetPassword } from "../lib/authController";
import Footer from "../component/Footer";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import qr from "../assets/qr.png";

const Security = ({ setappModal }) => {
  const [email, setEmail] = useState("");
  const [user] = useAuthState(auth);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack>
      <Navbar />
      <Typography></Typography>
      <Stack
        direction={isMobile ? "column" : "row"}
        sx={{ overflow: "hidden" }}
      >
        <Sidebar />
        <Stack sx={{ p: "32px", mt: 2, width: isMobile ? "100%" : "87%" }}>
          <Typography
            sx={{ fontFamily: "Roboto", fontSize: 24, fontWeight: "bold" }}
            gutterBottom
          >
            <Typography>Security </Typography>
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} gap={5} sx={{ mt: 5 }}>
            <strong>Status: </strong>
            <span class="settings-security-status settings-security-status-disabled">
              Disabled
            </span>{" "}
          </Stack>
          <div class="settings-security-2fa-step">
            <span class="step-icon step1-icon"></span>
            <div class="google-auth-container-step-content">
              <div class="step-text">
                <Typography>
                  Download Google Authenticator Android / iOS
                </Typography>
              </div>
              <div class="step-desc">
                <div>
                  <Typography>
                    Google Authenticator can be downloaded from the App store or
                    Google Play.
                  </Typography>
                </div>
                <div>
                  <Typography>
                    search “Google Authenticator” and proceed to download.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div class="settings-security-2fa-step">
            <span class="step-icon step2-icon"></span>
            <div class="google-auth-container-step-content">
              <div class="step-text">
                <Typography>
                  Add key phrase into Google Authenticator and remember the key
                  phrase
                </Typography>
              </div>
              <div class="step-desc">
                <div>
                  <Typography>
                    Open Google Authenticator, scan the QR code below or
                    manually enter the key phrase to activate the verification
                    token
                  </Typography>
                </div>
                <div>
                  <Typography>
                    Key phrase is used to recover Google Authenticator in the
                    event of a loss or change of device — please make sure to
                    keep the key phrase safe before setting up Google
                    Authenticator.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div class="settings-account-item">
            <div class="settings-account-item-left">
              <div class="settings-account-item-info">
                <div class="authentication_component">
                  <input id="two_factor_status" type="hidden" value="false" />
                  <div class="authentication_component__secret">
                    <div
                      aria-label="QR Code"
                      role="img"
                      class="v-image v-responsive authentication_component__secret__qr theme--light"
                    >
                      <div class="v-responsive__sizer"></div>
                      <img
                        // class="v-image__image v-image__image--cover"
                        width={"250px"}
                        style={{ objectFit: "cover" }}
                        src={
                          "https://api.qrserver.com/v1/create-qr-code/?data=otpauth://totp/maddy798250@gmail.com%20(zellabit.com)?secret=3ZNSCKCWQFSFFMLBRMJP4LGTTGATGISL&size=150x150&ecc=M"
                        }
                      />
                      <div class="v-responsive__content"></div>
                    </div>
                    <div class="authentication_component__wrapper">
                      <div class="authentication_component__secret__cod-section">
                        <div class="secret-cod-copy-section">
                          <div class="secret-cod-copy-section__text-section">
                            <Typography class="secret-cod-copy-section__title">
                              Secret key
                            </Typography>
                            <Typography
                              id="copy_code"
                              class="authentication_component__secret__cod-section__secret"
                            >
                              3ZNSCKCWQFSFFMLBRMJP4LGTTGATGISL
                            </Typography>
                          </div>
                          <i
                            id="copy_code_btn"
                            aria-hidden="true"
                            class="v-icon notranslate secret-cod-copy-icon mdi mdi-vector-arrange-above theme--light"
                          ></i>
                        </div>
                      </div>
                      <div class="authentication_component__code-section">
                        <form
                          novalidate="novalidate"
                          class="v-form authentication_component__code-section__form"
                        >
                          <div class="custom-input-wrapper code-2fa-input">
                            <input
                              type="number"
                              id="code2fa"
                              class="custom-input"
                              placeholder=" "
                              required=""
                            />
                            <label for="code2fa" class="custom-input-label">
                              <Typography>6-digit code</Typography>
                            </label>
                          </div>
                          <button
                            type="button"
                            style={{ marginTop: "20px" }}
                            class="connect-2fa-btn main__default-btn main-menu__menu-controls_top-up v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                          >
                            <span class="v-btn__content">Connect</span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="settings-header">
            <Typography>Anti-phishing code</Typography>
          </div>
          <div class="settings-account-item">
            <div class="settings-account-item-left">
              <div class="settings-account-item-info">
                <div class="settings-account-item-info-title">
                  <Typography>Status:</Typography>
                  <span class="settings-security-status settings-security-status-disabled">
                    <Typography>Disabled</Typography>
                  </span>
                </div>
                <div class="settings-account-item-info-description">
                  <Typography>
                    All of our official emails will contain anti-phishing code
                    to prevent phishing attempts
                  </Typography>
                </div>
                <div class="settings-promocode-wrapper">
                  <div class="custom-input-wrapper">
                    <input
                      type="text"
                      id="antiphishing-code-input"
                      class="custom-input"
                      placeholder=" "
                      required=""
                    />
                    <label
                      for="antiphishing-code-input"
                      class="custom-input-label"
                    >
                      <Typography>Anti-phishing code (4-16)</Typography>
                    </label>
                  </div>
                  <button
                    id="antiphishing-enable"
                    type="button"
                    class="settings-promocode-btn main__default-btn main-menu__menu-controls_top-up v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                  >
                    <span class="v-btn__content">
                      <Typography>Enable</Typography>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
            Reset Password
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: "300px", mt: 2 }}
          />
          <Button
            variant="contained"
            type="submit"
            onClick={() => {
              if (!email) {
                alert("Please enter your email");
                return;
              }
              resetPassword(email);
            }}
            color="primary"
            sx={{ height: "100%", width: "200px", mt: 2 }}
          >
            Reset Password
          </Button>
        </Stack>
      </Stack>
      {/* Reset password 1 input to enter email 1 input to submit*/}

      <Footer seamless={true} />
    </Stack>
  );
};

export default Security;
