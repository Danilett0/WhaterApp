import { validValues } from "./../../Components/IconState";
import {getCityCode, toCelsius} from './../utils'

const getAllWeather = (response, city, countryCode) => {
  const { data } = response;

  const temperature = toCelsius(data.main.temp);
  const stateFromServer = data.weather[0].main.toLowerCase();

  const state = validValues.includes(stateFromServer) ? stateFromServer : null

  const propName = getCityCode(city, countryCode);
  const propValue = { temperature, state }; // {temperature: 10 , state: 'sunny' }

 return ({[propName]: propValue })
};

export default getAllWeather