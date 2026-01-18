import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const handleClick = () => {
    console.log('Movie clicked:', movie.id);
  };

  return (
    <div className="movie-card" data-id={movie.id} onClick={handleClick}>
      <img src={movie.image} alt={movie.title} />
      <div className="movie-card-info">
        <div className="movie-card-title">{movie.title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
