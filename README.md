# 📽️ CineTime – Project Documentation

---

## 1. 📌 Project Overview

**CineTime** is a web application that allows users to browse and manage their favorite movies.  
Users can view popular titles, search by movie name, and add or remove items from their personal favorites list.

---

## 2. 🛠️ Technologies Used

- ⚛️ React (with TypeScript)  
- 🔁 React Router (for navigation)  
- 📦 Context API (for managing favorites)  
- 🎨 CSS (for styling pages and cards)  
- 🎬 TMDb API (as the movie data source)  

---

## 3. 🧩 Project Structure

### Components:
- **Home:** Displays a list of popular movies with search and pagination.  
- **Favorites:** Shows the list of user-marked favorite movies.  
- **MovieDetails (optional/future):** Displays detailed info about a selected movie.  
- **FavoritesContext:** Manages favorite movies and provides add/remove functions.  

### Routes:
- `/` – Home page with movies and search functionality  
- `/favorites` – Page showing favorite movies  
- `/movies/` – Page showing first page of movies  
- `/popular` – Page showing popular movies  

---

## 4. ✨ Features

### 🎞️ Movie Display (Home)
- Fetches movies from the TMDb API  
- Displays movies as cards with posters and titles  
- Pagination shows 15 movies per page  
- Search input filters movies by title (client-side)

### ⭐ Favorites Page
- Displays movies added to favorites  
- Users can remove movies from favorites

### 🔍 Search
- Instant filtering based on the currently loaded movies  
- Search applies only to visible movie list  

---

## 5. 🎨 Styling

- Dark theme with **yellow and blue accent colors**  
- Movie cards include poster, title, and action buttons  
- Buttons feature **hover effects**  
- Responsive grid layout for cards (basic version included)  

---

## 6. 🚀 How to Run the Project

1. **Clone the repository**  
   ```bash
   git clone https://github.com/n-kojevic/Cine-Time.git

2. **Install dependencies**
   npm install
   
3. **Start the development server**
   npm start
   
4. **Open your browser at:
   http://localhost:3000

## 7. 📱 Future Improvements
Full responsiveness across all screen sizes
Current layout includes a basic responsive grid. Full optimization for all device types (mobile, tablet, desktop) is planned to ensure a seamless experience on every screen size.

Advanced layout adjustments
Implementation of modern layout techniques like CSS Grid, more flexible media queries, and dynamic typography scaling for improved visual consistency.

Accessibility and usability enhancements
Planned improvements include better focus control, scalable text support, and compatibility with screen readers.

Performance optimization on mobile devices
Optimizing image sizes and lazy-loading assets for better performance and reduced data usage on mobile networks.

Comprehensive device testing
Testing the application across a wider range of screen resolutions and devices to ensure consistent functionality and appearance.
