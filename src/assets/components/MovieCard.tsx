function MovieCard({ movie }: { movie: Movie }) {
  function onFavoriteClick() {
    alert(`You just favorited ${movie.Title}`);
  }
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-overlay">
        <button className="favoriteBtn" onClick={onFavoriteClick}>
          ♥︎
        </button>
      </div>
      <div>
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
