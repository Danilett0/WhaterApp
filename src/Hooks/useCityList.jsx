import {useState, useEffect } from "react";
import axios from "axios";
import {getWeatherUrl} from './../Utils/urls'
import getAllWeather from "../Utils/Transform/getAllWeather";

const useCityList = (cities) => {

    const [AllWeather, setAllWeather] = useState({});
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const setWeather = async (city, countryCode) => {

        const url = getWeatherUrl({city, countryCode});
        
        try {
          const response = await axios.get(url);
       
          const AllWeatherAux = getAllWeather(response, city, countryCode);

          setAllWeather((AllWeather) => ({ ...AllWeather, ...AllWeatherAux, }));
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