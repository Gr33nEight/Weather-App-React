import { useSelector } from "react-redux";

export default function FavoriteStar({ cityId }) {
  // upewnij się, że zawsze dostajesz tablicę
  const favorites = useSelector(state => state.favorites) || [];

  const isFavorite = favorites.includes(cityId);

  return (
    <span>{isFavorite ? "★" : "☆"}</span>
  );
}