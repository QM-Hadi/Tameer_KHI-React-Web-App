import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimationCon from "./component/AnimationCon/AnimationCon";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import CommentSection from "./component/CommentSec/Comment";
import SecondSection from "./component/SecondSection/SecondSection";
import HeroAnimation from "./component/HeroAnimationSec/HeroAnimation";
import AboutSection from "./component/AboutSection/AboutSection";
import LabourSection from "./component/LaboursSection/LaboursSec";
import FirstNavbarCon from './component/FirstNavbarCon/FirstNavbarCon';
import './App.css';
import About from './component/About/About';
import Labour from './component/Labour/Labour';
import Career from './component/Career/Career';
import Home from './component/Home/Home'; // Assuming you have a Home component

function App() {
  return (
    <Router>
      {/* First Navbar: This can be a header with contact information, social media, etc. */}
      <FirstNavbarCon />

      {/* Main Navbar */}
      <Navbar />

      {/* Hero Section with animations */}
      <HeroAnimation />

      {/* Second Section */}
      <SecondSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Animation Content Section */}
      <AnimationCon />

      {/* Labour Section */}
      <LabourSection />

      {/* Comment Section */}
      <CommentSection />

      {/* Footer Section */}
      <Footer />

      {/* Define the routes */}
      
    </Router>
  );
}

export default App;
