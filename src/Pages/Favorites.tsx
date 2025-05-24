import { useContext } from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Favorites.css'; 

const Favorites = () => {
  // Access favorites context with favorite movies and related functions
  const favoritesContext = useContext(FavoritesContext);

  // Show error message if context is not available (not wrapped in provider)
  if (!favoritesContext) {
    return <p>Error loading favorites.</p>;
  }

  // Destructure favorites and remove function from context
  const { favorites, removeFromFavorites } = favoritesContext;

  return (
    <div className="favorites-page">
      {/* Link to navigate back to home page */}
      <Link to="/" className="back-to-home">
        <FaArrowLeft size={20} /> Home
      </Link>
      
      {/* Page title */}
      <h1>Your Favorite Movies</h1>
      
      {/* Show message if no favorite movies */}
      {favorites.length === 0 ? (
        <p>You have no favorite movies yet.</p>
      ) : (
        // Grid layout to display favorite movies
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id} className="favorite-card">
              {/* Movie poster background */}
              <div
                className="favorite-card-poster"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                }}
              ></div>
              {/* Movie title */}
              <h3 className="favorite-card-title">{movie.title}</h3>
              
              {/* Buttons for navigation and removing from favorites */}
              <div className="favorite-card-buttons">
                <Link to="/" className="back-btn">Back</Link>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior when clicking button
                    removeFromFavorites(movie.id); // Remove movie from favorites
                  }}
                >
                  Remove
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
