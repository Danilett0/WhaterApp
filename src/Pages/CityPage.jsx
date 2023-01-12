import React from "react";
import CityInfo from "../Components/CityInfo";
import Weather from "../Components/Weather";
import WeatherDetails from "../Components/WeatherDetails";
import useCityPage from "../Hooks/useCityPage";
import ForecastChart from "../Components/ForecastChart/ForecastChart";
import Forecast from "../Components/Forecast/Forecast";
import AppFrame from "../Components/AppFrame/AppFrame";
import LinearProgress from "@material-ui/core/LinearProgress";
import "moment/locale/es";
import "./main.css";

const CityPage = (props) => {
  const { city, data, forecastItemsList } = useCityPage();
  const country = "Argentina";
  const state = "clouds";
  const temperature = 20;
  const humidity = 80;
  const wind = 5;

  return (
    <AppFrame>
      <br />
      <div className="CountryAndCity">
        <Weather state={state} temperature={temperature} />
        <CityInfo city={city} country={country} />
      </div>

      <div>
        <WeatherDetails humidity={humidity} wind={wind} />
      </div>

      <div className="linear-progress">
        {
          !data && !forecastItemsList ? <LinearProgress /> : null
        }
      </div>

      <div>{data && <ForecastChart data={data} />}</div>

      <div>
        {forecastItemsList && (
          <Forecast forecastItemsList={forecastItemsList} />
        )}
      </div>
    </AppFrame>
  );
};

export default CityPage;
