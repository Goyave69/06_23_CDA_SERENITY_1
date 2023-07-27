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
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

function InterventionsList() {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [interventionData, setInterventionData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = (values) => {
    // officeData.push(values);
    console.log(values);
    console.log("creation");
    delete values.idoffice;
    axios
      .post("http://localhost:5000/interventions/", values)
      .then((response) => {
        console.log("response", response);

        if (response.status == 201) {
          console.log("snack");
          refresh();
          //on pourra ajouter une snack bar!!
        } else {
          console.log(response.status);
        }
      })
      .catch((e) => {
        console.log(e);
        alert("hum ...It seems somthing went wrong !");
      });
    //setInterventionData([...interventionData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      /* officeData[row.index] = values;
             //send/receive api updates here, then refetch or update local table data for re-render
             setOfficeData([...officeData]);*/
      console.log("UPDTE 2", values);
      let id_to_put = row.getValue("idoffice");
      delete values.idoffice;
      let url_put = "http://localhost:5000/interventions/" + id_to_put;
      axios.put(url_put, values).then((response) => {
        console.log("response", response);
        if (response.status == 201) {
          console.log(row.getValue("name") + " a bien été mis à jour");
          refresh();
        }
        // setOfficeData(response.data);
      });

      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
};

const handleDeleteRow = useCallback(
    (row) => {
        if (!confirm('Are you sure you want to delete ${row.getValue("intervention_name")}')) {
            return;
        }
        //send api delete request here, then refetch or update local table data for re-render
        let id_to_delete = row.getValue("id_intervention");
        console.log("efface", id_to_delete);
        // actualaisation du tableau directement sans passer par le backend et la base
        // officeData.splice(row.id, 1);
        //  setOfficeData([...officeData]);
        let url_delete = "http://localhost:5000/interventions/" + id_to_delete;
        axios.delete(url_delete).then((response) => {
            console.log("response", response);
            if (response.status == 200) {
                console.log(row.getValue("intervention_name") + " a bien été supprimé");
                refresh();
            }
            // setInterventionsData(response.data);
        });

    },
    [interventionData]
);

const getCommonEditTextFieldProps = useCallback(
  (cell) => {
      return {
          error: !!validationErrors[cell.id],
          helperText: validationErrors[cell.id],
          onBlur: (event) => {
              const isValid = cell.column.id === "email"
                  ? validateEmail(event.target.value)
                  : cell.column.id === "age"
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
  [validationErrors]
);

  useEffect(() => {
    refresh();
  }, []);

    const refresh = () => {
        console.log("refresh");
        axios.get("http://localhost:5000/interventions/").then((response) => {
            console.log("response", response);
            setInterventionData(response.data);
        });
    };

    //enablediting false sur idoffice https://www.material-react-table.com/docs/guides/editing
    const columns = useMemo(
        () => [
            {
                accessorKey: "id_intervention",
                header: "Id Intervention",
                enableEditing: "false",
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: "intervention_name",
                header: "Intervention Name",
                enableEditing: "false",
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: "date",
                header: "Date",
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: "doctor",
                header: "Nom Medecin",
                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
                enablehiding: "false",
            },
  
            {
                accessorKey: "patient",
                header: "Nom Patient",

                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
            {
                accessorKey: "office",
                header: "Cabinet",

                muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
                    ...getCommonEditTextFieldProps(cell),
                }),
            },
           
        ],
        [getCommonEditTextFieldProps]
    );

    /*
  const recupKeys = Object.keys(interventionsData)
  console.log(officeData.name);
  */
    return (
        <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          marginLeft: "160px",
        }}
      >
        {<h3>LISTE DES INTERVENTIONS PREVUES </h3>}
  
        <Box
          sx={{
            p: 4,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            width: "auto",
          }}
        >
          <Box sx={{ width: "100%", position: "relative", left: "300px" }}>
                    <MaterialReactTable
                        displayColumnDefOptions={{
                            "mrt-row-actions": {
                                muiTableHeadCellProps: {
                                    align: "center",
                                },
                                size: 120,
                            },
                        }}
                        columns={columns}
                        data={interventionData}
                        enableRowSelection
                        enableGlobalFilter
                        enableHiding={true}
                        editingMode="modal" //default //Daa je comprends pas ou est ma modale edit et ou est ma modale create new account. je vois le open et close de createNewAcccountModal mais pas le EDIT ?//
                        enableColumnOrdering
                        enableEditing
                        initialState={{
                            columnVisibility: {
                                id_interventionx: false,
                                /*  name_spec: false,
                                date: false,
                                quotation: false,
                                number_done: false,
                                patient_idpatient: false,
                                office_idoffice: false,*/
                            },
                        }}
                        onEditingRowSave={handleSaveRowEdits}
                        onEditingRowCancel={handleCancelRowEdits}
                        renderRowActions={({ row, table }) => (
                            <Box sx={{ display: "flex", gap: "1rem" }}>
                                <Tooltip arrow placement="left" title="Edit">
                                    <IconButton onClick={() => table.setEditingRow(row)}>
                                        <Edit />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip arrow placement="right" title="Delete">
                                    <IconButton
                                        color="error"
                                        onClick={() => handleDeleteRow(row)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        )}
                       /* renderTopToolbarCustomActions={() => (
                            <Button
                                color="secondary"
                                onClick={() => setCreateModalOpen(true)}
                                variant="contained"
                            >
                                Crer Nvlle Intervention
                            </Button>
                        )}*/
                        
                        />
                    <CreateNewAccountModal
                        columns={columns}
                        open={createModalOpen}
                        onClose={() => setCreateModalOpen(false)}
                        onSubmit={handleCreateNewRow} />
                </Box>

                <Box display="flex" justifyContent="center" mt="2rem">
                    <NavLink to="/admin/add-interventions">
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ borderRadius: "10px", marginTop: "20px" }}
                        >
                            Cliquez ici pour ajouter nouvelle intervention
                        </Button>
                    </NavLink>
                </Box>
            </Box>
        </Container>
    );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
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
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
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
      <DialogActions sx={{ p: "1.25rem" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="secondary" onClick={handleSubmit} variant="contained">
          Create New Intervention
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) => !!email.length && email.toLowerCase().match();
const validateAge = (age) => age >= 18 && age <= 50;

export default InterventionsList;
