import React, { useState, useEffect, useMemo, useCallback } from "react";
import Container from "@mui/material/Container";

import { MaterialReactTable } from "material-react-table";
import axios from "axios";
import { NavLink } from "react-router-dom";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

let tableData = []


const OfficesList = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [officeData, setOfficeData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});


  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  }; 

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue('firstName')}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === 'email'
              ? validateEmail(event.target.value)
              : cell.column.id === 'age'
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors],
  );

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
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        enableHiding: false,
      },
      { accessorKey: "phone_number",
       header: "Phone",    
       enableHiding: false,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        ...getCommonEditTextFieldProps(cell),
      }), },
      { accessorKey: "open_hours", header: "Open Hours",
      muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        ...getCommonEditTextFieldProps(cell),
      }),},
      { accessorKey: "specialty", header: "Specialty",
      muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        ...getCommonEditTextFieldProps(cell),
      }), },
      { accessorKey: "street_number", header: "Street Number",
  
      muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        ...getCommonEditTextFieldProps(cell),
      }), },
      { accessorKey: "street_name", header: "Street Name",
    
      muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
        ...getCommonEditTextFieldProps(cell),
      }), },
    ],
    [getCommonEditTextFieldProps]
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
      {/* <h3>Liste des Cabinets dans lesquels vous pouvez prendre RDV</h3> */}
      
      <Box
          sx={{
            p: 4,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            width: "auto",
          }}
      >
      
      <Box sx={{ width: "100%", position: "relative", left: "300px", }}>
        <MaterialReactTable
             displayColumnDefOptions={{
              'mrt-row-actions': {
                muiTableHeadCellProps: {
                  align: 'center',
                },
                size: 120,
              },
            }}
        columns={columns}
        data={officeData}
        enableRowSelection
        enableGlobalFilter
        enableHiding={true}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        initialState={{ columnVisibility: { street_number: false, street_name: false } }}
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Create New Account
          </Button>
        )}

        />
              <CreateNewAccountModal
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
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

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {}),
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create New Account</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
const validateAge = (age) => age >= 18 && age <= 50;

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
