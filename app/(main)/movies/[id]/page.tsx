"use client";

import Breadcrumbs from "@/app/components/Breadcrumbs";
import RatingSection from "@/app/components/RatingSection";
import { useState, useEffect } from "react";
import React from "react";

export default function MoviesDetail({ params }: { params: { id: string } }) {
  const { id: movieId } = React.use(params);
  const [moviesData, setMoviesData] = useState<any>(null);
  const [moviesRating, setMoviesRating] = useState<any>(null);

  useEffect(() => {
    const getMoviesData = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
      const data = await res.json();
      setMoviesData(data);
    };

    getMoviesData();
  }, [movieId]);

  useEffect(() => {
    const getMoviesRating = async () => {
      const res = await fetch(`/api/rate?tmdbId=${movieId}`);
      const data = await res.json();
      setMoviesRating(data);
    };

    getMoviesRating();
  }, [movieId]);

  if (!moviesData) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <div className="p-6">
        <h1 className="text-3xl font-bold">{moviesData.title}</h1>

        <p className="mt-4">{moviesData.overview}</p>
      </div>
      <p>Rating: {moviesRating?.avg > 0 ? moviesRating.avg.toFixed(1) : "Belum ada rating"}</p>
      <RatingSection movieId={moviesData.id}></RatingSection>
    </>
  );
}
