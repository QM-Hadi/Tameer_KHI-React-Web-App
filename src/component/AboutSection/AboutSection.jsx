import React from 'react';
import Image_01 from '../Images/larkana.jpeg';
import './AboutSec.css';

const AboutSection = () => {
  return (
    <div className="p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 bg-gradient-to-r from-blue-50 to-white  shadow-sm aboutsec">

      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 text-gray-800">
        <h1 className="text-4xl font-bold text-blue-600">About Us!</h1>
        <p className="text-justify max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
          We are a team of hardworking and honest laborers, committed to delivering quality work on time. With skilled and experienced workers, we specialize in construction, repairs, and general labor services. Our focus is on customer satisfaction and building trust through integrity and teamwork. Whether it's residential or industrial work, our team is equipped to handle all tasks efficiently. We always maintain high standards of safety and cleanliness and strive to complete every job with care and dedication. Ready to serve, we bring reliability and professionalism to every project we undertake.
        </p>
        <button className="bg-blue-600 text-white rounded-full px-6 py-3 shadow-md hover:bg-blue-700 hover:scale-105 transition transform duration-300">
          Read More
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={Image_01}
          alt="Larkana"
          className="w-full rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default AboutSection;
