import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../styles/Home.css";
import loadingIcon from "../assets/loading-spinner.svg";
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
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }
    setLoading(true);
    if (loading) return

    try {
        const searchResults = await searchMovie(searchQuery);
        setMovies(searchResults);
        setError(null)
    } catch (error) {
        setError("Failed to load Movies...");
        console.log(error);
        
    }
    finally {
        setLoading(false);
    }
    
    // alert(`You searched for ${searchQuery}`);
  };
  return (
    <div className="h-full w-full flex flex-col items-center">
      <form
        onSubmit={handleSearch}
        className="md:max-w-[50rem] w-full p-3 my-5 mx-auto flex flex-row gap-4 glass-dark rounded-xl"
      >
        <input
          type="text"
          className="w-full p-2 bg-[#00000000]"
          placeholder="Search for a Movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <p className="text-vermilion text-2xl font-bold">{error}</p>}
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <img src={loadingIcon} className="w-24 h-24 text-verdigris" />
          <p className="text-verdigris text-2xl font-bold animate-pulse">
            Loading...
          </p>
        </div>
      ) : (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
