import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { UploadFile } from "@mui/icons-material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const steps = ["User information", "Identity card", "Selfie"];

export default function UserInfo() {
  const [gender, setGender] = React.useState("");
  const [step, setStep] = React.useState(1);

  // For document step
  const [country, setCountry] = React.useState("Algeria");
  const [docType, setDocType] = React.useState("");
  const [frontFile, setFrontFile] = React.useState(null);
  const [backFile, setBackFile] = React.useState(null);
  const selfieFile = true;
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = () => {
    let next = +step;
    let n = +next;

    setStep(2);
  };

  const handleDocTypeChange = (event) => {
    setDocType(event.target.value);
  };

  const handleFrontFileChange = (e) => {
    setFrontFile(e.target.files[0]);
  };

  const handleBackFileChange = (e) => {
    setBackFile(e.target.files[0]);
  };

  // UI for Step 1: User Information
  const renderUserInfo = () => (
    <>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        User information
      </Typography>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Name*"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Last Name *"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Father's name"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Date of birth (yyyy-mm-dd) *"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth size="small">
            <InputLabel>Gender</InputLabel>
            <Select
              required
              sx={{ width: "203px" }}
              value={gender}
              label="Gender"
              onChange={handleGenderChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="City *"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Street *"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="House number *"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Apartment number"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Postal code *"
            variant="outlined"
            size="small"
          />
        </Grid>
      </Grid>
      <Box mt={4}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          required
          sx={{
            backgroundColor: "#f5a400",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "6px",
            height: "44px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#d88f00",
            },
          }}
        >
          Next step
        </Button>
      </Box>
    </>
  );

  // UI for Step 2: Identity Card Upload
  const renderDocumentStep = () => (
    <>
      <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
        Identity card
      </Typography>

      <Typography fontWeight="bold" sx={{ mb: 1 }}>
        Select country of issue
      </Typography>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <InputLabel>Country</InputLabel>
        <Select value={country} label="Country">
          <MenuItem value="Algeria">Algeria</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Germany">Germany</MenuItem>
        </Select>
      </FormControl>

      <Typography fontWeight="bold" sx={{ mb: 1 }}>
        Select document type
      </Typography>
      <Box display="flex" gap={2}>
        <FormControlLabel control={<Checkbox />} label="Passport" />
        <FormControlLabel control={<Checkbox />} label="ID card" />
        <FormControlLabel control={<Checkbox />} label="Driver's license" />
      </Box>

      <Typography sx={{ mt: 2 }}>
        Upload a photo of the document unfolded. The photo must be:
      </Typography>
      <ul style={{ marginTop: 4, marginBottom: 16 }}>
        <li>Light and clear (good quality)</li>
        <li>Uncropped (all corners of the document are visible)</li>
      </ul>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={4}>
          <img
            src="https://bit-frame.net/../assets/img/cardSuccess.png"
            style={{ width: 60, height: 40 }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src="https://bit-frame.net/../assets/img/cardReject.png"
            style={{ width: 60, height: 40 }}
          />
        </Grid>
        <Grid item xs={4}>
          <img
            src="https://bit-frame.net/../assets/img/cardNoVerified.png"
            style={{ width: 60, height: 40 }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "2px solid #f5a400",
              borderRadius: 2,
              height: 120,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff7e6",
              cursor: "pointer",
            }}
            component="label"
          >
            <UploadFile sx={{ fontSize: 32, color: "#f5a400" }} />
            <Typography
              variant="body2"
              sx={{ color: "#f5a400", fontWeight: "bold", mt: 1 }}
            >
              Upload the facing side of the document *
            </Typography>
            <input hidden type="file" accept="image/*" />
            {frontFile && (
              <Typography
                variant="caption"
                sx={{ color: "#333", mt: 1, wordBreak: "break-all" }}
              >
                {frontFile.name}
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "2px solid #f5a400",
              borderRadius: 2,
              height: 120,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff7e6",
              cursor: "pointer",
            }}
            component="label"
          >
            <UploadFile sx={{ fontSize: 32, color: "#f5a400" }} />
            <Typography
              variant="body2"
              sx={{ color: "#f5a400", fontWeight: "bold", mt: 1 }}
            >
              Upload the back side of the document *
            </Typography>
            <input hidden type="file" accept="image/*" />
            {backFile && (
              <Typography
                variant="caption"
                sx={{ color: "#333", mt: 1, wordBreak: "break-all" }}
              ></Typography>
            )}
          </Box>
        </Grid>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          required
          sx={{
            backgroundColor: "#f5a400",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "6px",
            height: "44px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#d88f00",
            },
          }}
        >
          Next step
        </Button>
      </Grid>
    </>
  );

  const renderSelfieStep = () => {
    return (
      <>
        <Typography variant="h5" fontWeight="bold" align="left" gutterBottom>
          Selfie
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Upload a photo that clearly shows your face without any foreign
          objects. It is forbidden to use photo processing services.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              backgroundColor: "#ccc",
              border: "2px solid #888",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
            }}
            component="label"
          >
            {selfieFile ? (
              <img
                src=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <CloudUploadIcon sx={{ fontSize: 48, color: "#888" }} />
            )}
            <input hidden type="file" accept="image/*" />
          </Box>
        </Box>
        {selfieFile && (
          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "center",
              mb: 2,
              wordBreak: "break-all",
            }}
          ></Typography>
        )}
        <Button
          variant="contained"
          onClick={() => (window.location.href = "/")}
          fullWidth
          sx={{
            backgroundColor: "#f5a400",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "6px",
            height: "44px",
            textTransform: "none",
            mb: 2,
            "&:hover": {
              backgroundColor: "#d88f00",
            },
          }}
        >
          Verify account
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: "8px",
            height: "44px",
            textTransform: "none",
          }}
        >
          Back
        </Button>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#f9f9fb",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Card sx={{ maxWidth: 600, width: "100%", borderRadius: 3, p: 4 }}>
          <CardContent>
            <Stepper activeStep={step} alternativeLabel sx={{ mb: 4 }}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel
                    icon={
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          backgroundColor:
                            index <= step ? "#55c168" : "#dcdcec",
                          borderRadius: "50%",
                          border: "4px solid white",
                          boxShadow: "0 0 0 2px #dcdcec",
                        }}
                      />
                    }
                  />
                </Step>
              ))}
            </Stepper>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", mb: 3 }}
            >
              {steps.map((label, index) => (
                <Typography
                  key={label}
                  variant="subtitle2"
                  fontWeight={index === step ? "bold" : "normal"}
                  color={index === step ? "textPrimary" : "textSecondary"}
                >
                  {label}
                </Typography>
              ))}
            </Box>
            {step === 0 && renderUserInfo()}
            {step === 1 && renderDocumentStep()}
            {step === 2 && renderSelfieStep()}
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </>
  );
}
