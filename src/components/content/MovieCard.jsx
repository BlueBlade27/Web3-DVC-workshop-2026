import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onMovieSelect }) => {
  return (
    <div
      className="movie-card"
      onClick={() => onMovieSelect(movie)}
      style={{ cursor: 'pointer' }}
    >
      <img 
        src={movie.image} 
        alt={movie.title} 
        style={{ width: '250px', height: '140px', objectFit: 'cover' }} 
      />
      <p>{movie.title}</p>
    </div>
  );
};

export default MovieCard;
