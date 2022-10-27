import React from "react";
import PropTypes from "prop-types";
import ForecasItem from "./../ForecasItem";
import { validValues } from "../IconState";
import './Forcast.css'

const renderForecastItem = (forecast) => {

  const { hour, state, temperature, weekDay } = forecast;

  return (

    <div className="item" key={`${weekDay}${hour}`}>
      <ForecasItem 
      hour={hour} 
      state={state} 
      temperature={temperature} 
      weekDay={weekDay}>

      </ForecasItem>
    </div>
  );
};

const Forecast = ({ forecastItemsList }) => {
  return (
    <div className="main-items">
      {
      forecastItemsList.map(forecast => renderForecastItem(forecast))
      }
    </div>
  );
};

Forecast.propTypes = {
  ForecastItemsList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      temperature: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validValues).isRequired,
    }).isRequired
  ),
};

export default Forecast;
