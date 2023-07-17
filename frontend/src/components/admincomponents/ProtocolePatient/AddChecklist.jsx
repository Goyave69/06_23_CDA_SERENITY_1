import React from "react";
import { Container, Card, CardContent, Box, Typography} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';


const AddChecklist = () => {
  const columns = [
    { field: "patients", headerName: "Patients", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "consulter", headerName: "Consulter", width: 150 },
  ];

  const rows = [
    { id: 1, patients: "Patient 1", status: "En attente", consulter: "Ouvrir" },
    { id: 2, patients: "Patient 2", status: "Terminé", consulter: "Ouvrir" },
    { id: 3, patients: "Patient 3", status: "En cours", consulter: "Ouvrir" },
    
  ];

  return (
    <Container
      sx={{
        display: "flex",
        mt: 6,
        width: "190%",
      }}
    >
      <Card
        sx={{
          boxShadow: "2",
          borderRadius: "10px",
          mt: 5,
          width: "auto",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              backgroundColor: "#635EEC",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "medium",
                color: "white",
                mt: 2,
                mr: 25,
                ml: 2,
              }}
            >
             Verification des docs obligatoires
            </Typography>
            <div style={{ color: "white" }}>
              <p>3</p>
            </div>
          </Box>
          <div style={{ height: 340, width: "100%", marginTop: "30px"}}>
            <DataGrid columns={columns} rows={rows} />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddChecklist;