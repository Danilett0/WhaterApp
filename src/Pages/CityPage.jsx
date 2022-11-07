import React, { useEffect, useState } from "react";
import CityInfo from "../Components/CityInfo";
import Weather from "../Components/Weather";
import WeatherDetails from "../Components/WeatherDetails";
import ForecastChart from "../Components/ForecastChart/ForecastChart";
import Forecast from "../Components/Forecast/Forecast";
import AppFrame from "../Components/AppFrame/AppFrame";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import convertUnits from "convert-units";
import "./main.css";

const CityPage = (props) => {
  const country = "Argentina";
  const state = "clouds";
  const temperature = 20;
  const humidity = 80;
  const wind = 5;

  const [data, setData] = useState(null);
  const [forecastItemsList, setForecastItemsList] = useState(null);

  const { city, countryCode } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      const appid = "1988644c6e1d994a6dca62d33fe09348";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`;

      try {
        const { data } = await axios.get(url);

        const toCelsius = (temp) =>
          Number(convertUnits(temp).from("K").to("C").toFixed(0));

        const daysAhead = [0, 1, 2, 3, 4];
        const days = daysAhead.map((d) => moment().add(d, "d"));

        const dataAux = days.map((day) => {
          const tempObjArray = data.list.filter((item) => {
            const dayOfYear = moment.unix(item.dt).dayOfYear();
            return dayOfYear === day.dayOfYear();
          });

          const temps = tempObjArray.map((item) => item.main.temp);

          return {
            dayHour: day.format("ddd"),
            min: toCelsius(Math.min(...temps)),
            max: toCelsius(Math.max(...temps)),
          };
        });

        setData(dataAux);

        const interval = [4, 8, 12, 16, 20, 24];
        const forecastItemsListAux = data.list
          .filter((item, index) => interval.includes(index))
          .map((item) => {
            return {
              hour: moment.unix(item.dt).hour(),
              weekDay: moment.unix(item.dt).format("dddd"),
              state: item.weather[0].main.toLowerCase(),
              temperature: toCelsius(item.main.temp),
            };
          });

        setForecastItemsList(forecastItemsListAux);
      } catch (error) {
        console.log(error);
      }
    };

    getForecast();
  }, [city, countryCode]);

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
