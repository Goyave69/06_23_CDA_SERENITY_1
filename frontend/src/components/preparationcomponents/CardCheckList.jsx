import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useProgress } from "../../context/ProgressContext";

const CircularProgressWithLabel = () => {
  const { progress } = useProgress();

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: "55px",
        ml: "40px",
      }}
    >
      <CircularProgress variant="determinate" value={progress} />
      <Box
        sx={{
          top: "50%",
          left: "35%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" component="div" color="text.secondary">
          {`${Math.round(progress)}%`}
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

const CardCheckList = ({ onClick, progress }) => {
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
        padding: "55px",
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid #8D77F0",
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
              value={progress}
              size={65}
              sx={{ color: "#8D77F0"}}
            />

            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                position: "absolute",
                left: "47px",
                top: "51px",
                margin: "10px",
                transform: "translate(-50%, -50%)",
                fontSize: "10px",
                fontWeight: "Medium",
              }}
            >
              Ma checklist
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CardCheckList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CardCheckList;
