import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const BreathingCircle = ({ onStartStopAnimation }) => {
  const [isInhale, setIsInhale] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let interval;

    if (isAnimating) {
      interval = setInterval(() => {
        setIsInhale((prevIsInhale) => !prevIsInhale);
      }, 4000); // Temps total d'une respiration (expiration + inspiration) en millisecondes
    }

    return () => {
      clearInterval(interval);
    };
  }, [isAnimating]);

  const handleToggleAnimation = () => {
    setIsAnimating((prevIsAnimating) => !prevIsAnimating);
    onStartStopAnimation(); // Notify the parent component that the animation has started/stopped
  };


  const circleVariants = {
    inhale: {
      scale: 1.2,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
    exhale: {
      scale: 0.6,
      opacity: 0.5,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const circleStyle = {
    marginLeft: "375px",
    width: 200,
    height: 200,
    backgroundColor: "#03003C",
    borderRadius: "50%",
  };

  return (
    <Card
      sx={{
        border: "3px solid #F8749F",
        marginTop: "40px",
        backgroundColor: "#F5F5F5",
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ marginBottom: "50px", marginTop: "30px" }}
        >
          Resynchronisez-vous avec votre coprs
        </Typography>
        <motion.div
          style={circleStyle}
          variants={circleVariants}
          initial={isInhale ? "inhale" : "exhale"}
          animate={isInhale ? "inhale" : "exhale"}
        >
          {isInhale ? (
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "#FFF",
              }}
            >
              Inhale
            </Typography>
          ) : (
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "#FFF",
              }}
            >
              Exhale
            </Typography>
          )}
        </motion.div>
        <Button
          variant="contained"
          onClick={handleToggleAnimation}
          sx={{
            backgroundColor: "#F8749F",
            borderRadius: "20px",
            marginTop: "40px",
          }}
        >
          {isAnimating ? "Arrêter" : "Démarrer"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BreathingCircle;
