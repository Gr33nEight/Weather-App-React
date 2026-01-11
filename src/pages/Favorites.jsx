import { useSelector } from "react-redux";
import CityCard from "../components/CityCard";

export default function Favorites() {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      <h1>Ulubione miasta</h1>
      {favorites.map(name => (
        <CityCard key={name} city={{ name }} />
      ))}
    </div>
  );
}