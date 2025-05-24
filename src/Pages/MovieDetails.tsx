import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  // React Router hook for programmatic navigation
  const navigate = useNavigate();

  // Get movie ID from the URL parameters
  const { id } = useParams();

  // State to hold movie data and loading status
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // API key for The Movie Database API
  const apiKey = 'dddcc09ed97df5a7b588e6a3f8a58c5c';

  // Fetch movie details when component mounts or when 'id' changes
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // Fetch movie details from TMDB API using movie ID
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );

        const data = await res.json();

        // Save the fetched movie data to state
        setMovie(data);

        // Optional: log backdrop path for debugging
        console.log("Backdrop path:", data.backdrop_path);

        // Set loading to false after data is fetched
        setLoading(false);
      } catch (err) {
        // Log any fetch errors and set loading to false
        console.error("Fetch error", err);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  // Show loading text while fetching data
  if (loading) return <div className="details-page">Loading...</div>;

  // Show message if movie data is not found
  if (!movie) return <div className="details-page">Movie not found.</div>;

  return (
    <div
      className="details-background"
      style={{
        // Set movie backdrop or poster as background image
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="details-overlay">
        <div className="details-page">
          {/* Back button to navigate to previous page */}
          <button
            className="back-button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <FaArrowLeft size={20} /> Back
          </button>

          {/* Movie title */}
          <h1 className="details-title">{movie.title}</h1>

          {/* Movie poster image */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="details-poster"
          />

          {/* Movie overview description */}
          <p><strong>Overview:</strong> {movie.overview}</p>

          {/* Movie release date */}
          <p><strong>Release Date:</strong> {movie.release_date}</p>

          {/* Movie rating */}
          <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
