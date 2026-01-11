import { useState, useCallback } from "react";
import CityList from "../components/CityList";
import SearchForm from "../components/SearchForm";
import TemperatureSwitcher from "../components/TemperatureSwitcher";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = useCallback((value) => {
    setQuery(value);
  }, []);

  return (
    <div>
      <h1>Prognoza pogody</h1>
      <TemperatureSwitcher />
      <SearchForm onSearch={handleSearch} />
      {/* <CityList query={query} /> */}
    </div>
  );
}