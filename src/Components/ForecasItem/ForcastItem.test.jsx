import React from 'react';
import {render} from '@testing-library/react'
import ForecastItem from './Forecastitem';

test('ForecastItem Render', async () => {

    const { findByText } = render(<ForecastItem hour={10} state='clear' temperature={23} weekDay='Lunes' />)

    const hour = await findByText(/10/)
    // const state = await findByText(/sunny/)
    const temperature = await findByText(/23/)
    const weekDay = await findByText(/Lunes/)

    expect(hour).toHaveTextContent("10")
    // expect(state).toHaveTextContent("sunny")
    expect(temperature).toHaveTextContent("23")
    expect(weekDay).toHaveTextContent("Lunes")
})