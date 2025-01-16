import React from "react";
import MovieCard from "../assets/components/MovieCard";

function Home() {
    const [searchQuery, setSearchQuery] = React.useState("");

    const movies: Movie[] = [
        {
            id: "0",
            Poster: "",
            Title: "Five Nights at Freddy's",
            Year: "2024"
        },
        {
            id: "1",
            Poster: "",
            Title: "The Matrix",
            Year: "1999"
        },
    ]

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`You searched for ${searchQuery}`);
    }
    return (
        <div className="home">
            {/* <h1 className="text-5xl">Home</h1> */}
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a Movie..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;