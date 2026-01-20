import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import './ContentRow.css';

const ContentRow = ({ title, movies, onMovieSelect }) => {
  const rowItemsRef = useRef(null);

  const scrollLeft = () => {
    if (rowItemsRef.current) {
      rowItemsRef.current.scrollBy({
        left: -500,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (rowItemsRef.current) {
      rowItemsRef.current.scrollBy({
        left: 500,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="content-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        <button className="row-nav row-nav-left" onClick={scrollLeft}>&lt;</button>
        <div className="row-items" ref={rowItemsRef}>
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))}
        </div>
        <button className="row-nav row-nav-right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default ContentRow;
