import React from 'react';
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Appointment() {
  return (
    <Card
      sx={{
        border: "3px solid #66E47A",
        marginTop: "40px",
        backgroundColor: "#F5F5F5",
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: 14,
            display: "flex",
            justifyContent: "start",
            marginBottom: "48px",
          }}
        >
          Les Rendez-vous disponible
        </Typography>
      </CardContent>
    </Card>
  );
}
