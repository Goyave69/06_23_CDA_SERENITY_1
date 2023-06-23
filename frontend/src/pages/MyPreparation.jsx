import React from "react";
import CardUnderstand from "@components/preparationcomponents/CardUnderstand";
import CardForm from "@components/preparationcomponents/CardForm";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export default function MyPreparation() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <CardUnderstand />
        </Grid>
        <Grid item xs={2}>
          <CardForm />
        </Grid>
      </Grid>
    </Box>
  );
}
