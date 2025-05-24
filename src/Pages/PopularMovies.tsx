import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../Context/FavoritesContext';
import { FaArrowLeft } from 'react-icons/fa';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

const PopularMovies = () => {
  // State declarations
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentApiPage, setCurrentApiPage] = useState(1);
  const [currentUiPage, setCurrentUiPage] = useState(1);

  // Access favorites context
  const favoritesContext = useContext(FavoritesContext);
  if (!favoritesContext) {
    throw new Error('FavoritesContext must be used within a FavoritesProvider');
  }
  const { addToFavorites } = favoritesContext;

  // API key and pagination settings
  const apiKey = 'dddcc09ed97df5a7b588e6a3f8a58c5c';
  const MOVIES_PER_UI_PAGE = 15;

  // Fetch popular movies from API on currentApiPage change
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentApiPage}`
        );
        const data = await response.json();
        // Append new movies to existing list
        setMovies((prev) => [...prev, ...data.results]);
        setLoading(false);
      } catch (error) {
        console.error('Error loading movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentApiPage]);

  // Calculate visible movies for current UI page
  const startIndex = (currentUiPage - 1) * MOVIES_PER_UI_PAGE;
  const endIndex = startIndex + MOVIES_PER_UI_PAGE;
  const visibleMovies = movies.slice(startIndex, endIndex);

  // Handle page change triggered by pagination buttons
  const handlePageChange = (newPage: number) => {
    const requiredMovies = newPage * MOVIES_PER_UI_PAGE;
    // If requested page requires movies not yet fetched, fetch next API page
    if (requiredMovies > movies.length) {
      setCurrentApiPage((prev) => prev + 1);
    }
    setCurrentUiPage(newPage);
  };

  // Calculate total UI pages for pagination buttons
  const totalUiPages = Math.ceil(movies.length / MOVIES_PER_UI_PAGE);

  return (
    <div className="home-page">
      {/* Header section with back link and title */}
      <div className="home-head">
        <Link to="/" className="back-to-home">
          <FaArrowLeft size={20} /> Home
        </Link>
        <h1 className="home-title">
          Popular<span style={{ color: '#298eea' }}>Movies</span>
        </h1>
      </div>

      {/* Subtitle */}
      <h3 className="home-second-title">TRENDING NOW</h3>

      {/* Main content section with movie cards */}
      <div className="home-body">
        <div className="movies-wrapper">
          {loading ? (
            // Show loading message while fetching data
            <p>Loading movies...</p>
          ) : (
            // Display list of visible movies
            visibleMovies.map((movie) => (
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                className="movie-card"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                }}
              >
                {/* Movie overlay with title and favorite button */}
                <div className="movie-overlay">
                  <h3 className="movie-title">{movie.title}</h3>
                  <button
                    className="fav-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      addToFavorites(movie);
                    }}
                  >
                    Add to Favorites
                  </button>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Pagination buttons */}
      <div className="pagination">
        {Array.from({ length: totalUiPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={`pagination-btn ${
              currentUiPage === num ? 'active' : ''
            }`}
            onClick={() => handlePageChange(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
