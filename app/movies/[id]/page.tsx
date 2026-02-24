import Breadcrumbs from "@/app/components/Breadcrumbs";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MoviesDetail({ params }: Props) {
  const { id } = await params;

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
  const movie = await res.json();

  console.log("Movies Data: ", movie);

  return (
    <>
    <Breadcrumbs></Breadcrumbs>
      <div className="p-6">
        <h1 className=" text-3xl font-bold">{movie.title}</h1>
        <p className="mt-4">{movie.overview}</p>
      </div>
    </>
  );
}
