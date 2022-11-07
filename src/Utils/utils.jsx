import convertUnits from "convert-units";


// funcion personalizada que retorna ciudad y su codigo correspondiente
export const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

export const toCelsius = (temp) => Number(convertUnits(temp).from("K").to("C").toFixed(0));
