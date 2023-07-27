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
      <Typography
        variant="body2"
        sx={{ color: "black", mb: "10px", display: "flex", mt: 2 }}
      >
        Comprendre mon opération :
        <Typography
          variant="body2"
          color="#4C5980"
          sx={{ fontWeight: "bold" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Typography>
      <Box sx={{ width: "230px", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: "40px", borderRadius: "16px", color: "root" }}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "black", mb: "10px", display: "flex", mt: 2 }}
      >
        Finir les démarches administratives :
        <Typography
          variant="body2"
          color="#4C5980"
          sx={{ fontWeight: "bold" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Typography>
      <Box sx={{ width: "230px", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: "40px", borderRadius: "16px", color: "root" }}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "black", mb: "10px", display: "flex", mt: 2 }}
      >
        Préparer mon arrivée en tout sérénité :
        <Typography
          variant="body2"
          color="#4C5980"
          sx={{ fontWeight: "bold" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Typography>
      <Box sx={{ width: "230px", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: "40px", borderRadius: "16px", color: "root" }}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "black", mb: "10px", display: "flex", mt: 2 }}
      >
        Anticiper ma sortie :
        <Typography
          variant="body2"
          color="#4C5980"
          sx={{ fontWeight: "bold" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Typography>
      <Box sx={{ width: "230px", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: "40px", borderRadius: "16px", color: "root" }}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "black", mb: "10px", display: "flex", mt: 2 }}
      >
        Ma checklist avangt le départ à la Clinique :
        <Typography
          variant="body2"
          color="#4C5980"
          sx={{ fontWeight: "bold" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Typography>
      <Box sx={{ width: "230px", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: "40px", borderRadius: "16px", color: "root" }}
        />
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
