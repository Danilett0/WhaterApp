import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CityInfo from "./../CityInfo";
import Alert from "@material-ui/lab/Alert";
import convertUnits from "convert-units";
import Weather from "./../Weather";
import "./CityList.css";

const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

const renderCityAndCountry =
  (eventonClickCity) => (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry;

    return (
      <li
        className="CitiesList"
        key={getCityCode(city, countryCode)}
        onClick={() => eventonClickCity(city, countryCode)}
      >
        <CityInfo city={city} country={country} />

        <Weather
          temperature={weather && weather.temperature}
          state={weather && weather.state}
        />
      </li>
    );
  };

const CityList = ({ cities, onClickCity }) => {
  const [AllWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const appid = "1988644c6e1d994a6dca62d33fe09348";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;

      try {
        const response = await axios.get(url);
        const { data } = response;

        const temperature = Number(
          convertUnits(data.main.temp).from("K").to("C").toFixed(0)
        );
        const state = data.weather[0].main.toLowerCase();

        const propName = getCityCode(city, countryCode);
        const propValue = { temperature, state }; // {temperature: 10 , state: 'sunny' }

        setAllWeather((AllWeather) => ({
          ...AllWeather,
          [propName]: propValue,
        }));
      } catch (error) {
        if (error.response) {
          setError("Ha ocurrido un error en el servidor del clima");
        } else if (error.request) {
          setError("Por favor verifique su conexxio de internet");
        } else {
          setError("Error al cargar los datos del clima");
        }
      }
    };

    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode);
    });
  }, [cities]);

  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}

      <ul className="citys">
        {cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCountry,
            AllWeather[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </ul>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
