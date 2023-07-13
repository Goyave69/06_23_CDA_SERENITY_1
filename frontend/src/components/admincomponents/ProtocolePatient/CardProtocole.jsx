import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const CardProtocole = () => {
    return (
        <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          
        }}
      >
        <Card
        sx={{
          marginTop: "40px",
          backgroundColor: "#F5F5F5",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "end",
         
        }}
      >
        <CardContent>
          <Box>
            <Typography>
            Protocole Serenity
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" mt="2rem">
            <Button
              variant="contained"
              sx={{ borderRadius: "10px", marginTop: "20px", backgroundColor:"#F3D03D" }}
            >
              INFOS OPERATIONS
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" mt="0.2rem">
            <Button
              variant="contained"
              sx={{ borderRadius: "10px", marginTop: "20px", backgroundColor:"#4AD1B7" }}
            >
              INFOS OPERATIONS
            </Button>
          </Box>

          <Box display="flex" justifyContent="center" mt="2rem">
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: "10px", marginTop: "20px" }}
            >
              Add More
            </Button>
          </Box>
        </CardContent>
      </Card>
      </Container>

    );
};

export default CardProtocole;