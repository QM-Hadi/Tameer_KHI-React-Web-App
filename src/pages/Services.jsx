import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine } from "react-icons/fa";

const Services = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      {/* Header Section */}
      <div className="max-w-5xl text-center mb-16">
        <h1 className="text-5xl font-bold text-purple-600 mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg">
          We provide a wide range of services to help your business grow.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Single Service Card */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center">
          <FaCode className="text-5xl text-blue-600 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
          <p className="text-gray-600 leading-relaxed">
            High-quality web development services tailored to your business needs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center">
          <FaPaintBrush className="text-5xl text-pink-500 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h3>
          <p className="text-gray-600 leading-relaxed">
            Beautiful, intuitive, and user-friendly designs that engage and delight users.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center">
          <FaMobileAlt className="text-5xl text-green-500 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
          <p className="text-gray-600 leading-relaxed">
            Cross-platform and native mobile solutions that drive results.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center">
          <FaChartLine className="text-5xl text-purple-500 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
          <p className="text-gray-600 leading-relaxed">
            Grow your brand online with targeted marketing strategies.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl w-full text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Need a Custom Solution?</h2>
        <p className="text-gray-600 mb-6">
          Let's collaborate and build something extraordinary together.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Services;
