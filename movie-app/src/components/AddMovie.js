// src/components/AddMovie.js
import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [trailer, setTrailer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterURL, rating, trailer };
    addMovie(newMovie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
      <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
      <input type="text" placeholder="Trailer URL" value={trailer} onChange={(e) => setTrailer(e.target.value)} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
