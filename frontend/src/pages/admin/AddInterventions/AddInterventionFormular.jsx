import React, { useState, useEffect } from "react";
import { useNavigate   } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import axios from "axios";
import { Typography } from "@mui/material";

/* let test = {
  name: "name "+Date.now(),
  doc_name: "doc_name "+Date.now(),
  street_number: 4,
  street_name:"rue du bouyt du monde",
  zip_code: "34567",
  phone_number: "123456",
  email: "truc@bidule.machin",
  free_parking: 1,
  disabled: 0,
  open_hours: "9h00 17h00",
  specialty: "2",
}
 */
function AddInterventionFormular() {
  const navigate = useNavigate();
  const [interventionData, setInterventioneData] = useState({
    name: "",
    doc_name: "",
    street_number: "",
    street_name: "",
    zip_code: "",
    phone_number: "",
    email: "",
    free_parking: "",
    disabled: "",
    open_hours: "",
    specialty: "",
  });

  useEffect(() => {
    // Effectuer les actions souhaitées lorsque l'état officeData est mis à jour
  }, [officeData]);

  const handleTest= () => {
    setOfficeData(test)
  }
  const handleAjouter = () => {
    console.log(officeData);


    axios
      .post("http://localhost:5000/offices/", officeData)
      .then((response) => {
        console.log("response", response);

        if (response.status == 201) {
          console.log("snack")
          //on pourra ajouter une snack bar!!
       
          navigate("/admin/cabinets");
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
      sx={{
        mt:6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
 
      <Box
        sx={{
          ml:10,
          p: 4,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          width: "100%",
        }}
      >
        <Typography sx={{fontWeight:"medium", mb:2, fontSize:16 }}>Ajouter un nouveau cabinet</Typography>
       <div style={{ display: "flex" }}>
       <TextField
          id="name"
          label="Nom cabinet"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="nom du cabinet"
          value={officeData.name}
          onChange={(e) =>
            setOfficeData({ ...officeData, name: e.target.value })
          }
          sx={{mr: "2rem" }}
        />
        <TextField
          id="doc_name"
          label="doc_name"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="doc_name"
          value={officeData.doc_name}
          onChange={(e) =>
            setOfficeData({ ...officeData, doc_name: e.target.value })
          }
          sx={{  mr: "2rem" }}
        />
       </div>

        <div style={{ display: "flex" }} >
        <TextField
          id="street_number"
          label="street_number"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="street_number"
          value={officeData.street_number}
          onChange={(e) =>
            setOfficeData({ ...officeData, street_number: e.target.value })
          }
          sx={{mr: "2rem" }}
        />
        <TextField
          id="street_name"
          label="street_name"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="street_name"
          value={officeData.street_name}
          onChange={(e) =>
            setOfficeData({ ...officeData, street_name: e.target.value })
          }
          sx={{mr: "2rem" }}
        />
        </div>

        <div style={{ display: "flex" }}>
        <TextField
          id="zip_code"
          label="zip_code"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="zip_code"
          value={officeData.zip_code}
          onChange={(e) =>
            setOfficeData({ ...officeData, zip_code: e.target.value })
          }
          sx={{mr: "2rem" }}
        />
        <TextField
          id="phone_number"
          label="phone_number"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="phone_number"
          value={officeData.phone_number}
          onChange={(e) =>
            setOfficeData({ ...officeData, phone_number: e.target.value })
          }
          sx={{mr: "2rem" }}
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
          value={officeData.email}
          onChange={(e) =>
            setOfficeData({ ...officeData, email: e.target.value })
          }
          sx={{mr: "2rem" }}
        />
        <TextField
          id="free_parking"
          label="free_parking"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="free_parking"
          value={officeData.free_parking}
          onChange={(e) =>
            setOfficeData({ ...officeData, free_parking: e.target.value })
          }
          sx={{mr: "2rem" }}
        />
       </div>
        
        <div style={{ display: "flex" }}>
        <TextField
          id="disabled"
          label="disabled"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="disabled"
          value={officeData.disabled}
          onChange={(e) =>
            setOfficeData({ ...officeData, disabled: e.target.value })
          }
          sx={{mr: "2rem" }}
        />
        <TextField
          id="open_hours"
          label="open_hours"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="open_hours"
          value={officeData.open_hours}
          onChange={(e) =>
            setOfficeData({ ...officeData, open_hours: e.target.value })
          }
          sx={{mr: "2rem" }}
        />
        </div>
        
        <TextField
          id="specialty"
          label="specialty"
          variant="outlined"
          fullWidth
          margin="normal"
          placeholder="specialty"
          value={officeData.specialty}
          onChange={(e) =>
            setOfficeData({ ...officeData, specialty: e.target.value })
          }
          sx={{mr: "2rem" }}
        />
         <Button onClick={handleTest}>test</Button>
        <Button
          onClick={handleAjouter}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: "10px",
          marginTop: "20px",
          backgroundColor: "#343435",
          height: "45px",
          width: "35%", 
          marginLeft: 12,}}
        >
          Valider
        </Button>
      </Box>
    </Container>
  );
}

export default AddInterventionFormular;