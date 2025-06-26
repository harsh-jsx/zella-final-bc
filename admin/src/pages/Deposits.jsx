import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Box, Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Deposits = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const queryMessages = query(collection(db, "deposits"));
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
      field: "transactionID",
      headerName: "Transaction ID",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "userId",
      headerName: "Trader ID",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    // {
    //   field: "depositType",
    //   headerName: "Deposit Type",
    //   align: "center",
    //   headerAlign: "center",
    //   width: window.innerWidth < 600 ? 180 : "auto",
    //   flex: window.innerWidth < 600 ? 0 : 1,
    // },
    {
      field: "amount",
      headerName: "Amount",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },

    {
      field: "chain",
      headerName: "Chain",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
      valueGetter: (value) => {
        if (value == "") {
          return "None";
        } else {
          return value;
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
              const userDocRef1 = doc(db, "users", value.row.userId);
              const userSnap = (await getDoc(userDocRef1)).data();

              const array = {
                amount:
                  userSnap.balance[value.row.symbol].amount +
                  parseFloat(value.row.amount),
                currency: userSnap.balance[value.row.symbol].currency,
              };

              updateDoc(doc(db, "users", value.row.userId), {
                [`balance.${value.row.symbol}`]: array,
              });
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
              const userDocRef = doc(db, "deposits", value.row.id);
              await setDoc(userDocRef, { status: "rejected" }, { merge: true });
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

export default Deposits;
