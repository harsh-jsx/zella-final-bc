import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SmallCard = ({ label, value }) => {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{
        width: 400,
        height: 200,
        boxShadow: 2,
        padding: 3,
        borderRadius: 4,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" sx={{ fontSize: 20, fontWeight: "bold" }}>
          {label}
        </Typography>
        <Tooltip title="Connected">
          <IconButton>
            <FiberManualRecordIcon sx={{ color: "green" }} />
          </IconButton>
        </Tooltip>
      </Stack>

      <Typography
        variant="h6"
        sx={{ fontSize: 50, color: value > 0 ? "green" : "red" }}
      >
        {value}
      </Typography>
    </Stack>
  );
};

export default SmallCard;
