import React from 'react';
import './HeroSection.css';
import BannerImg from '../Images/Karachi_Img08.png';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={BannerImg} alt="Karachi Banner" className="hero-image" />
      <div className="hero-text">
      </div>
    </div>
  );
};

export default HeroSection;
