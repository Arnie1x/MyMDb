import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray min-h-screen text-smoke cursor-default">
      <NavBar />
      <main className="px-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
