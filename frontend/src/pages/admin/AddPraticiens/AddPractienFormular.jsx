/* import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import PropTypes from "prop-types";

import axios from "axios"

const AdminDoctor= () => {



  const handleValider = function () {
let newDoctor = {}
newDoctor.doc_name = document.getElementById("doc_name").value
newDoctor.specialty = document.getElementById("specialty").value
newDoctor.languages = document.getElementById("languages").value
newDoctor.biography = document.getElementById("biography").value
newDoctor.diploma = document.getElementById("diploma").value
newDoctor.phone_number = document.getElementById("phone_number").value
newDoctor.email = document.getElementById("email").value
newDoctor.experience = document.getElementById("experience").value
newDoctor.disabled = document.getElementById("disabled").value
newDoctor.open_hours = document.getElementById("open_hours").value


    console.log(newDoctor);

	axios.post('http://localhost:5000/doctor/', newDoctor)
	.then(response => console.log("response",response));

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
		id="specialty"
          label="Nom cabinet"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="nom du cabinet"
        />
        <TextField
		id="doc_name"
          label="doc_name"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="doc_name"
        />

<TextField
		id="street_number"
          label="street_number"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="street_number"
        />
        <TextField
		id="street_name"
          label="street_name"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="street_name"
        />

<TextField
		id="zip_code"
          label="zip_code"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="zip_code"
        />

<TextField
		id="phone_number"
          label="phone_number"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="phone_number"
        />

<TextField
		id="email"
          label="email"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="email"
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

export default AdminDoctor;

// patient, doc-admin
 */
