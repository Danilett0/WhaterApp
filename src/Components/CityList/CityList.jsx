import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CityInfo from "./../CityInfo";
import Alert from "@material-ui/lab/Alert";
import convertUnits from "convert-units";
import Weather from "./../Weather";
import "./CityList.css";

const renderCityAndCountry =
  (eventonClickCity) => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry;
    // const { temperature, state } = weather;

    return (
      <li className="CitiesList" key={city} onClick={eventonClickCity}>
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

  // realizo el consumo
  useEffect(() => {
    const setWeather = (city, country, countryCode) => {
      const appid = "1988644c6e1d994a6dca62d33fe09348";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;

      axios
        .get(url)
        .then((response) => {
          const { data } = response;
          const temperature = Number(
            convertUnits(data.main.temp).from("K").to("C").toFixed(0)
          );
          const state = data.weather[0].main.toLowerCase();

          const propName = `${city} - ${country}`; // ['Buenos aires - argentina']
          const propValue = { temperature, state }; // {temperature: 10 , state: 'sunny' }

          setAllWeather((AllWeather) => ({
            ...AllWeather,
            [propName]: propValue,
          }));
        })
        .catch((error) => {
          if (error.response) {
            const { data, status } = error.response;
            console.log(
              "mi servidor me respondio un error:",
              data.message,
              status
            );
            setError("Ha ocurrido un error en el servidor del clima");
          } else if (error.request) {
            console.log(
              "servidor no disponible o no hay conexxio de internet "
            );
            setError("Por favor verifique su conexxio de internet");
          } else {
            console.log("errores imprevistos");
            setError("Error al cargar los datos del clima");
          }
        });
    };

    // realizo destructuring de las propiedades del objeto
    cities.forEach(({ city, country, countryCode }) => {
      setWeather(city, country, countryCode);
    });
  }, [cities]); // array de dependencias

  return (
    <div>
      
      {error && <Alert severity="error"> {error} </Alert> }

      <ul className="citys"> {cities.map((cityAndCountry) => 
        renderCityAndCountry(onClickCity)( 
        cityAndCountry, AllWeather[`${cityAndCountry.city} - ${cityAndCountry.country}`] ) )}
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
