Project Documentation: CineTime

1. Project Overview:

CineTime is a web application that allows users to browse and add favorite movies. Users can view popular movies, search by title, and add movies to their favorites list.

2. Technologies Used:

React (with TypeScript)
React Router (for navigation)
Context API (for managing favorites)
CSS (for styling pages and cards)
TMDb API (source of movie data)

3. Project Structure:

Components:
Home: Displays a list of popular movies with search and pagination.
Favorites: Shows the list of movies the user has marked as favorites.
MovieDetails (optional/future): Displays detailed info about a movie.
FavoritesContext: Stores favorite movies and provides functions to add or remove them.

Routes
/ - Home page with movies and search functionality
/favorites - Page showing favorite movies
/movies/ - Page showing first page of movies
/popular - Page showing popular movies

4. Features:

Movie Display (Home)
-Fetches movies from the TMDb API.
-Shows movies as cards with poster and title.
-Pagination displays 15 movies per page.
-Search input filters movies by title (client-side filtering).
-Favorites Page
-Displays movies added to favorites.
-Users can remove movies from favorites.

Search:
-Search input filters movies instantly based on the current loaded movies.
-Search works on the visible movie list.

5. Styling:
   Dark theme with yellow and blue accent colors.
   Movie cards with posters, titles, and buttons.
   Buttons include hover effects.
   Responsive grid layout for cards.

6. How to Run the Project
   Clone the repository:

Run npm install to install dependencies
Run npm start to start the development server
Open http://localhost:3000 in your browser
