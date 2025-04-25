import React from 'react';
import './SecondSection.css';
import HeroImg from '../Images/Image_2.jpeg';

const SecondSection = () => {
  return (
    <div className="mt-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-r from-blue-50 to-blue-100">

      {/* Left Side Text */}
      <div className="text-center md:text-left mt-8 md:mt-0 max-w-xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
          Hello,
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl leading-snug text-gray-700">
          We Are Offering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 font-extrabold">
            Labours
          </span>{' '}
          For You in Karachi
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition transform duration-300">
          <a href="#">Get Started</a>
        </button>
      </div>

      {/* Right Side Image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img
          className="h-[45vh] sm:h-[55vh] object-contain rounded-xl shadow-lg transition duration-300 hover:scale-105"
          src={HeroImg}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default SecondSection;
