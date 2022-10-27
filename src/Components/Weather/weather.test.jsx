import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'


test("whather render", async () => {

    const temperature = 10;
    const state = "clear";
   
    // renderiza el component y retorna resultado
    const { findAllByRole } = render(<Weather temperature={temperature} state={state} />);

    // se realiza prueba con lo que retorna
    const WeatherTemp = await findAllByRole("heading");

    // se comprueba si el resultado es lo que se estaraba
    expect(WeatherTemp[0]).toHaveTextContent(10);

})