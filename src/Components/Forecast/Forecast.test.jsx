import React from   'react'
import Forecast from './Forecast'
import {render} from '@testing-library/react'

const forecastItemsList = [
    {hour: 22, state: "clear", temperature: 17, weekDay: "lunes"},
    {hour: 12, state: "clouds", temperature: 12, weekDay: "martes"},
    {hour: 15, state: "drizzle", temperature: 16, weekDay: "miercoles"},
    {hour: 13, state: "clouds", temperature: 12, weekDay: "jueves"},
    {hour: 11, state: "rain", temperature: 12, weekDay: "Viernes"},
    {hour: 10, state: "rain", temperature: 22, weekDay: "sabado"},
]

test('Forecast render', async () =>{

// const { findAllByTestId } = render( <Forecast  forecastItemsList={forecastItemsList} /> )

// const forecastItems = await findAllByTestId("forecast-item-container")

// expect(forecastItems).toHaveLength(6)

})