import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Box, Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Withdrawl = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const queryMessages = query(collection(db, "withdrawals"));
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setusers(messages);
    });

    return () => unsuscribe();
  }, [users]);

  const columns = [
    {
      field: "userId",
      headerName: "Trader ID",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "withdrawType",
      headerName: "Withdrawal Type",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "crypto",
      headerName: "Crypto",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
      valueGetter: (value) => {
        if (value) {
          return value;
        } else {
          return "None";
        }
      },
    },
    {
      field: "ifscCode",
      headerName: "IFSC Code",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
      valueGetter: (value) => {
        if (value) {
          return value;
        } else {
          return "None";
        }
      },
    },
    {
      field: "chain",
      headerName: "Chain",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
      valueGetter: (value) => {
        if (value) {
          return value;
        } else {
          return "None";
        }
      },
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
      field: "status",
      headerName: "KYC status",
      align: "center",
      headerAlign: "center",
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
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
          spacing={2}
        >
          <Button
            variant="contained"
            disabled={
              value.row.status === "approved" ||
              value.row.status === "rejected" ||
              value.row.status === "approved"
            }
            onClick={async () => {
              const userDocRef = doc(db, "deposits", value.row.id);
              await setDoc(userDocRef, { status: "approved" }, { merge: true });
            }}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            sx={{ background: "red" }}
            disabled={
              value.row.status === "approved" ||
              value.row.status === "rejected" ||
              value.row.status === "approved"
            }
            onClick={async () => {
              const userDocRef = doc(db, "withdrawals", value.row.id);
              await setDoc(userDocRef, { status: "sucess" }, { merge: true });
            }}
          >
            Reject
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <DataGrid rows={users} columns={columns} />
    </Box>
  );
};

export default Withdrawl;
