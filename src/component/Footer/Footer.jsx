import React from 'react';
import Facebook from '../Images/Facebook_Icon.png';
import Instagram from '../Images/Instagram-Icon.png';
import Linkedin from '../Images/Linkedin_Icon.png';
import Youtube from '../Images/Youtube-Icon.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-white to-purple-50 pt-8 pb-4 px-6 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Top Section: Text and Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-gray-600 text-sm md:text-base">
            &copy; 2025 Tameer Karachi. All rights reserved.
          </span>

          <div className="flex gap-5 items-center">
            <img
              src={Facebook}
              alt="Facebook"
              className="h-8 w-8 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
            />
            <img
              src={Instagram}
              alt="Instagram"
              className="h-8 w-8 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
            />
            <img
              src={Linkedin}
              alt="LinkedIn"
              className="h-8 w-8 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
            />
            <img
              src={Youtube}
              alt="YouTube"
              className="h-8 w-8 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Bottom Section: Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition duration-300">About Us</a>
          <a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition duration-300">Contact</a>
          <a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition duration-300">Privacy Policy</a>
          <a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition duration-300">Terms & Conditions</a>
          <a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition duration-300">FAQs</a>
          <a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition duration-300">Careers</a>
          <a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition duration-300">Blog</a>
          <a href="#" className="text-gray-700 text-sm hover:text-blue-600 transition duration-300">Services</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
