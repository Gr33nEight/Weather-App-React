import axios from "axios";

const API_KEY = "0eed517fa49e8db66c513be3cba1e63b";

export async function fetchWeather(city) {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    { params: { q: city, units: "metric", appid: API_KEY, lang: "pl"} }
  );
  return res.data;
}