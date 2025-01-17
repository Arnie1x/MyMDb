import "../styles/MovieCard.css";
import useMovieContext from "../contexts/MovieContext";
function MovieCard({ movie }: { movie: Movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  let favorite = isFavorite(movie);

  function onFavoriteClick(e) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isFavorite(movie) ? removeFromFavorites(movie) : addToFavorites(movie);
    favorite = isFavorite(movie);
  }

  const releaseDate = new Date(movie.release_date);
  const month = releaseDate.toLocaleString("default", { month: "long" });
  const day = releaseDate.getDate();

  const currentYear = new Date().getFullYear();
  const releaseYear = releaseDate.getFullYear();

  const year = currentYear === releaseYear ? "" : releaseYear;

  return (
    <div className="movie-card relative h-[33rem] w-[22rem] cursor-pointer rounded-lg">
      <div className="movie-overlay rounded-lg relative z-20 w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full rounded-lg"
        />
        <button className={`favoriteBtn absolute top-2 right-2 border rounded-full px-2 hover:bg-vermilion active:bg-transparent text-3xl duration-300 z-[15]`} onClick={onFavoriteClick}>
          ♥︎
        </button>
        <p className={`top-2 right-2 border rounded-full px-2 ${favorite ? "bg-vermilion text-smoke absolute" : "hidden"} hover:bg-vermilion active:bg-transparent text-3xl duration-300 z-10`} onClick={onFavoriteClick}>
          ♥︎
        </p>
        <div className="p-3 w-full h-[20rem] flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-black to-transparent">
          <p className="font-light text-sm opacity-50">
            {month} {day} {year}
          </p>
          <h2 className="font-bold text-lg">{movie.title}</h2>
        </div>
      </div>
      <div className="movie-card-border absolute -inset-1 rounded-lg blur-lg z-10 duration-300"></div>
    </div>
  );
}

export default MovieCard;
