import React from "react";
import PreSurgeryProgress from "@components/dashboardcomponents/PreSurgeryProgress";
import Reminder from "@components/dashboardcomponents/Reminder";
import Box from '@mui/material/Box';
import DateDDay from "@components/dashboardcomponents/DateDDay";

export default function Dashboard() {
  return (
    <div>
      <Box sx={{ml:100, mt: "40px"}}>
        <DateDDay />
      </Box>
      <Box>
        <PreSurgeryProgress />
      </Box>
      <div>
        <Reminder />
      </div>
    </div>
  );
}
