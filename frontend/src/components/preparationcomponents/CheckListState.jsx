import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PropTypes from "prop-types";

export default function CheckListState(props) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prevChecked) => !prevChecked);
    props.onCheckChange(!checked);
  };

  const labelStrikOut = () => ({
    textDecoration: checked ? "line-through" : "none",
  });

  return (
    <FormControlLabel
      onClick={handleCheckboxChange}
      control={<Checkbox />}
      label={
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: "5px" }}>
              {/*               <Checkbox checked={checked} onChange={handleCheckboxChange} />
               */}{" "}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "5px" }}>{props.label1}</div>
              <div style={{ marginBottom: "5px" }}>{props.label2}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ChevronRightIcon />
            </div>
          </div>
        </>
      }
      style={labelStrikOut()}
    />
  );
}

CheckListState.propTypes = {
  label1: PropTypes.string.isRequired, // Add the missing prop type validation
  label2: PropTypes.string.isRequired,
  onCheckChange: PropTypes.func.isRequired, // Add the missing prop type validation
};
