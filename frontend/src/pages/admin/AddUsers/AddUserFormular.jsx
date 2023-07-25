import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import axios from "axios";
import { Typography } from "@mui/material";

let test = {
  firstname: "name " + Date.now(),
  lastname: "doc_name " + Date.now(),
  email: "truc@bidule.machin",
  phone: "123456",
  password: "1234",
  roles: "",
};

function AddUserFormular() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    roles: "",
  });

  useEffect(() => {
    // Effectuer les actions souhaitées lorsque l'état userData est mis à jour
  }, [userData]);

  const handleTest = () => {
    setUserData(test);
  };
  const handleAjouter = () => {
    console.log(userData);

    if (
      userData.roles != undefined &&
      userData.roles.length > 0 &&
      typeof userData.roles == "string"
    ) {
      let roles = { roles: userData.roles };
      userData.roles = roles;
    }

    console.log("2", userData);

    axios
      .post("http://localhost:5000/users/", userData)
      .then((response) => {
        console.log("response", response);

        if (response.status == 201) {
          console.log("snack");
          //on pourra ajouter une snack bar!!

          navigate("/admin/patients");
        } else {
          console.log(response.status);
        }
      })
      .catch((e) => {
        console.log(e);
        alert("hum ...It seems somthing went wrong !");
      });
  };

  return (
    <Container
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          ml: 10,
          p: 4,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          width: "100%",
        }}
      >
        <Typography sx={{ fontWeight: "medium", mb: 2, fontSize: 16 }}>
          Ajouter un nouveau cabinet
        </Typography>
        <div style={{ display: "flex" }}>
          <TextField
            id="firstname"
            label="Firstname"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Firstname"
            value={userData.firstname}
            onChange={(e) =>
              setUserData({ ...userData, firstname: e.target.value })
            }
            sx={{ mr: "2rem" }}
          />
          <TextField
            id="lastname"
            label="Lastname"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Lastname"
            value={userData.lastname}
            onChange={(e) =>
              setUserData({ ...userData, lastname: e.target.value })
            }
            sx={{ mr: "2rem" }}
          />
        </div>

        <div style={{ display: "flex" }}>
          <TextField
            id="email"
            label="email"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            sx={{ mr: "2rem" }}
          />
          <TextField
            id="phone"
            label="phone"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="phone"
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
            sx={{ mr: "2rem" }}
          />
        </div>

        <div style={{ display: "flex" }}>
          <TextField
            id="password"
            label="password"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            sx={{ mr: "2rem" }}
          />

          <TextField
            id="roles"
            label="Roles"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="roles"
            value={userData.roles}
            onChange={(e) => setUserData({ ...userData, roles: e.target.value })}
            sx={{ mr: "2rem" }}
          />
        </div>
        <Button onClick={handleTest}>test</Button>
        <Button
          onClick={handleAjouter}
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: "10px",
            marginTop: "20px",
            backgroundColor: "#343435",
            height: "45px",
            width: "35%",
            marginLeft: 12,
          }}
        >
          Valider
        </Button>
      </Box>
    </Container>
  );
}

export default AddUserFormular;
