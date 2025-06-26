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

import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
import toast from "react-hot-toast";

const Referral = ({ setappModal }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [user] = useAuthState(auth);
  const [numID, setnumID] = useState("");

  useEffect(() => {
    const getUserNumId = async () => {
      const userDocRef = await getDoc(doc(db, "users", user?.uid));
      if (!userDocRef.exists()) return 0;
      console.log(userDocRef);
      setnumID(userDocRef.data().uniquenumid);
    };

    getUserNumId();
  }, [user]);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://globefi.com/signup?ref=${numID}`);
    toast.success("Refferal Code copied succesfull!");
  };

  return (
    <Stack>
      <Navbar />
      <Typography>
        <Stack
          direction={isMobile ? "column" : "row"}
          sx={{ overflow: "hidden", fontFamily: "sans-serif" }}
        >
          <Sidebar />
          <Stack sx={{ p: "32px", mt: 2, width: isMobile ? "100%" : "87%" }}>
            <Typography
              sx={{ fontFamily: "Roboto", fontSize: 24, fontWeight: "bold" }}
              gutterBottom
            >
              Referral Program
            </Typography>
            <div class="settings-account-item">
              <div class="settings-account-item-left">
                <div class="settings-account-item-info">
                  <div class="settings-security-2fa-step">
                    <span class="step-icon step1-icon"></span>
                    <Typography>
                      <div class="google-auth-container-step-content">
                        <div class="step-text">
                          {" "}
                          <Typography>Share Your Code and Link </Typography>
                        </div>
                        <div class="step-desc">
                          <div>
                            <Typography>
                              You can invite your friends to use all GlobeFi
                              products with just one referral code.
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </div>
                  <div class="settings-security-2fa-step">
                    <span class="step-icon step2-icon"></span>
                    <div class="google-auth-container-step-content">
                      <div class="step-text">
                        {" "}
                        <Typography>Connect with Your Friends </Typography>
                      </div>
                      <div class="step-desc">
                        <div>
                          <Typography>
                            Your friends will be associated with you after they
                            sign up.
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="settings-security-2fa-step">
                    <span class="step-icon step3-icon"></span>
                    <div class="google-auth-container-step-content">
                      <div class="step-text">Get Multiple Rewards</div>
                      <div class="step-desc">
                        <div>
                          {" "}
                          <Typography>
                            Automatically get Trading Commissions, GlobeFi Card
                            Rewards when your friends trade and apply for a
                            GlobeFi Card
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="settings-account-item">
              <div class="settings-account-item-left">
                <div class="settings-account-item-info">
                  <div class="authentication_component">
                    <div class="authentication_component__secret">
                      <div class="authentication_component__wrapper">
                        <div class="authentication_component__secret__cod-section">
                          <div class="secret-cod-copy-section">
                            <div class="secret-cod-copy-section__text-section">
                              <p class="secret-cod-copy-section__title">
                                <Typography>My Referral Link</Typography>
                              </p>
                              <p class="authentication_component__secret__cod-section__secret">
                                https://globefi.com/signup?ref={numID}
                              </p>
                            </div>
                            <IconButton onClick={handleCopy}>
                              <ContentCopyIcon />
                            </IconButton>
                          </div>
                        </div>
                        <div class="authentication_component__secret__cod-section">
                          <div class="secret-cod-copy-section">
                            <div class="secret-cod-copy-section__text-section">
                              <p class="secret-cod-copy-section__title">
                                My Referral Code
                              </p>
                              <p class="authentication_component__secret__cod-section__secret">
                                {numID}
                              </p>
                            </div>
                            <IconButton onClick={handleCopy}>
                              <ContentCopyIcon />
                            </IconButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="settings-header">
              {" "}
              <Typography>Referral History </Typography>
            </div>
            <div class="custom-table-wrapper">
              <table>
                <thead>
                  <tr>
                    <Typography>
                      <th>
                        {" "}
                        <Typography>User</Typography>
                      </th>
                      <th>
                        <Typography> Registration Time</Typography>
                      </th>
                      <th>
                        <Typography> Deposit Amount </Typography>{" "}
                      </th>
                      <th>
                        <Typography> Trading Volume </Typography>
                      </th>
                      <th>
                        <Typography> Reward</Typography>
                      </th>
                    </Typography>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="5">
                      <div>
                        <div>
                          <img
                            src="https://bit-frame.net/../assets/img/empty-list.svg"
                            alt="empty"
                          />
                          <div>
                            <Typography>No Records</Typography>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Stack>
        </Stack>
      </Typography>
      <Footer seamless={true} />
    </Stack>
  );
};

export default Referral;
