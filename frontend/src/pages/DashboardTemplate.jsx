import React from "react";

import PreSurgeryProgress from "@components/dashboardcomponents/PreSurgeryProgress";
import Reminder from "@components/dashboardcomponents/Reminder";
import Box from '@mui/material/Box';

export default function Dashboard() {
  return (
    <div>
      <Box sx={{}}>
        <PreSurgeryProgress />
      </Box>
      <div>
        <Reminder />
      </div>
    </div>
  );
}
