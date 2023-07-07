import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
              fontSize: 14,
              display: "flex",
              justifyContent: "start",
              marginBottom: "48px",
            }}
          >
            Les vidéos du Dr Noailles
          </Typography>
          <CardMedia
            component="img"
            sx={{borderRadius: "20px",width: "140px", height:"100px" }}
            image="src/assets/docexplain.png"
            alt="doctor explainig"
          />
          <CardMedia
            component="img"
            sx={{borderRadius: "20px",width: "140px", height:"100px" }}
            image="src/assets/docexplain.png"
            alt="doctor explainig"
          />
          <CardMedia
            component="img"
            sx={{borderRadius: "20px",width: "140px", height:"100px" }}
            image="src/assets/docexplain.png"
            alt="doctor explainig"
          />
        </CardContent>
      </Card>
    );
};

export default Understand;
