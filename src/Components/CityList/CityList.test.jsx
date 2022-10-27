import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import CityList from './CityList'


const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city: "Bogota", country: "Colombia", countryCode: "CO" },
    { city: "Madrid", country: "España", countryCode: "ES"},
    { city: "Ciudad de mexico", country: "Mexico", countryCode: "MX" },
  ];

test("CityList render", async () => {

    const {findAllByRole} = await render( <CityList cities={cities} onClickCity={()=>{}} />)

    const items = await findAllByRole("button")
    
    expect(items).toHaveLength(4)
})


test("CityList click on item", async () => {

    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("listitem");

    fireEvent.click(items[0]);

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})