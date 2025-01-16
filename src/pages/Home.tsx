import React from "react";
import MovieCard from "../components/MovieCard";

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
        {
            id: "2",
            Poster: "",
            Title: "The Matrix",
            Year: "1999"
        },
        {
            id: "3",
            Poster: "",
            Title: "The Matrix",
            Year: "1999"
        },
        {
            id: "4",
            Poster: "",
            Title: "The Matrix",
            Year: "1999"
        },
        {
            id: "5",
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
        <div className="h-full w-full flex flex-col items-center">
            {/* <h1 className="text-5xl">Home</h1> */}
            <div className="w-full ">
                <form onSubmit={handleSearch} className="md:max-w-[50rem] w-full p-3 my-5 mx-auto flex flex-row gap-4 glass-dark rounded-xl">
                    <input type="text" className="w-full p-2 bg-[#00000000]" placeholder="Search for a Movie..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-10">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;