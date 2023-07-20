import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReactPlayer from 'react-player'


const AddUnderstand = () => {
    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          mt: 6,
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
                backgroundColor: "#F3D03D",
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
                Comprendre mon operation
              </Typography>
              <div style={{ color: "white" }}>
                <p>10</p>
              </div>
            </Box>

            <div style={{ display: "flex", justifyContent: "column" }}>
              <Grid
                sx={{
                  mt: 4,
                  borderRadius: "10px",
                  backgroundColor: "#F3D03D",
                  width: "130px",
                  height: "120px",
                  padding: "20px",
                }}
              ></Grid>
              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  borderRadius: "10px",
                  backgroundColor: "#F5F5F5",
                  boxShadow: "none",
                  width: "130px",
                  height: "120px",
                  padding: "20px",
                  ml: 4,
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                  },
                }}
              >
                <Typography sx={{ color: "#696A70", fontSize: "11px" }}>
                  {" "}
                  Ajouter{" "}
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  borderRadius: "10px",
                  backgroundColor: "#F5F5F5",
                  boxShadow: "none",
                  width: "130px",
                  height: "120px",
                  padding: "20px",
                  ml: 4,
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                  },
                }}
              >
                <Typography sx={{ color: "#696A70", fontSize: "11px" }}>
                  {" "}
                  Ajouter{" "}
                </Typography>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    );
};

export default AddUnderstand;