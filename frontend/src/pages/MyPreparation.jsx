import CardUnderstand from "@components/preparationcomponents/CardUnderstand";
import CardForm from "@components/preparationcomponents/CardForm";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export default function MyPreparation() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <CardForm />
        </Grid>
        <Grid item xs={6}>
          <CardUnderstand />
        </Grid>
      </Grid>
    </Box>
  );
}
