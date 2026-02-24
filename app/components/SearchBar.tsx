interface SearchBarPorps {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ query, setQuery, onSearch }: SearchBarPorps) {
  return (
    <div className="flex flex-row gap-4 p-6">
      <label className="input rounded-md">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <button className="btn bg-blue-500 text-white px-4 rounded-lg" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}
