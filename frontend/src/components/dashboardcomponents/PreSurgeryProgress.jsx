import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        variant="body2"
        sx={{ color: "black", mb: "10px", display: "flex" }}
      >
        Préparation pour ma chirurgie :
      </Typography>
      <Box sx={{ width: "230px", mr: 1 }}>
        <Typography
          variant="body2"
          color="#4C5980"
          sx={{ fontWeight: "bold" }}
        >{`${Math.round(props.value)}%`}</Typography>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: "40px", borderRadius: "16px", color: "root" }}
        />
      </Box>

      <Box
        sx={{
          width: "270px",
          display: "flex",
          justifyContent: "center",
          mt: "90px",
          borderRadius: "12px",
          backgroundColor: "#F3D03D",
          height: "50px",
        }}
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
              fontSize: "13px",
              color: "white",
              mt: 0.5,
              mr: 4,
            }}
          >
           Comprendre mon opération
          </Typography>
        </div>
        <div style={{ color: "white" }}>
          <p>1/3</p>
        </div>
      </Box>

      <Box
        sx={{
          width: "270px",
          display: "flex",
          justifyContent: "center",
          mt: "1rem",
          borderRadius: "12px",
          backgroundColor: "#4AD1B7",
          height: "50px",
        }}
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
              fontSize: "13px",
              color: "white",
              mt: 0.5,
              mr: 4,
            }}
          >
            Consultation des fiches administratives
          </Typography>
        </div>
        <div style={{ color: "white" }}>
          <p>3/5</p>
        </div>
      </Box>


      <Box
        sx={{
          width: "270px",
          display: "flex",
          justifyContent: "center",
          mt: "1rem",
          borderRadius: "12px",
          backgroundColor: "#F8749F",
          height: "50px",
        }}
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
              fontSize: "13px",
              color: "white",
              mt: 0.5,
              mr: 4,
            }}
          >
           Resynchronisez-vous avec votre coprs
          </Typography>
        </div>
        <div style={{ color: "white" }}>
          <p>1/1</p>
        </div>
      </Box>



      <Box
        sx={{
          width: "270px",
          display: "flex",
          justifyContent: "center",
          mt: "1rem",
          borderRadius: "12px",
          backgroundColor: "#66E47A",
          height: "50px",
        }}
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
              fontSize: "13px",
              color: "white",
              mt: 0.5,
              mr: 4,
            }}
          >
            Anticiper ma sortie
          </Typography>
        </div>
        <div style={{ color: "white" }}>
          <p>1/3</p>
        </div>
      </Box>


      <Box
        sx={{
          width: "270px",
          display: "flex",
          justifyContent: "center",
          mt: "1rem",
          borderRadius: "12px",
          backgroundColor: "#8D77F0",
          height: "50px",
        }}
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
              fontSize: "13px",
              color: "white",
              mt: 0.5,
              mr: 4,
            }}
          >
           Ma check-list avant le départ à la Clinique
          </Typography>
        </div>
        <div style={{ color: "white" }}>
          <p>4/7</p>
        </div>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const progress = 70; // Valeur de progression souhaitée (peut être un nombre entre 0 et 100)

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} sx={{ color: "#AF8EFF" }} />
    </Box>
  );
}
