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
        <div>
          <h2>Selected Movie</h2>
          <p>{selectedMovie.title}</p>
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
