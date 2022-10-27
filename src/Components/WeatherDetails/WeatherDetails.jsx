import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import '../WeatherDetails/WeatherDetails.css'

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <div className="WeatherDetails">
      <Typography>Viento: {wind}km/h</Typography>
      <Typography>Humedad: {humidity}%</Typography>
    </div>
  );
};

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
