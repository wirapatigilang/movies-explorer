"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "./components/SearchBar";
import MoviesCard from "./components/MoviesCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);

  const searchMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query}`);
    const data = await res.json();
    setMovies(data.results);
    console.log(data);
  };

  return (
    <>
      <SearchBar onSearch={searchMovies} query={query} setQuery={setQuery}></SearchBar>
      <MoviesCard></MoviesCard>
    </>
  );
}
