async function getFeaturedMovie() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
  const data = await res.json();
  return data.results[0];
}

export default async function Hero() {
  const movie = await getFeaturedMovie();

  return (
    <div className="hero min-h-128 min-w-64 bg-base rounded-2xl">
      <div className="w-256 bg-base-300 rounded-2xl shadow-gray-200">
        <div className="hero-content flex-col lg:flex-row max-w-3xl gap-24">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.id} className="max-w-54 rounded-2xl" />
          <div>
            <h1 className="text-5xl font-black">Top 1 Movie 2026</h1>
            <div className="py-6">
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <p className="text-gray-500">{movie.overview}</p>
            </div>
            <button className="btn btn-outline btn-primary">Search More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
