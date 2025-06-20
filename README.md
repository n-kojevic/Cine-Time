# 🎬 CineTime – Movie Explorer App

CineTime is a web application that allows users to explore and favorite movies.  
Users can browse popular titles, search by name, and manage their personal list of favorites.  
Powered by the TMDb API and built with React + TypeScript.

---

## 🌐 Live Demo  
👉 [Visit CineTime Live Site](https://cinetimenk.netlify.app/)

---

## 📸 Screenshots

### 💻 Lenovo ThinkPad L14  
![Lenovo ThinkPad L14](https://github.com/n-kojevic/Cine-Time/blob/main/assets/Lenovo%20ThinkPad%20L14-1750504661776.jpeg?raw=true)

### 💻 MacBook Pro  
![MacBook Pro](https://github.com/n-kojevic/Cine-Time/blob/main/assets/MacBook%20Pro-1750504624636.jpeg?raw=true)

### 📷 Screenshot 1  
![Screenshot 1](https://github.com/n-kojevic/Cine-Time/blob/main/assets/Screenshot%202025-06-21%20125221.png?raw=true)

### 📷 Screenshot 2  
![Screenshot 2](https://github.com/n-kojevic/Cine-Time/blob/main/assets/Screenshot%202025-06-21%20125331.png?raw=true)

### 📱 iPad  
![iPad](https://github.com/n-kojevic/Cine-Time/blob/main/assets/iPad-1750504610333.jpeg?raw=true)

### 📱 iPhone 5 SE  
![iPhone 5 SE](https://github.com/n-kojevic/Cine-Time/blob/main/assets/iPhone%205-SE-1750504653209.jpeg?raw=true)



## 📌 Project Overview

- Displays popular movies using data from the TMDb API  
- Includes client-side search functionality  
- Allows users to add/remove favorites using global state (Context API)  
- Responsive UI with dark theme and accent colors  
- Uses React Router for navigation between pages

---

## ⚙️ Technologies Used

- ⚛️ React (with **TypeScript**)  
- 🧭 React Router (routing)  
- 📦 Context API (global state for favorites)  
- 🎨 CSS (custom styling, dark theme, grid layout)  
- 🎬 [TMDb API](https://www.themoviedb.org/documentation/api) (movie data source)

---

## 🧩 Project Structure

/src
/components
- MovieCard.tsx
- SearchBar.tsx
/pages
- Home.tsx
- Favorites.tsx
- MovieDetails.tsx (optional/future)
/context
- FavoritesContext.tsx
/routes
- App.tsx (React Router config)

  
---

## 📂 Routes

| Path             | Description                           |
|------------------|---------------------------------------|
| `/`              | Home page with movie list & search    |
| `/favorites`     | Displays favorite movies              |
| `/movies`        | Alternative view of movies            |
| `/popular`       | Popular movies (same as homepage)     |

---

## 🎯 Features

### 📽️ Movie Display (Home)
- Fetches movies from TMDb API  
- Displays movie cards with poster & title  
- Pagination: 15 movies per page  
- Client-side search by title

### ⭐ Favorites
- Add/remove movies from a persistent favorites list  
- Global state managed via React Context

### 🔍 Search
- Filters current visible list of movies in real-time  
- Lightweight, no additional API calls

### 💅 Styling
- Dark theme with yellow & blue accents  
- Responsive grid layout  
- Hover effects on buttons and cards

---

Clone the repository:
git clone https://github.com/n-kojevic/Cine-Time.git

Install dependencies:
npm install

Run the app:
npm start

Open in browser:
http://localhost:3000

📬 Contact
For questions or suggestions:
📧 LinkedIn – Nikola Kojevic
