import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import axios from "axios";
import { Typography } from "@mui/material";

let test = {
  firstname: "name " + Date.now(),
  lastname: "doc_name " + Date.now(),
  email: "truc@bidule.machin",
  phone: "123456",
  password: "1234",
  roles: "chirurgien",
  specialty: 1,
  languages: "Chinois, Marseillais",
  biography: "Un bon doc !",
  diploma: "CAP Boucherie",
  experiences: "Heu ça va personne ne s'est plaint",
  publications: "Oui oui à la plage",
};

function AddUserFormular() {
  const navigate = useNavigate();
  const [role, setRole] = useState("patient");
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    roles: "",
    specialty: "",
    languages: "",
    biography: "",
    diploma: "",
    experiences: "",
    publications: "",
  });

  useEffect(() => {
    // Effectuer les actions souhaitées lorsque l'état userData est mis à jour
  }, [userData]);

  //voir avec la logique de mel PATIENT/ADMIN
  
  const handleRoleChange = (event) => {
    if (event.target.value == "patient") {
      setUserData({ ...userData, roles: "" });
    }
    setRole(event.target.value);
  };

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
          Ajouter un nouvel utilisateur
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
        </div>
        <div style={{ display: "flex" }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              row
              value={role}
              onChange={handleRoleChange}
            >
              <FormControlLabel
                value="patient"
                control={<Radio />}
                label="Patient"
              />
              <FormControlLabel
                value="praticien"
                control={<Radio />}
                label="Praticien"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div>
          {role == "praticien" ? (
            <div>
              <div style={{ display: "flex" }}>
                <TextField
                  id="roles"
                  label="Roles"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="roles"
                  value={userData.roles}
                  onChange={(e) =>
                    setUserData({ ...userData, roles: e.target.value })
                  }
                  sx={{ mr: "2rem" }}
                />

                <TextField
                  id="specialty"
                  label="specialty"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="specialty( int )"
                  value={userData.specialty}
                  onChange={(e) =>
                    setUserData({ ...userData, specialty: e.target.value })
                  }
                  sx={{ mr: "2rem" }}
                />
              </div>

              <div style={{ display: "flex" }}>
                <TextField
                  id="languages"
                  label="Languages"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="languages"
                  value={userData.languages}
                  onChange={(e) =>
                    setUserData({ ...userData, languages: e.target.value })
                  }
                  sx={{ mr: "2rem" }}
                />
                <TextField
                  id="biography"
                  label="biography"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="biography"
                  value={userData.biography}
                  onChange={(e) =>
                    setUserData({ ...userData, biography: e.target.value })
                  }
                  sx={{ mr: "2rem" }}
                />
              </div>

              <div style={{ display: "flex" }}>
                <TextField
                  id="diploma"
                  label="diploma"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="diploma"
                  value={userData.diploma}
                  onChange={(e) =>
                    setUserData({ ...userData, diploma: e.target.value })
                  }
                  sx={{ mr: "2rem" }}
                />
                <TextField
                  id="experiences"
                  label="experiences"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="experiences"
                  value={userData.experiences}
                  onChange={(e) =>
                    setUserData({ ...userData, experiences: e.target.value })
                  }
                  sx={{ mr: "2rem" }}
                />
              </div>

              <div style={{ display: "flex" }}>
                <TextField
                  id="publications"
                  label="publications"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="publications"
                  value={userData.publications}
                  onChange={(e) =>
                    setUserData({ ...userData, publications: e.target.value })
                  }
                  sx={{ mr: "2rem" }}
                />
              </div>
            </div>
          ) : (
            <span></span>
          )}
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
