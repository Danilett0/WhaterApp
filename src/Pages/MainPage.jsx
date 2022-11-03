import React from "react";
import { useHistory } from "react-router-dom";
import CityList from "../Components/CityList/CityList";
import AppFrame from "../Components/AppFrame/AppFrame";

const MainPage = (props) => {

  const history = useHistory();

  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  };

  const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    { city: "Bogota", country: "Colombia", countryCode: "CO" },
    { city: "Madrid", country: "España", countryCode: "ES"},
    { city: "Ciudad de mexico", country: "Mexico", countryCode: "MX" },
  ];

  return (
    <AppFrame>
      <br/>
      <CityList cities={cities} onClickCity={onClickHandler} />
    </AppFrame>
  );
};

export default MainPage;
