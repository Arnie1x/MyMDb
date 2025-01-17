import axios from "axios";

const API_KEY = import.meta.env.VITE_THEMOVIEDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
}

export const searchMovie = async (query: string) => {
    query = encodeURIComponent(query);
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
}

