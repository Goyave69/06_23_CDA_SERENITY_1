import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = ({setLoggedState}) => {
 
  const handleLogin = function () {
    console.log(setLoggedState);
  }

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
        variant="contained" color="primary" fullWidth sx={{borderRadius:"20px", marginTop:"30px"}}>
          Se connecter
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;



// patient, doc-admin
