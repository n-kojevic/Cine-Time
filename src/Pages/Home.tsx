import { useEffect, useState, useContext } from 'react';
import { FaHome, FaStar, FaFilm } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';
import { FavoritesContext } from '../Context/FavoritesContext'; 

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

const Home = () => {
  // State variables for movies, loading status, API page, UI page, and search term
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentApiPage, setCurrentApiPage] = useState(1);
  const [currentUiPage, setCurrentUiPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Access favorites context
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error('FavoritesContext must be used within a FavoritesProvider');
  }

  const { addToFavorites } = favoritesContext;

  const apiKey = 'dddcc09ed97df5a7b588e6a3f8a58c5c';
  const MOVIES_PER_UI_PAGE = 15;

  // Fetch movies from API when currentApiPage changes
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.desc&vote_count.gte=100&page=${currentApiPage}`
        );
        const data = await response.json();
        setMovies((prev) => [...prev, ...data.results]);
        setLoading(false);
      } catch (error) {
        console.error('Error loading movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentApiPage]);

  // Calculate visible movies slice based on current UI page
  const startIndex = (currentUiPage - 1) * MOVIES_PER_UI_PAGE;
  const endIndex = startIndex + MOVIES_PER_UI_PAGE;
  const visibleMovies = movies.slice(startIndex, endIndex);

  // Filter visible movies based on search term
  const filteredMovies = visibleMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle pagination click: update UI page and API page if needed, reset search term
  const handlePageChange = (newPage: number) => {
    const requiredMovies = newPage * MOVIES_PER_UI_PAGE;
    if (requiredMovies > movies.length) {
      setCurrentApiPage((prev) => prev + 1);
    }
    setCurrentUiPage(newPage);
    setSearchTerm(''); 
  };

  const totalUiPages = Math.ceil(movies.length / MOVIES_PER_UI_PAGE);

  return (
    <div className="home-page">
      {/* Header section with banner and title */}
      <div className="home-head">
        <div className="promo-banner">
          🎬 Welcome to CineTime! Watch popular movies for free! 🍿
        </div>

        <h1 className="home-title">
          Cine<span style={{ color: '#298eea' }}>Time</span>
        </h1>
      </div>

      <h3 className="home-second-title">WATCH MOVIES FOR FREE!</h3>

      {/* Main body with navigation buttons, search input, and movies grid */}
      <div className="home-body">
        {/* Navigation buttons */}
        <div className="buttons">
          <Link to="/" className="nav-button">
            <FaHome size={24} /> Home
          </Link>

          <Link to="/popular" className="nav-button">
            <FaFilm size={24} /> Popular
          </Link>

          <Link to="/favorites" className="nav-button">
            <FaStar size={24} /> Favorites
          </Link>
        </div>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* Movies grid */}
        <div className="movies-wrapper">
          {loading ? (
            <p>Loading movies...</p>
          ) : filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                className="movie-card"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                }}
              >
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
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>

      {/* Pagination buttons */}
      <div className="pagination">
        {Array.from({ length: totalUiPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={`pagination-btn ${currentUiPage === num ? 'active' : ''}`}
            onClick={() => handlePageChange(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
