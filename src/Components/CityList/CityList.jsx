import React from "react";
import PropTypes from "prop-types";
import CityInfo from "./../CityInfo";
import Alert from "@material-ui/lab/Alert";
import Weather from "./../Weather";
import "./CityList.css";
import useCityList from "../../Hooks/useCityList";
import { getCityCode } from "./../../Utils/utils";

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
  const { AllWeather, error, setError } = useCityList(cities);

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
