import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Box from '@mui/material/Box';

export default function BasicDateCalendar() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Box sx={{ boxShadow: 10, borderRadius: "10px", ml: 8 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker orientation="landscape" sx={{borderRadius: "10px"}}/>
        </LocalizationProvider>
      </Box>
    </div>
  );
}