import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from '@mui/material/Paper';
import { Button, Typography } from "@mui/material";

import React from 'react';

export default function Reminder() {
  return (
    <Card
      sx={{
        border: "3px solid #66E47A",
        marginTop: "40px",
        backgroundColor: "#F5F5F5",
        borderRadius: "20px",
        ml:20
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: 16,
            display: "flex",
            justifyContent: "start",
            marginBottom: "48px",
            ml: "10px",
          }}
        >
         Rappels de vos  prochains rendez-vous :
        </Typography>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            mr: "20px",
            maxWidth: 290,
            height: 160,
            flexGrow: 1,
            borderRadius: "16px",
            backgroundColor: "#fff",
          }}
          elevation={3}
        >
          <Typography gutterBottom variant="subtitle1" component="div">
            Dr. Claudia Nasi
          </Typography>
          <Typography sx={{ mb: 2 }} variant="body2" color="text.secondary">
            Kinésithérapeute
          </Typography>
          <Typography variant="body2" gutterBottom>
            Disponible dans 3h
          </Typography>
          <Button sx={{ borderRadius: "16px" }} size="small">
            Voir
          </Button>
        </Paper>
      </CardContent>
    </Card>
  );
}
