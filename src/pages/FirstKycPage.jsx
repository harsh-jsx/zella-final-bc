import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import {
  Box,
  Stack,
  Typography,
  Card,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CardContent,
  IconButton,
  Avatar,
  Checkbox,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import UserInfo from "../component/UserInfo";

const FirstKycPage = () => {
  const [country, setCountry] = useState(null);
  const [Start, setStart] = useState(false);
  const [NextStep, setNextStep] = useState(false);
  const [Chcked, setChcked] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const countries = [
    { code: "US", name: "United States", flag: "https://flagcdn.com/us.svg" },
    { code: "CA", name: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { code: "GB", name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { code: "AU", name: "Australia", flag: "https://flagcdn.com/au.svg" },
    { code: "DE", name: "Germany", flag: "https://flagcdn.com/de.svg" },
    { code: "FR", name: "France", flag: "https://flagcdn.com/fr.svg" },
    { code: "IT", name: "Italy", flag: "https://flagcdn.com/it.svg" },
    { code: "ES", name: "Spain", flag: "https://flagcdn.com/es.svg" },
    { code: "JP", name: "Japan", flag: "https://flagcdn.com/jp.svg" },
    { code: "CN", name: "China", flag: "https://flagcdn.com/cn.svg" },
    { code: "IN", name: "India", flag: "https://flagcdn.com/in.svg" },
    { code: "BR", name: "Brazil", flag: "https://flagcdn.com/br.svg" },
    { code: "RU", name: "Russia", flag: "https://flagcdn.com/ru.svg" },
    { code: "MX", name: "Mexico", flag: "https://flagcdn.com/mx.svg" },
    { code: "KR", name: "South Korea", flag: "https://flagcdn.com/kr.svg" },
    { code: "ZA", name: "South Africa", flag: "https://flagcdn.com/za.svg" },
    { code: "TR", name: "Turkey", flag: "https://flagcdn.com/tr.svg" },
    { code: "SA", name: "Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
    { code: "AR", name: "Argentina", flag: "https://flagcdn.com/ar.svg" },
    { code: "SE", name: "Sweden", flag: "https://flagcdn.com/se.svg" },
    // ...add more as needed
  ];

  const handleSubmit = () => {
    if (!country) {
      toast.error("Please select a country.");
      return;
    }
    setStart(true);
  };
  if (NextStep) {
    return <UserInfo />;
  }
  if (Start) {
    return (
      <>
        <Navbar />
        <Box
          sx={{
            backgroundColor: "#f9f9fb",
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          <Card
            sx={{
              width: { xs: "100%", sm: 400, md: 700 },
              maxWidth: "100%",
              height: { xs: "auto", sm: 380 },
              borderRadius: 3,
              px: { xs: 2, sm: 4 },
              py: { xs: 2, sm: 4 },
              boxShadow: 3,
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "24px" },
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Start verification
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "13px", sm: "14px" },
                  color: "#555",
                  mb: 3,
                }}
              >
                You will need a valid ID to be verified. <br /> Your documents
                will be encrypted and will not be shared with third parties.
              </Typography>
              <Typography
                sx={{ fontFamily: "inter-bold", fontSize: { xs: 18, sm: 24 } }}
              >
                Please follow the instructions after accepting our terms and
                conditions.
              </Typography>
              <Typography sx={{ mt: 2, fontSize: { xs: 13, sm: 16 } }}>
                <Checkbox
                  checked={Chcked}
                  onChange={() => setChcked(!Chcked)}
                />{" "}
                I agree to the processing of personal data according to{" "}
                <a style={{ fontFamily: "inter" }} href="">
                  Privacy Policy
                </a>
              </Typography>
              {Chcked && (
                <Button
                  variant="contained"
                  onClick={() => {
                    setNextStep(true);
                  }}
                  fullWidth
                  sx={{
                    backgroundColor: "#f5a400",
                    color: "#000",
                    borderRadius: "6px",
                    mt: 2,
                    height: "40px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#d88f00",
                    },
                  }}
                >
                  Continue
                </Button>
              )}
            </CardContent>
          </Card>
        </Box>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#f9f9fb",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Card
          sx={{
            width: { xs: "100%", sm: 400, md: 700 },
            maxWidth: "100%",
            height: { xs: "auto", sm: 380 },
            borderRadius: 3,
            px: { xs: 2, sm: 4 },
            py: { xs: 2, sm: 4 },
            boxShadow: 3,
          }}
        >
          <CardContent sx={{ textAlign: "left" }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                backgroundColor: "#f3f3f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="verification__container__icon"
              >
                <circle
                  xmlns="http://www.w3.org/2000/svg"
                  cx="12"
                  cy="8.625"
                  r="1.875"
                  stroke="#9E9EB4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></circle>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M8.25 17.25C8.25 15.9167 9 12.75 12 12.75C15 12.75 15.75 15.9167 15.75 17.25"
                  stroke="#9E9EB4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M4 16V19C4 19.5523 4.44772 20 5 20H8M4 8V5C4 4.44772 4.44772 4 5 4H8M16 20H19C19.5523 20 20 19.5523 20 19V16M20 8V5C20 4.44772 19.5523 4 19 4H16"
                  stroke="#9E9EB4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "24px" },
                fontWeight: 600,
                mb: 1,
              }}
            >
              Account verification (Lv. 1)
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "14px" },
                color: "#555",
                mb: 3,
              }}
            >
              Complete the first level of verification so we can confirm your
              identity.
            </Typography>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="country-label">Country *</InputLabel>
              <Select
                required
                labelId="country-label"
                value={country}
                label="Country *"
                onChange={handleCountryChange}
                renderValue={(selected) => {
                  const selectedCountry = countries.find(
                    (c) => c.code === selected
                  );
                  return selectedCountry ? `${selectedCountry.name}` : "";
                }}
              >
                {countries.map((c) => (
                  <MenuItem key={c.code} value={c.code}>
                    <Avatar src={c.flag} />
                    <span style={{ marginRight: 8 }}></span>
                    {c.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant="contained"
              onClick={handleSubmit}
              fullWidth
              sx={{
                backgroundColor: "#f5a400",
                color: "#000",
                borderRadius: "6px",
                height: "40px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#d88f00",
                },
              }}
            >
              Continue
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </>
  );
};

export default FirstKycPage;
