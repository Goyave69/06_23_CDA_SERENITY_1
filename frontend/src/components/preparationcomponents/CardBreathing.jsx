import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularProgressWithLabel = ({value}) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: "55px",
        ml: "29px",
      }}
    >
      <CircularProgress variant="determinate" />
      <Box
        sx={{
          top: "50%",
          left: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" component="div" color="text.secondary">
          {`${Math.round(value.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};
CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const CardBreathing = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: "#F5F5F5",
        borderRadius: "20px",
        position: "relative",
        width: "100",
        ml: "56px",
        padding: "45px",
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid #F8749F",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "55%",
              marginLeft: "95%",
              transform: "translate(-95%, -95%)",
            }}
          >
            <CircularProgressWithLabel
              value={62}
              size={65}
              sx={{ color: "#F8749F" }}
            />

            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                position: "absolute",
                left: "47px",
                top: "79px",
                margin: "10px",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                fontSize: "10px",
                fontWeight: "Medium",
              }}
            >
              Resynchronisez-vous avec votre corps
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};


CardBreathing.propTypes = {
  onClick: PropTypes.func.isRequired,
};


export default CardBreathing;
