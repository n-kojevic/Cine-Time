
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import Favorites from './Pages/Favorites';
import { FavoritesProvider } from './Context/FavoritesContext';
import PopularMovies from './Pages/PopularMovies';

function App() {
  return (
    <FavoritesProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/popular" element={<PopularMovies />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
