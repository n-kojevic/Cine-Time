import { createContext, useState, useEffect, ReactNode } from 'react';

// Define the Movie type with necessary properties
type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

// Define the shape of the FavoritesContext value
type FavoritesContextType = {
  favorites: Movie[]; // Array of favorite movies
  addToFavorites: (movie: Movie) => void; // Function to add a movie to favorites
  removeFromFavorites: (movieId: number) => void; // Function to remove a movie from favorites by its ID
};

// Create the FavoritesContext with initial null value
export const FavoritesContext = createContext<FavoritesContextType | null>(null);

// FavoritesProvider component to wrap around parts of app that need favorites data
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  // State to store the list of favorite movies
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Load favorites from localStorage once when component mounts
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Save the current favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add a movie to favorites if it doesn't already exist in the list
  const addToFavorites = (movie: Movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  // Remove a movie from favorites by filtering it out by its ID
  const removeFromFavorites = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  // Provide favorites data and functions to children components
  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
