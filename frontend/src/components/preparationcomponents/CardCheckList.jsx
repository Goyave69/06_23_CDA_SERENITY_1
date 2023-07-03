import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularProgressWithLabel = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: "55px",
        ml:"29px"
      }}
    >
      <CircularProgress variant="determinate" {...props} />
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
          {`${Math.round(props.value)}%`}
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

const CustomCardForm = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#F5F5F5",
        borderRadius: "20px",
        position: "relative",
        width:"100",
        ml: "16px",
        padding: "45px",
        marginTop:"100px",
        border: "3px solid #8D77F0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid #8D77F0",
      }}
     >
      <CardContent>
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "10%",
            left: "10%",
            transform: "translate(-10%, -10%)",
          }}
        >
          <CircularProgressWithLabel
            value={62}
            size={65}
            sx={{ color: "#8D77F0" }}
          />

          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              position: "absolute",
              left: "47px",
              top: "79px",
              margin:"10px",
              transform: "translate(-50%, -50%)",
              fontSize: "10px",
              fontWeight: "Medium",
            }}
          >
           Ma check list avant de quitter la maison
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCardForm;