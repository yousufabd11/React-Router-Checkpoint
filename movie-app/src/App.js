// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDescription from './components/MovieDescription';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';



const App = () => {
  const [movies, setMovies] = useState([
    // Initial movie data
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filterMovies = (title, rating) => {
    // Implement filter logic
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add Movie</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <Filter filterMovies={filterMovies} />
              <MovieList movies={movies} />
            </>
          } />
          <Route path="/add" element={<AddMovie addMovie={addMovie} />} />
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
