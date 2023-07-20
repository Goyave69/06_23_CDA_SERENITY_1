import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import axios from "axios";

// creation des utilisateurs http://localhost:3000/admin/patients
// https://www.passportjs.org/packages/passport-local/

const LoginPage = ({ setLoggedState }) => {
  const handleLogin = function () {
    console.log(setLoggedState);

    let data = {"email" : "trois", "password": "cinq"}

    axios
      .post("http://localhost:5000/authentication/login", data)
      .then((response) => {
        console.log("response", response);

        if (response.status == 201) {
          console.log("snack")
          //on pourra ajouter une snack bar!!
        }else{
          console.log(response.status)
        }
      })
      .catch((e) => {
        console.log(e)
        alert("hum ...It seems somthing went wrong !");
      });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          p: 4,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          <b>Bienvenue !</b>
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          placeholder="exemple@exemple.com"
        />
        <TextField
          label="Mot de passe"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          placeholder="mot de passe"
        />
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: "20px", marginTop: "30px" }}
        >
          Se connecter
        </Button>
      </Box>
    </Container>
  );
};

LoginPage.propTypes = {
  setLoggedState: PropTypes.func, // Add the missing prop type validation
 
};

export default LoginPage;

// patient, doc-admin
