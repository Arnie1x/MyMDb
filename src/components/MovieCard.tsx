import "../styles/MovieCard.css";
function MovieCard({ movie }: { movie: Movie }) {
  function onFavoriteClick() {
    alert(`You just favorited ${movie.title}`);
  }

  const releaseDate = new Date(movie.release_date);
  const month = releaseDate.toLocaleString("default", { month: "long" });
  const day = releaseDate.getDate();

  const currentYear = new Date().getFullYear();
  const releaseYear = releaseDate.getFullYear();

  const year = currentYear === releaseYear ? "" : releaseYear;

  return (
    <div className="movie-card relative w-[22rem] cursor-pointer">
      <div className="movie-overlay rounded-md bg-gray relative z-20">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-md"
        />
        <button className="favoriteBtn absolute top-2 right-2 border rounded-full px-2 hover:bg-vermilion active:bg-transparent active:text-vermilion text-3xl duration-300" onClick={onFavoriteClick}>
          ♥︎
        </button>
        <div className="p-3 w-full h-[20rem] flex flex-col justify-end absolute bottom-0 bg-gradient-to-t from-black to-transparent">
          <p className="font-light text-sm opacity-50">
            {month} {day} {year}
          </p>
          <h2 className="font-bold text-lg">{movie.title}</h2>
        </div>
      </div>
      <div className="movie-card-border absolute -inset-1 rounded-md blur-md z-10 duration-300"></div>
    </div>
  );
}

export default MovieCard;
