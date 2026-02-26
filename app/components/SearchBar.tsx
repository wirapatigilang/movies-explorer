interface SearchBarPorps {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ query, setQuery, onSearch }: SearchBarPorps) {
  return (
    <div className="flex align-middle gap-4 p-6 justify-center items-center">
      <label className="input rounded-4xl">
        <input type="search" required placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} onClick={onSearch} className=""/>
      </label>
    </div>

  );
}
