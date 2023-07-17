import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const CardProtocole = ({ handleClick }) => {

    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          mt:6,
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
              <Typography sx={{ fontWeight: "medium" }}>
                Protocole Serenity
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "3rem",
                borderRadius: "10px",
                backgroundColor: "#F3D03D",
                height: "60px",
              }}
              onClick={() => handleClick("understand")} 
            >
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "11rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "white",
                    mt: 1,
                  }}
                >
                  Comprendre mon operation
                </Typography>
              </div>
              <div style={{ color: "white" }}>
                <p>10</p>
              </div>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "1rem",
                borderRadius: "10px",
                backgroundColor: "#4AD1B7",
                height: "60px",
              }}
              onClick={() => handleClick("appointment")}
            >
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "11rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "white",
                    mt: 1,
                  }}
                >
                  Finir les démarches administratives
                </Typography>
              </div>
              <div style={{ color: "white" }}>
                <p>3</p>
              </div>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "1rem",
                borderRadius: "10px",
                backgroundColor: "#BAEA64",
                height: "60px",
              }}
              onClick={() => handleClick("appointment")}
            >
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "11rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "white",
                    mt: 1.5,
                  }}
                >
                  Anticiper ma sortie
                </Typography>
              </div>
              <div style={{ color: "white" }}>
                <p>12</p>
              </div>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "1rem",
                borderRadius: "10px",
                backgroundColor: "#635EEC",
                height: "60px",
              }}
              onClick={handleClick}
            >
              <div
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "14rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "white",
                    mt: 1,
                    ml: "10px",
                  }}
                >
                  Ma checklist avant de quitter la maison
                </Typography>
              </div>
            </Box>

            <Box display="flex" justifyContent="center" mt="0.5rem" mb="2.5rem">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  marginTop: "20px",
                  backgroundColor: "black",
                  height: "45px",
                }}
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