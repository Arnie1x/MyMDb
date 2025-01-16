import {useState, useEffect} from "react";
import MovieCard from "../components/MovieCard";
import '../styles/Home.css'
import { searchMovie, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error(error);
                setError("Failed to load Movies...");
            } finally {
                setLoading(false);  
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`You searched for ${searchQuery}`);
    }
    return (
        <div className="h-full w-full flex flex-col items-center">
            <div className="w-full ">
                <form onSubmit={handleSearch} className="md:max-w-[50rem] w-full p-3 my-5 mx-auto flex flex-row gap-4 glass-dark rounded-xl">
                    <input type="text" className="w-full p-2 bg-[#00000000]" placeholder="Search for a Movie..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;