import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  Paper,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";

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
            fontSize: 16,
            display: "flex",
            justifyContent: "start",
            marginBottom: "48px",
            ml: "10px",
          }}
        >
          Les Rendez-vous disponibles :
        </Typography>
        <Box sx={{ display: "flex", flexFlow: "row wrap" }}>
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
              Dr. Alexandro Smith
            </Typography>
            <Typography sx={{ mb: 2 }} variant="body2" color="text.secondary">
              Infirmier
            </Typography>
            <Typography variant="body2" gutterBottom>
              Disponible Aujourd&apos;hui à 14h
            </Typography>

            <Button
              sx={{ borderRadius: "16px" }}
              size="small"
              onClick={() => enqueueSnackbar("Votre RDV est confirmé, a bientot!", { variant: "success" })}
            >
              Prendre Rendez-vous
            </Button>
          </Paper>

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
            <Button
              sx={{ borderRadius: "16px" }}
              size="small"
              onClick={() => enqueueSnackbar("Votre RDV est confirmé, a bientot!", { variant: "success" })}
            >
              Prendre Rendez-vous
            </Button>
          </Paper>

          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 290,
              mr: "20px",
              height: 160,
              flexGrow: 1,
              borderRadius: "16px",
              backgroundColor: "#fff",
            }}
            elevation={3}
          >
            <Typography gutterBottom variant="subtitle1" component="div">
              Dr. Samuel Chemla
            </Typography>
            <Typography sx={{ mb: 2 }} variant="body2" color="text.secondary">
              Psychologue
            </Typography>
            <Typography variant="body2" gutterBottom>
              Disponible Demain à 10h
            </Typography>
            <Button
              sx={{ borderRadius: "16px" }}
              size="small"
              onClick={() => enqueueSnackbar("Votre RDV est confirmé, a bientot!", { variant: "success" })}
            >
              Prendre Rendez-vous
            </Button>
          </Paper>
        </Box>
      </CardContent>
    </Card>
  );
}
