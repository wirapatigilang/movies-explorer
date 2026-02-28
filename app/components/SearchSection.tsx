"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const searchMovies = async (value: string) => {
    if (!value.trim()) {
      setMovies([]);
      setIsOpen(false);
      return;
    }

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${value}`);
    const data = await res.json();
    setMovies(data.results);
    setIsOpen(true);
  };

  const handleChange = (value: string) => {
    setQuery(value);
    searchMovies(value);
  };

  return (
    <div className="relative flex justify-center p-6">
      <div className="relative w-full max-w-xl">
        {/* Search Input */}
        <label className="input rounded-4xl w-full">
          <input
            type="search"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)} // tutup saat klik luar
            className="w-full"
          />
        </label>

        {/* Popup Result */}
        {isOpen && movies.length > 0 && (
          <div className="absolute top-12 left-0 right-0 bg-base-200 rounded-2xl shadow-xl z-50 max-h-96 overflow-y-auto">
            {movies.map((movie) => (
              <Link href={`/movies/${movie.id}`} key={movie.id}>
                <div className="flex items-center gap-4 p-3 hover:bg-base-300 cursor-pointer">
                  <img
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt={movie.title}
                    className="w-10 h-14 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold">{movie.title}</p>
                    <p className="text-sm opacity-60">{movie.release_date?.split("-")[0]}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
