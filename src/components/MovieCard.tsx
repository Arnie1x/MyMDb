import "../styles/MovieCard.css";
function MovieCard({ movie }: { movie: Movie }) {
  function onFavoriteClick() {
    alert(`You just favorited ${movie.Title}`);
  }
  return (
    <div className="movie-card relative w-[25rem]">
      <div className="p-2 rounded-md bg-gray relative z-20">
        <img src={movie.Poster} alt={movie.Title} className="h-[25rem]" />
        <div className="movie-overlay">
          <button className="favoriteBtn" onClick={onFavoriteClick}>
            ♥︎
          </button>
        </div>
        <div>
          <h2 className="font-bold text-lg">{movie.Title}</h2>
          <p className="font-light">{movie.Year}</p>
        </div>
      </div>
      <div className="movie-card-border absolute -inset-1 rounded-md blur-md z-10 duration-300"></div>
    </div>
  );
}

export default MovieCard;
