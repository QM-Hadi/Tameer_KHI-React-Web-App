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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quidem ipsum voluptates atque dignissimos quas animi repellendus consectetur. Dolore adipisci expedita aspernatur? Velit autem, reiciendis laboriosam atque quidem id eum porro enim eos mollitia magni iste distinctio placeat. Laudantium facere totam sint officiis. Expedita qui quos ab impedit non sit!...
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
