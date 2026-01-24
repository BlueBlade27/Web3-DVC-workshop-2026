import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onMovieSelect }) => {
  return (
    <div
      className="movie-card"
      onClick={() => onMovieSelect(movie)}
    >
      <div className="movie-thumb">
        <img src={movie.image} alt={movie.title} />
      </div>
      <p>{movie.title}</p>
    </div>
  );
};

export default MovieCard;
