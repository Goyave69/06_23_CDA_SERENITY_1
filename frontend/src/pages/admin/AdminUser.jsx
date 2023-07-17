import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import PropTypes from "prop-types";

import axios from "axios";

const AdminUser = () => {
  const handleValider = function () {
    let newUser = {};
    newUser.firstname = document.getElementById("firstname").value;
    newUser.lastname = document.getElementById("lastname").value;
    newUser.email = document.getElementById("email").value;
    newUser.phone = document.getElementById("phone").value;
    newUser.password = document.getElementById("password").value;
    newUser.roles = {}; //document.getElementById("roles").value

    console.log(newUser);

    axios
      .post("http://localhost:5000/users/", newUser)
      .then((response) => console.log("response", response));
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
        <TextField
          id="firstname"
          label="Prénom"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Prénom User"
        />
        <TextField
          id="lastname"
          label="Nom de Famille"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Nom de Famille"
        />

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="Email User"
        />
        <TextField
          id="phone"
          label="Telephone"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="numero de telephone"
        />

        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          margin="normal"
          placeholder="entrez votre password"
        />

        <TextField
          id="roles"
          label="Role"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="en tant que role"
        />

        <Button
          onClick={handleValider}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: "20px", marginTop: "30px" }}
        >
          Validate
        </Button>
      </Box>
    </Container>
  );
};

export default AdminUser;

// patient, doc-admin
