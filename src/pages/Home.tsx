import MovieCard from "../assets/components/MovieCard";

function Home() {
    const movies: Movie[] = [
        {
            id: "0",
            Poster: "",
            Title: "Five Nights at Freddy's",
            Year: "2024"
        }
    ]
    return (
        <div className="home">
            <h1 className="text-5xl">Home</h1>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;