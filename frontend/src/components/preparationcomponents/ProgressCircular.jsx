import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";

export default function ProgressCircular(props) {
  const [progress, setProgress] = useState(10);
  console.log(progress) // hack progress is not utilisé

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </div>
  );
}


ProgressCircular.propTypes = {
  value: PropTypes.string.isRequired, // Add the missing prop type validation
 
};