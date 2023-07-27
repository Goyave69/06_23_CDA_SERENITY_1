import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DateDDay = () => {
  return (
    <div>
      <Box>
        <Typography
          variant="h6"
          component="span"
          sx={{ fontSize: 11, color: "#7265E3" }}
        >
          Date
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h5"
          component="span"
          sx={{ fontWeight: "bold", fontSize: 15, color: "#004F8B" }}
        >
          7 Juillet 2023
        </Typography>
      </Box>
    </div>
  );
};

export default DateDDay;
