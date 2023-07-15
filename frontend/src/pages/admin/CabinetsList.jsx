import React, { useState, useEffect, useMemo } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";

function OfficesList() {
  const [officeData, setOfficeData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/offices/").then((response) => {
      console.log("response", response);
      setOfficeData(response.data);
    });
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } },
      },
      /* { accessorKey: "doc_name", header: "Doc Name" }, */
      /* { accessorKey: "street_number", header: "Street Number" },
      { accessorKey: "street_name", header: "Street Name" },
      { accessorKey: "zip_code", header: "Zip Code" }, */
      { accessorKey: "phone_number", header: "Phone" },
      /*    { accessorKey: "email", header: "Email" }, */
      /*    { accessorKey: "free_parking", header: "Free Parking" },
      { accessorKey: "disabled", header: "Disabled" }, */
      { accessorKey: "open_hours", header: "Open Hours" },
      { accessorKey: "specialty", header: "Specialty" },
    ],
    []
  );

/*   const handleAfficher = function () {
    axios.get("http://localhost:5000/offices/").then((response) => {
      console.log("response", response);
      setOfficeData(response.data);
    });
  }; */

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
      <h3>Cabinets</h3>
      <Box
        sx={{
          p: 4,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {/* <Button
          onClick={handleRafraichir}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: "20px", marginTop: "30px" }}
        >
          Afficher les cabinets
        </Button> */}
      </Box>

      <Box
        sx={{
          p: 4,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
    {<Button
          onClick={handleAjouerNew}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: "20px", marginTop: "30px" }}
        >
         Ajouter un nouveau Cabinet
        </Button>}
      </Box>

      <MaterialReactTable
        columns={columns}
        data={officeData}
        enableRowSelection
        enableColumnOrdering
        enableGlobalFilter
      />
    </Container>
  );
}

export default OfficesList;

/* import React, { useEffect, useMemo, useState }from 'react';
import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import axios from "axios";



const ListeCabinets = () => {

useEffect(() => {
  axios.get("http://localhost:5000/offices/").then((response) => {
    console.log("response", response);
    //setData(response.data);
  });
}), [];


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
          marginLeft: "150px",
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
          <Box display="flex" justifyContent="center" mt="2rem">
            <NavLink to="/admin/add-offices">
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "10px", marginTop: "20px" }}
              >
                Nouveau cabinets
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Container>
    );
};

export default Cabinets; */
