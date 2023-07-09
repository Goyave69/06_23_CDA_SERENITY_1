import React, { useMemo, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
//import Typography from "@mui/material/Typography";
//import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import PropTypes from "prop-types";
import { MaterialReactTable } from "material-react-table";

import axios from "axios";

//simple data example - Check out https://www.material-react-table.com/docs/examples/remote for a more complex example

const ListeOffices = () => {
  const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
      //  Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      { accessorKey: "doc_name", header: "Doc Name" },
     { accessorKey: "street_number", header: "Street Number" },
      { accessorKey: "street_name", header: "Street Name" },
      { accessorKey: "zip_code", header: "Zip Code" },
      { accessorKey: "phone_number", header: "Phone" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "free_parking", header: "Free Parking" },
      { accessorKey: "disabled", header: "Disabled" },
      { accessorKey: "open_hours", header: "Open Hours" },
      { accessorKey: "specialty", header: "Specialty" }

      /*    {
        accessorFn: (row) => row.age, //alternate way
        id: "age", //id required if you use accessorFn instead of accessorKey
        header: "Age",
        Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
      }, */
    ],
    []
  );

  const handleRafraichir = function () {
    axios.get("http://localhost:5000/offices/").then((response) => {
      console.log("response", response);
      setData(response.data);
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
        <Button
          onClick={handleRafraichir}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: "20px", marginTop: "30px" }}
        >
          Afficher les cabinets
        </Button>
      </Box>

  {/*   <Box sx={{ height: "400px", width: "400px" }}> */}
        <MaterialReactTable 
        sx={{ position: "abolute", left:"200px", height: 400, width: 300 }}
          columns={columns}
          data={data}
          enableRowSelection //enable some features
          enableColumnOrdering
          enableGlobalFilter
        />
 {/*      </Box> */}
    </Container>
  );
};

export default ListeOffices;

// patient, doc-admin
