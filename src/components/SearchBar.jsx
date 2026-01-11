export default function SearchForm({ onSearch }) {
    return (
      <input
        placeholder="Wpisz miasto..."
        onChange={e => onSearch(e.target.value)}
      />
    );
  }