import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


export default function Appointment() {
  return (
    <Card
        sx={{
          border: "3px solid #66E47A",
          marginTop: "40px",
          backgroundColor: "#F5F5F5",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: 14,
              display: "flex",
              justifyContent: "start",
              marginBottom: "48px",
            }}
          >
            Les Rendez-vous disponible
          </Typography>
          
        </CardContent>
      </Card>
  );
}
