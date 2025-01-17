import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
    <div className="bg-gray min-h-screen text-smoke cursor-default">
      <NavBar />
      <main className="px-5 pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
    </MovieProvider>
  );
}

export default App;
