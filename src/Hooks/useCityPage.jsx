import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "moment/locale/es";
import { getForecastUrl } from "./../Utils/urls";
import getCharData from "../Utils/Transform/getChartData";
import getForecastItemList from "../Utils/Transform/getForecastItemList";

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

        const forecastItemsListAux = getForecastItemList(data)

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
