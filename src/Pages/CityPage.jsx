import React, { useEffect, useState } from "react";
import CityInfo from "../Components/CityInfo";
import Weather from "../Components/Weather";
import WeatherDetails from "../Components/WeatherDetails";
import ForecastChart from "../Components/ForecastChart/ForecastChart";
import Forecast from "../Components/Forecast/Forecast";
import AppFrame from "../Components/AppFrame/AppFrame";
import { useParams } from "react-router-dom";
import "./main.css";

const forecastItemsListExample = [
  { hour: 18, state: "clear", temperature: 17, weekDay: "Jueves" },
  { hour: 28, state: "clouds", temperature: 12, weekDay: "Viernes" },
  { hour: 38, state: "drizzle", temperature: 16, weekDay: "Sabado" },
  { hour: 48, state: "rain", temperature: 22, weekDay: "Domingo" },
];

const dataExample = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayHour: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayHour: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayHour: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayHour: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayHour: "Sab 12",
    min: 12,
    max: 19,
  },
];

const CityPage = (props) => {
  const city = "Buenos Aires";
  const country = "Argentina";
  const state = "clouds";
  const temperature = 20;
  const humidity = 80;
  const wind = 5;

  const [data, setData] = useState(null);
  const [forecastItemsList, setForecastItemsList] = useState(null);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    setData(dataExample);
    setForecastItemsList(forecastItemsListExample);
  }, [data, forecastItemsList]);

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
