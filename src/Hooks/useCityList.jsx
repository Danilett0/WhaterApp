import {useState, useEffect } from "react";
import axios from "axios";
// import { validValues } from "../Components/IconState";
import {getCityCode, toCelsius} from './../Utils/utils'
import {getWeatherUrl} from './../Utils/urls'

const useCityList = (cities) => {

    const [AllWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const setWeather = async (city, countryCode) => {

        const url = getWeatherUrl({city, countryCode});
        
        try {
          const response = await axios.get(url);
          const { data } = response;
          
          const temperature = toCelsius(data.main.temp);
          const state = data.weather[0].main.toLowerCase();

          const propName =  getCityCode(city, countryCode);
          const propValue = { temperature, state }; // {temperature: 10 , state: 'sunny' }
  
          setAllWeather((AllWeather) => ({
            ...AllWeather, [propName]: propValue,
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
  
    return {AllWeather, error, setError}
  
  }



export default useCityList