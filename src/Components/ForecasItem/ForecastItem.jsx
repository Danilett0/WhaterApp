import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { IconContext } from "react-icons";
import IconState , {validValues} from '../IconState';

const ForecastItem = ({ hour, state, temperature, weekDay }) => {

  return (
    <div className="main-items">
      
      <div className="item">
        <Typography> {hour}</Typography>
      </div>

      <div className="item">
        <IconContext.Provider value={{ size: "40px" }}>
        <IconState state={ state } />
        </IconContext.Provider>
      </div>

      <div className="item">
        <Typography> {temperature}</Typography>
      </div>

      <div className="item">
        <Typography> {weekDay}</Typography>
      </div>

    </div>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired
};

export default ForecastItem;
