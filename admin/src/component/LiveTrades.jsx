import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const LiveTrades = ({ trades }) => {
  let navigate = useNavigate();

  const columns = [
    {
      field: "id",
      headerName: "Trade ID",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "traderId",
      headerName: "Trader ID",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "assetId",
      headerName: "Transaction Pairs",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "buyPrice",
      headerName: "Buy Price",
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
      field: "lotsValue",
      headerName: "Trade Value",
      align: "center",
      headerAlign: "center",
      width: window.innerWidth < 600 ? 180 : "auto",
      flex: window.innerWidth < 600 ? 0 : 1,
    },
    {
      field: "orderType",
      headerName: "Direction",
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
        <Button
          variant="contained"
          onClick={() =>
            navigate(
              `/trade/${value.row.key}/${value.row.traderId}/${value.row.assetSymbol}`
            )
          }
        >
          Manipulate
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <DataGrid
        rows={trades}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
      />
    </Box>
  );
};

export default LiveTrades;
