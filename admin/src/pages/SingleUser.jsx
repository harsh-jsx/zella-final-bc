import {
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  Select,
  Menu,
  MenuItem,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import React, { useEffect, useState } from "react";
import {
  collection,
  getDoc,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();

  const [email, setemail] = useState("");
  const [balance, setbalance] = useState(0);
  const [status, setstatus] = useState("");

  const getUserInfo = async (id) => {
    const data = await getDoc(doc(db, "users", id));
    const dataSnap = data.data();

    return dataSnap;
  };

  useEffect(() => {
    const setDefaultData = async () => {
      let tmkc = await getUserInfo(id);
      setemail(tmkc.email);
      setbalance(tmkc.balance);
      setstatus(tmkc.status);
    };

    setDefaultData();
  }, []);

  const handleSubmit = async () => {
    try {
      await updateDoc(
        doc(db, "users", id),
        {
          email: email,
          balance: balance,
          status: status,
        },
        { merge: true }
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Stack sx={{ width: "100%", height: "100%" }} direction={"column"} gap={3}>
      <TextField
        placeholder={"user@example.com"}
        label="email"
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <TextField
        placeholder={"1,000"}
        label="Balance"
        type="number"
        value={balance}
        onChange={(e) => setbalance(e.target.value)}
      />
      <Select
        required
        value={status}
        onChange={(e) => setstatus(e.target.value)}
        sx={{ width: 200 }}
      >
        <MenuItem value="unverified">
          <Typography>Unverified</Typography>
        </MenuItem>
        <MenuItem value="verified">
          <Typography>Verified</Typography>
        </MenuItem>
      </Select>
      <Button variant="contained" onClick={handleSubmit}>
        {" "}
        Submit
      </Button>
    </Stack>
  );
};

export default SingleUser;
