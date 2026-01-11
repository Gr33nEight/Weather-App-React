import CityCard from "./CityCard";

export default function CityList() {
  return (
    <div>
      {CITIES.map(city => (
        <CityCard key={city} city={city} />
      ))}
    </div>
  );
}