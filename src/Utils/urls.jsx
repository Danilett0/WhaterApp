const appid = "1988644c6e1d994a6dca62d33fe09348";

export const getWeatherUrl = ({city, countryCode}) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;

export const getForecastUrl = ({city, countryCode}) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`;