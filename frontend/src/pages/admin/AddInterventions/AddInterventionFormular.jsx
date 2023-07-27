import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";
import { Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";

function AddInterventionFormular() {
  const [officeData, setOfficeData] = useState([]);
  const [doctorData, setDoctorData] = useState([]);
  const [patientData, setPatientData] = useState([]);
  const navigate = useNavigate();
  const [interventionData, setInterventionData] = useState({
    id_intervention: "",
    intervention_name: "",
    date: "",
    id_doc: "",
    id_patient: "",
    id_office: "",
  });

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    console.log("refresh");
    axios.get("http://localhost:5000/offices/").then((response) => {
      console.log("office", response.data);
      setOfficeData(response.data);
    });

    axios.get("http://localhost:5000/users/").then((response) => {
      console.log("users", response.data);
      let doctors = [];
      let patients = [];
      response.data.forEach((user) => {
        if (user.roles.length == 0) {
          patients.push(user);
        } else {
          doctors.push(user);
        }
      });
      setPatientData(patients);
      setDoctorData(doctors);
    });
  };

  useEffect(() => {
    // Effectuer les actions souhaitées lorsque l'état interventionData est mis à jour
  }, [interventionData]);

  const handleTest = () => {
    setInterventionData(test);
  };
  const handleAjouter = () => {
    console.log(interventionData);

    axios
      .post("http://localhost:5000/interventions/", interventionData)
      .then((response) => {
        console.log("response", response);

        if (response.status == 201) {
           enqueueSnackbar("L'intervention est bien ajoutée", {
            variant: "success",
          })

          navigate("/admin/interventions");
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Doctor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={interventionData.id_doc}
            label="Age"
            onChange={(e) =>
              setInterventionData({
                ...interventionData,
                id_doc: e.target.value,
              })
            }
          >
            {doctorData.map((doctor) => (
              <MenuItem key={doctor.iduser} value={doctor.iduser}>
                {doctor.lastname} {doctor.firstname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Patient</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={interventionData.id_patient}
            label="Age"
            onChange={(e) =>
              setInterventionData({
                ...interventionData,
                id_patient: e.target.value,
              })
            }
          >
            {patientData.map((patient) => (
              <MenuItem key={patient.iduser} value={patient.iduser}>
                {patient.lastname} {patient.firstname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Office</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={interventionData.id_office}
            label="Office"
            onChange={(e) =>
              setInterventionData({
                ...interventionData,
                id_office: e.target.value,
              })
            }
          >
            {officeData.map((office) => (
              <MenuItem key={office.idoffice} value={office.idoffice}>
                {office.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography
          sx={{ fontWeight: "medium", mb: 2, fontSize: 16 }}
        ></Typography>
        <div style={{ display: "flex" }}>
          <TextField
            id="interventionName"
            label="Nom de l'intervention"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="nom de l'intervention"
            value={interventionData.intervention_name}
            onChange={(e) =>
              setInterventionData({
                ...interventionData,
                intervention_name: e.target.value,
              })
            }
            sx={{ mr: "2rem" }}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="date"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) =>
                setInterventionData({
                  ...interventionData,
                  date: e.$d.toISOString().slice(0, 19).replace("T", " "),
                })
              }
              sx={{ mr: "2rem" }}
            />
          </LocalizationProvider>
        </div>

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

export default AddInterventionFormular;
