import {useState, useEffect } from "react";
import axios from "axios";
import convertUnits from "convert-units";
// import { validValues } from "../Components/IconState";
import {getCityCode} from './../Utils/utils'

const useCityList = (cities) => {

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