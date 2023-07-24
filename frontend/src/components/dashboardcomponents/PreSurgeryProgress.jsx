import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ mt: 13}}>
      <Typography variant="body2"  sx={{ color:"black", mb:"10px", display:"flex"}}>
       Préparation pour ma chirurgie :
      </Typography>
      <Box sx={{ width: '230px', mr: 1,}}>
        <LinearProgress variant="determinate" {...props} sx={{ height: "40px", borderRadius: "16px", color: "root" }} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          color="#4C5980"
          sx={{ fontWeight: "bold", mr:"100px",  }}
        >{`${Math.round(props.value)}%`}</Typography>
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
