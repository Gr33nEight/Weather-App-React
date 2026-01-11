import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/favoritesSlice";
import { useNavigate } from "react-router-dom";

export default function CityCard({ weather }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.temperature);
  const favorites = useSelector((state) => state.favorites);

  if (!weather) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  const temp = unit === "C"
    ? Math.round(weather.main.temp)
    : Math.round(weather.main.temp * 9/5 + 32);

  const isFavorite = favorites.includes(weather.name);

  return (
    <div
      className="city-card"
      onClick={() => navigate(`/city/${weather.name}`)}
    >
      <h2>{weather.name}</h2>

      <button
        className="favorite"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleFavorite(weather.name));
        }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        {isFavorite ? "★" : "☆"}
      </button>

      <img src={iconUrl} alt={weather.weather[0].description} style={{ width: "80px", height: "80px" }} />
      <p>{weather.weather[0].main}</p>
      <p>{temp}°{unit}</p>
      <p>💧 {weather.main.humidity}%</p>
      <p>🌬 {weather.wind.speed} m/s</p>
    </div>
  );
}