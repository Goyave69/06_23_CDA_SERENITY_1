import React from "react";
import {
  TextField,
  Box,
  Typography,
  Card,
  Container,
  CardContent,
  Button,
} from "@mui/material";

const AddAppointment = () => {
  return (
    <Container
      sx={{
        display: "flex",
        mt: 6,
        width: "190%",
      }}
    >
      <Card
        sx={{
          boxShadow: "2",
          borderRadius: "10px",
          mt: 5,
          width: "auto",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              backgroundColor: "#BAEA64",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "medium",
                color: "white",
                mt: 2,
                mr: 25,
                ml: 2,
              }}
            >
              Ajouter un rendez-vous
            </Typography>
            <div style={{ color: "white" }}>
              <p>12</p>
            </div>
          </Box>

          <div style={{ display: "flex" }}>
            <TextField
              id="patient-number-street"
              label="Prénom"
              variant="outlined"
              name="numberStreet"
              sx={{ mt: "2rem", mr: "5rem" }}
            />
            <TextField
              id="patient-street"
              label="Nom de famille"
              variant="outlined"
              name="streetName"
              sx={{ ml: "2rem", mt: "2rem" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <TextField
              id="patient-zipcode"
              label="Horaires"
              variant="outlined"
              name="zipCode"
              sx={{ mt: "2rem", mr: "5rem" }}
            />
            <TextField
              id="patient-city"
              label="Lieu"
              variant="outlined"
              name="city"
              sx={{ ml: "2rem", mt: "2rem" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <TextField
              id="patient-country"
              label="Spécialité"
              variant="outlined"
              name="country"
              sx={{ mt: "2rem", mr: "5rem" }}
            />
            <TextField
              id="patient-phone"
              label="Interventions"
              variant="outlined"
              name="phoneNumber"
              sx={{ ml: "2rem", mt: "2rem" }}
            />
          </div>
          <Box display="flex" justifyContent="center" mt="1.5rem">
            <Button
              variant="contained"
              sx={{
                borderRadius: "10px",
                marginTop: "20px",
                backgroundColor: "#343435",
                height: "45px",
                width: "35%",
              }}
            >
              Créer
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddAppointment;
