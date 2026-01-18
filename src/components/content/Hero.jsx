import React from 'react';
import './Hero.css';

const Hero = () => {
  const handlePlay = () => {
    console.log('Play clicked');
    alert('Playing: Stranger Things');
  };

  const handleMoreInfo = () => {
    console.log('More Info clicked');
    alert('More Info about: Stranger Things');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Stranger Things</h1>
        <p className="hero-description">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-play" onClick={handlePlay}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5V19L19 12L8 5Z"/>
            </svg>
            Play
          </button>
          <button className="btn btn-info" onClick={handleMoreInfo}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            More Info
          </button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
