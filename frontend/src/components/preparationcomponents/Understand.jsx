import React from 'react';
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

const Understand = () => {
    return (
      <Card
        sx={{
          border: "3px solid #F5D23F",
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
              fontSize: 16,
              display: "flex",
              justifyContent: "start",
              marginBottom: "48px",
            }}
          >
            Les vidéos du Dr Noailles :
          </Typography>
          <div style={{ display: "flex" }}>
            <Box>
              <CardMedia
                component="img"
                sx={{
                  borderRadius: "20px",
                  width: "140px",
                  height: "100px",
                  mr: "60px",
                }}
                image="src/assets/docexplain.png"
                alt="doctor explainig"
              />
              <Typography sx={{ mt: 1 }} variant="body2" color="text.secondary">
                Le déroulé de l&apos;opération.
              </Typography>
              <Typography sx={{ mt: 1, fontSize: 10, mr: "110px", }} variant="body2" color="text.secondary">
                3 mins
              </Typography>
            </Box>
            <Box>
              <CardMedia
                component="img"
                sx={{
                  borderRadius: "20px",
                  width: "140px",
                  height: "100px",
                  mr: "60px",
                }}
                image="src/assets/docexplain.png"
                alt="doctor explainig"
              />
              <Typography sx={{ mt: 1 }} variant="body2" color="text.secondary">
                Mon chirurgien me comprend.
              </Typography>
              <Typography sx={{ mt: 1, fontSize: 10, mr: "110px", }} variant="body2" color="text.secondary">
                2 mins
              </Typography>
            </Box>
            <Box>
              <CardMedia
                component="img"
                sx={{
                  borderRadius: "20px",
                  width: "140px",
                  height: "100px",
                  mr: "60px",
                }}
                image="src/assets/docexplain.png"
                alt="doctor explainig"
              />
              <Typography sx={{ mt: 1 }} variant="body2" color="text.secondary">
                Le déroulé de l&apos;opération.
              </Typography>
              <Typography sx={{ mt: 1, fontSize: 10, mr: "110px", }} variant="body2" color="text.secondary">
                4 mins
              </Typography>
            </Box>
          </div>
        </CardContent>
      </Card>
    );
};

export default Understand;