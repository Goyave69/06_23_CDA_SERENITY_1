import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import PropTypes from "prop-types";

import axios from "axios"

const AdminOffice = () => {



  const handleValider = function () {
let newOffice = {}
newOffice.name = document.getElementById("name").value
newOffice.doc_name = document.getElementById("doc_name").value
newOffice.street_number = document.getElementById("street_number").value
newOffice.street_name = document.getElementById("street_name").value
newOffice.zip_code = document.getElementById("zip_code").value
newOffice.phone_number = document.getElementById("phone_number").value
newOffice.email = document.getElementById("email").value
newOffice.free_parking = document.getElementById("free_parking").value
newOffice.disabled = document.getElementById("disabled").value
newOffice.open_hours = document.getElementById("open_hours").value
newOffice.specialty = document.getElementById("specialty").value

    console.log(newOffice);

	axios.post('http://localhost:5000/offices/', newOffice)
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
		id="name"
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

<TextField
		id="free_parking"
          label="free_parking"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="free_parking"
        />

<TextField
		id="disabled"
          label="disabled"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="disabled"
        />

<TextField
		id="open_hours"
          label="open_hours"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="open_hours"
        />

<TextField
		id="specialty"
          label="specialty"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="specialty"
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

export default AdminOffice;

// patient, doc-admin
