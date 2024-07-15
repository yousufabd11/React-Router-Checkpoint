// src/components/MovieDescription.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div className="movie-description">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe width="560" height="315" src={movie.trailer} title={movie.title} frameBorder="0" allowFullScreen></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;
