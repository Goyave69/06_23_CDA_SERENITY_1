import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Box from "@mui/material/Box";

export default function StaticDatePickerLandscape() {
  return (
    <Box sx={{ ml: 5, mt: 16, boxShadow: 3, borderRadius: "10px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation="landscape"
          sx={{ borderRadius: "10px" }}
        />
      </LocalizationProvider>
    </Box>
  );
}
