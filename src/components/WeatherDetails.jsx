export default function WeatherDetails({ weather }) {
  return (
    <div className="weather">
      <h2>{weather.name}</h2>

      <p>🌡️ {weather.main.temp} °C</p>
      <p>🤔 Odczuwalna: {weather.main.feels_like} °C</p>
      <p>💧 Wilgotność: {weather.main.humidity}%</p>
      <p>💨 Wiatr: {weather.wind.speed} m/s</p>

      <p>☁️ {weather.weather[0].description}</p>
    </div>
  );
}