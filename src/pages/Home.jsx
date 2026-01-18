import React from 'react';
import Hero from '../components/content/Hero';
import ContentRow from '../components/content/ContentRow';
import { movieData } from '../data/movieData';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <section className="content-section">
        <ContentRow title="Trending Now" movies={movieData.trending} />
        <ContentRow title="Popular on Netflix" movies={movieData.popular} />
        <ContentRow title="Action Movies" movies={movieData.action} />
        <ContentRow title="Comedy Shows" movies={movieData.comedy} />
        <ContentRow title="Documentaries" movies={movieData.documentaries} />
      </section>
    </div>
  );
};

export default Home;
