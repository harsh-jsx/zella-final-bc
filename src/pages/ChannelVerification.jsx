import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useState } from "react";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";

const ChannelVerification = () => {
  const channelOptions = [
    {
      value: "website",
      label: "Website",
      icon: <LanguageIcon color="primary" />,
    },
    {
      value: "email",
      label: "Email",
      icon: <EmailIcon color="primary" />,
    },
  ];

  const [channelType, setChannelType] = useState(channelOptions[0].value);

  return (
    <div>
      <Navbar />
      <div className="v-main__wrap">
        <div className="channel-verification">
          <div className="container channel-verification__content">
            <p className="channel-verification__text">
              Make sure you are on the official website
            </p>
            <div className="channel-verification__site">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="channel-verification__site__icon"
              >
                {/* ...svg paths... */}
              </svg>
              <span>https://GLOBEFI.net</span>
            </div>
            <h1 className="channel-verification__title">
              Verification of GLOBEFI communication channels
            </h1>
            <p className="channel-verification__subtitle">
              To prevent fraud, we have created a page to verify GLOBEFI
              channels and business accounts. Below you can check all official
              communication channels: social media groups, websites, email
              addresses, and business accounts.
            </p>
            <form noValidate className="v-form channel-verification__form">
              <div className="channel-verification__form__inputs">
                <div className="v-input channel-verification__form__input v-input--is-label-active v-input--is-dirty v-input--is-focused v-input--dense theme--light v-text-field v-text-field--filled v-text-field--is-booted v-text-field--enclosed v-select primary--text selected">
                  <div className="v-input__prepend-outer">
                    <div className="v-input__icon v-input__icon--prepend">
                      <i
                        id="channel-type__icon"
                        aria-hidden="true"
                        className="v-icon notranslate mdi theme--light primary--text mdi-web"
                      ></i>
                    </div>
                  </div>

                  <FormControl
                    fullWidth
                    size="small"
                    sx={{ background: "white" }}
                  >
                    <InputLabel id="channel-type-label">
                      Channel Type
                    </InputLabel>
                    <Select
                      labelId="channel-type-label"
                      id="channel-type"
                      value={channelType}
                      onChange={(e) => setChannelType(e.target.value)}
                      startAdornment={
                        channelOptions.find((opt) => opt.value === channelType)
                          ?.icon
                      }
                      label="Channel Type"
                      sx={{
                        "& .MuiSelect-select": {
                          display: "flex",
                          alignItems: "center",
                        },
                        // Remove blue border on focus
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#e0e0e0",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#e0e0e0 !important",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "#e0e0e0 !important",
                          },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: "#e0e0e0 !important",
                          },
                        },
                      }}
                    >
                      {channelOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          <ListItemText primary={option.label} sx={{ ml: 1 }} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <div
                    id="channels-list"
                    className="v-menu__content theme--light input-autocomplete-menu input-select-menu"
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      zIndex: 8,
                      display: "none",
                    }}
                  >
                    {/* ...dropdown list... */}
                  </div>
                </div>
                <div className="v-input channel-verification__form__text-input theme--light v-text-field v-text-field--is-booted v-text-field--placeholder">
                  <div className="v-input__control">
                    <div className="v-input__slot">
                      <div className="v-text-field__slot">
                        <input
                          required
                          id="input-1090"
                          placeholder="https://GLOBEFI.net"
                          type="text"
                        />
                      </div>
                    </div>
                    <div
                      id="channel-error"
                      className="v-text-field__details"
                      style={{ display: "none" }}
                    >
                      <div className="v-messages theme--light error--text">
                        <div className="v-messages__wrapper">
                          <div className="v-messages__message message-transition-enter-to">
                            Required field
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                style={{ marginTop: 15 }}
                type="button"
                className="channel-verification__form__btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
              >
                <span className="v-btn__content">Verify</span>
              </button>
            </form>
          </div>
          <div className="v-dialog__container"></div>
        </div>
      </div>
      <Footer seamless={true} />
    </div>
  );
};

export default ChannelVerification;
