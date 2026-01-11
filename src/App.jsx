import { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { cities } from "./data/cities";
import { fetchWeather } from "./services/weatherApi";
import CityCard from "./components/CityCard";
import UnitSwitcher from "./components/UnitSwitcher";
import CityPage from "./pages/CityPage";

export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    cities.forEach(async (city) => {
      const data = await fetchWeather(city.name);
      setWeatherData(prev => ({ ...prev, [city.name]: data }));
    });
  }, []);

  const filteredCities = useMemo(
    () => cities.filter(city => city.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="app" style={{ textAlign: "center", padding: "20px" }}>
            <h1>Weather Dashboard</h1>
            <UnitSwitcher />
            <input
              type="text"
              placeholder="Szukaj miasta..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginBottom: "20px",
                width: "200px",
                fontSize: "16px",
              }}
            />
            <div className="city-grid" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
              {filteredCities.map(city => (
                <CityCard
                  key={city.name}
                  weather={weatherData[city.name]}
                  cityName={city.name}
                />
              ))}
            </div>
          </div>
        } />

        <Route path="/city/:cityName" element={<CityPage weatherData={weatherData} />} />
      </Routes>
    </BrowserRouter>
  );
}