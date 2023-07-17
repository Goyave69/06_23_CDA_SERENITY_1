/* import React, { useState, useEffect, useMemo } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";
import { NavLink } from "react-router-dom";

const OfficesList = () => {
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
      { accessorKey: "phone_number", header: "Phone" },
      { accessorKey: "open_hours", header: "Open Hours" },
      { accessorKey: "specialty", header: "Specialty" },
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
      {<h3>Liste des Cabinets dans lesquels vous pouvez prendre RDV</h3>}
      
      <Box
          sx={{
            p: 4,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            width: "auto",
          }}
      >
      
      <Box sx={{ width: "100%" }}>
        <MaterialReactTable
        columns={columns}
        data={officeData}
        enableRowSelection
        enableColumnOrdering
        enableGlobalFilter
        />
      </Box>


      <Box display="flex" justifyContent="center" mt="2rem">
        <NavLink to="/admin/add-offices">
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "10px", marginTop: "20px" }}
          >
            Cliquez ici pour ajouter un nouveau Cabinet
          </Button>
        </NavLink>
      </Box>
      </Box>
      
    </Container>
  );
}

export default OfficesList;
 */