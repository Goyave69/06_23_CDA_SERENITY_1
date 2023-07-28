import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

const DateDDay = () => {
  return (
    <div>
      <Box>
        <Box>
          <Typography
            variant="h5"
            component="span"
            sx={{ fontWeight: "600", fontSize: 14, color: "#11142D", mr:3}}
          >
            Ma chirurgie
          </Typography>
        </Box>

        <Typography
          variant="h6"
          component="span"
          sx={{ fontSize: 12, color: "#808191" }}
        >
          Lundi 20 Novembre
        </Typography>
        <Card sx={{ backgroundColor: "#6C5DD3", maxWidth: "50px", height: "20px", borderRadius:2, mt:"3px" }}>
          <Typography sx={{ fontWeight: "600", fontSize: 13, color: "white", }}>10:00</Typography>
        </Card>
      </Box>
    </div>
  );
};

export default DateDDay;
