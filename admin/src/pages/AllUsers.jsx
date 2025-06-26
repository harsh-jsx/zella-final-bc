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

const AllUsers = () => {
  let navigate = useNavigate();
  const [users, setusers] = useState([]);

  useEffect(() => {
    const queryMessages = query(collection(db, "users"));
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setusers(messages);
    });

    return () => unsuscribe();
  }, []);
  const columns = [
    {
      field: "role",
      headerName: "Account Type",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "email",
      headerName: "Trader Email",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "id",
      headerName: "Trader ID",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "balance",
      headerName: "User Balance",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "status",
      headerName: "KYC status",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "isTrading",
      headerName: "Live",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "createdAt",
      headerName: "Trade Open at",
      align: "center",
      headerAlign: "center",
      type: "Date",
      valueGetter: (value, row) => {
        let ReportDate = new Date(
          value?.seconds * 1000 + value?.nanoseconds / 1000000
        );
        return ReportDate;
      },
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "action",
      headerName: "Direction",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
      renderCell: (value, row) => (
        <Button
          variant="contained"
          onClick={() => navigate(`/user/${value.row.id}`)}
        >
          Edit User
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <DataGrid rows={users} columns={columns} />
    </Box>
  );
};

export default AllUsers;
