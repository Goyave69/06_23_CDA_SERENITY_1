import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import axios from "axios";
import getCookie from "@services/cookieHelper";

// creation des utilisateurs http://localhost:3000/admin/patients
//daa https://www.passportjs.org/packages/passport-local/

// const LoginPage = ({ setLoggedState }) => {
//   const handleLogin = function () {
//     console.log(setLoggedState);

//     let data = {"email" : "trois", "password": "cinq"}

//     axios
//       .post("http://localhost:5000/authentication/login", data)
//       .then((response) => {
//         console.log("response", response);

//         if (response.status == 201) {
//           console.log("snack")
//           //on pourra ajouter une snack bar!!
//         }else{
//           console.log(response.status)
//         }
//       })
//       .catch((e) => {
//         console.log(e)
//         alert("hum ...It seems somthing went wrong !");
//       });
//   };

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = getCookie("user");
  console.log(token);
  const data = {
    email: email,
    password: password,
  };

  const handleLogin = function () {
    axios.post("http://localhost:5000/login", data).then((response) => {
      if (response.status === 201) {
        if (response.data.roles[0] === "PATIENT_ROLE") {
          alert("logged as user");
          navigate("/user");
        } else if (response.data.roles[0] === "ADMIN_ROLE") {
          alert("logged as " + response.data.roles[0]);
          navigate("/admin");
        }
      } else {
        alert("not good !");
      }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Mot de passe"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          placeholder="mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
