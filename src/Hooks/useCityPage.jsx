import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import { getForecastUrl } from "./../Utils/urls";
import { toCelsius } from "./../Utils/utils";
import getCharData from "../Utils/Transform/getChartData";

export const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemsList, setForecastItemsList] = useState(null);
  const { city, countryCode } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      
      const url = getForecastUrl({city, countryCode});

      try {
        const { data } = await axios.get(url);
        
       const dataAux = getCharData(data);

        setChartData(dataAux);

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

  return { city, data: chartData, forecastItemsList };
};

export default useCityPage;
