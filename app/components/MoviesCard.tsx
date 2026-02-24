"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


export default function MoviesCard() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const showAllMovies = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
      const data = await res.json();
      setMovies(data.results);
    };

    showAllMovies();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4 mx-14">
      {movies.map((movie) => (
        <div className="relative w-[300px] rounded-xl overflow-hidden">
          <Link href={`/movies/${movie.id}`}>
            {/* Poster */}
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-md" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Concent */}
            <div className="absolute bottom-0 p-4 text-white">
              <h2 className="text-xl font-bold">{movie.title}</h2>

              <div className="flex flex-col gap-2">
                <div className="badge badge-sm badge-outline badge-info">{movie.release_date.slice(0, 4)}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
