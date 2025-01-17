import useMovieContext from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites() {
  const { favoriteMovies } = useMovieContext();
  return (
    <div className="h-full w-full flex flex-col items-center gap-5 py-10">
      <h1 className="text-3xl text-verdigris active:text-verdigris hover:text-green duration-200 font-bold">
        Your Favorites
      </h1>
      {favoriteMovies.length > 0 ? (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {favoriteMovies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl">
          No Favorites. Go to the home page and add some!
        </h1>
      )}
    </div>
  );
}

export default Favorites;
