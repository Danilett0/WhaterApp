import React from 'react';
import Forecast from './Forecast';

export default {
    title: 'Forecast',
    component: Forecast
}

const forecastItemsList = [
    {hour: 22, state: "clear", temperature: 17, weekDay: "lunes"},
    {hour: 12, state: "clouds", temperature: 12, weekDay: "martes"},
    {hour: 15, state: "drizzle", temperature: 16, weekDay: "miercoles"},
    {hour: 13, state: "clouds", temperature: 12, weekDay: "jueves"},
    {hour: 11, state: "rain", temperature: 12, weekDay: "Viernes"},
    {hour: 11, state: "rain", temperature: 22, weekDay: "sabado"}
];

export const  ForecastExample = () => ( <Forecast forecastItemsList={forecastItemsList} />)