import React from "react";
import PreSurgeryProgress from "@components/dashboardcomponents/PreSurgeryProgress";
import Reminder from "@components/dashboardcomponents/Reminder";
import Box from '@mui/material/Box';

export default function Dashboard() {
  return (
    <div>
      <Box sx={{ml:100, mt: "40px"}}>
      </Box>
      <Box sx={{display:"flex"}}>
        <PreSurgeryProgress />
        <Reminder />
      </Box>
      <div>
      </div>
    </div>
  );
}
