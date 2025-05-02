import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimationCon from "./component/AnimationCon/AnimationCon";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Labours from './pages/Labours';
import Places from './pages/Places';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

import FirstNavbarCon from './component/FirstNavbarCon/FirstNavbarCon';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      {/* Top Navbar */}
      <FirstNavbarCon />

      {/* Main Navbar */}
      <Navbar />

      {/* Yeh section sirf fixed pages pe dikhega */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* About Page */}
        <Route path="/places" element={<Places/>} />

        {/* Labours Page */}
        <Route path="/labours" element={<Labours />} />

        {/* Places Page */}
        <Route path="/places" element={<Places />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Services Page */}
        <Route path="/register" element={<Register />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Agar koi wrong url aaye to 404 */}
        <Route path="*" element={<h1 className="text-center mt-10 text-2xl font-bold">404 - Page Not Found</h1>} />
      </Routes>

      {/* Footer will always be visible */}
      <Footer />
    </Router>
  );
}

export default App;
