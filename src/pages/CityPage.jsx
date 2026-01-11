import { useParams, useNavigate } from "react-router-dom";

export default function CityPage({ weatherData }) {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const weather = weatherData[cityName];

  if (!weather) return <p style={{ textAlign: "center", marginTop: "50px" }}>Ładowanie...</p>;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      textAlign: "center",
      padding: "20px",
      background: "linear-gradient(135deg, #0A4D68, #8eafd5)",
      color: "white"
    }}>
      <button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          background: "white",
          color: "#4a90e2",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ← Wróć
      </button>

      <h1>{weather.name}</h1>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <p>{weather.weather[0].main}</p>
      <p>🌡 {Math.round(weather.main.temp)}°C</p>
      <p>💧 {weather.main.humidity}%</p>
      <p>🌬 {weather.wind.speed} m/s</p>
    </div>
  );
}