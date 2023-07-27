import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Countdown() {
  const targetDate = new Date("2023-07-29");
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();
      const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
      setDaysRemaining(remainingDays);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card sx={{ backgroundColor: "#FFEBF6", maxWidth: "50px", height: "50px" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "7px",
        }}
      >
        <Typography
          variant="subtitle2"
          component="div"
          sx={{ fontSize: "10px", opacity: "50%", textAlign: "center" }}
        >
          Jours
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ fontSize: "13px", fontWeight: "bold", textAlign: "center" }}
        >
          {daysRemaining}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Countdown;
