import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext({});

const useMovieContext = () => {
    return useContext(MovieContext);
};

export default useMovieContext;

export const MovieProvider = ({children}) => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const favorites = localStorage.getItem("favorites");
        if (favorites) {
            setFavoriteMovies(JSON.parse(favorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
    }, [favoriteMovies]);

    const addToFavorites = (movie: Movie) => {
        setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
    };

    const removeFromFavorites = (movie: Movie) => {
        setFavoriteMovies((prevFavorites) =>
            prevFavorites.filter((m) => m.id !== movie.id)
        );
    };

    const isFavorite = (movie: Movie) => {
        return favoriteMovies.some((m) => m.id === movie.id);
    };

    const value = {
        favoriteMovies,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
}