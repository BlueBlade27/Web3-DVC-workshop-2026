import React, { useState } from 'react';
import Hero from '../components/content/Hero';
import ContentRow from '../components/content/ContentRow';
import { movieData } from '../data/movieData';
import './Home.css';


const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <Hero />

      {selectedMovie && (
        <div className="movie-modal" onClick={() => setSelectedMovie(null)}>
          <div
            className="movie-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelectedMovie(null)}>
              ✕
            </button>

            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="panel-image"
            />

            <h2>{selectedMovie.title}</h2>
            <p>"Movie description"</p>
        </div>
      </div>

)}


      <section>
        <ContentRow
          title="Trending Now"
          movies={movieData.trending}
          onMovieSelect={handleMovieSelect}
        />
        <ContentRow
          title="Popular on Netflix"
          movies={movieData.popular}
          onMovieSelect={handleMovieSelect}
        />
      </section>
    </div>
  );
};

export default Home;
