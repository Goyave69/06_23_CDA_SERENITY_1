import React, { useMemo, useState }from 'react';
//import AdminOffice from "@pages/admin/AdminOffice.jsx";
import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

const handleRafraichir = function () {
    axios.get("http://localhost:5000/offices/").then((response) => {
      console.log("response", response);
      setData(response.data);
    });
};

const Cabinets = () => {
  const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        field: "Sélection",
        headerName: "Sélection",
        headerClassName: "green-header",
        width: 190,
      },
      {
        field: "Praticiens",
        headerName: "Praticiens",
        width: 150,
        editable: true,
      },
      { field: "Patients", headerName: "Patients", width: 150, editable: true },
      { field: "Interventions", headerName: "Interventions", width: 150,
      editable: true,},
      { field: "Satisfaction", headerName: "Satisfaction", width: 150,
      editable: true, },
    ],
    []
  );

  
    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          marginLeft: "450px",
        }}
      >
        <Box
          sx={{
            p: 4,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            width: "auto",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <DataGrid
              columns={columns}
              rows={data}
              checkboxSelection
              autoHeight
              disableColumnMenu
            />
          </Box>
          <Button
            onClick={handleRafraichir}
            variant="contained"
            color="primary"
            sx={{ borderRadius: "10px", ml: "290px", marginTop: "20px" }}
          >
            Nouveau cabinets
          </Button>
        </Box>
      </Container>
    );
};

export default Cabinets;