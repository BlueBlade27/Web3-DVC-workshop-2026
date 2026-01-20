import React, {userState} from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onMovieSelect }) => {
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => onMovieSelect && onMovieSelect(movie)}
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
