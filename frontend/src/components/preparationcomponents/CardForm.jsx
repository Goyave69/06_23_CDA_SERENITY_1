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
        top: "-10px",
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
        position: "absolute",
        left: "25%",
        right: "63.75%",
        top: "23.93%",
        bottom: "57%",
        border: "3px solid #47CACF",
      }}
    >
      <CardContent>
        <div
          sx={{
            position: "absolute",
            width: 65,
            height: 65,
            right: 56,
            top: "calc(50% - 65px/2 - 28px)",
          }}
        >
          <CircularProgressWithLabel
            value={57}
            size={65}
            sx={{ color: "#47CACF" }}
          />

          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              position: "absolute",
              left: "47%",
              top: "75%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              fontSize: "10px",
              fontWeight: "Medium",
            }}
          >
            Se débarasser des formalitées administrative
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCardForm;
