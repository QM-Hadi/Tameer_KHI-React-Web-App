import React from "react";
import Image_01 from "../component/Images/Image_2.jpeg"
import Image_02 from "../component/Images/Image_2.jpeg"
import Image_03 from "../component/Images/Image_2.jpeg"
import Image_04 from "../component/Images/Image_2.jpeg"

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      {/* Header Section */}
      <div className="max-w-6xl w-full text-center mb-16">
        <h1 className="text-5xl font-bold text-purple-600 mb-4">About Our Company</h1>
        <p className="text-gray-600 text-lg">
          We are committed to delivering excellence through innovation and integrity.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 mb-24">
        {/* Image */}
        <div className="flex-1">
          <img
            src={Image_01}
            alt="Company"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are a team of hardworking and honest laborers, committed to delivering quality work on time. With skilled and experienced workers, we specialize in construction, repairs, and general labor services. Our focus is on customer satisfaction and building trust through integrity and teamwork. Whether it's residential or industrial work, our team is equipped to handle all tasks efficiently. We always maintain high standards of safety and cleanliness and strive to complete every job with care and dedication. Ready to serve, we bring reliability and professionalism to every project we undertake.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Mission Vision Values */}
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-10 text-center mb-24">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To empower businesses through innovative solutions and unmatched services.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To be recognized as a global leader in technology and consulting services.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
          <p className="text-gray-600">
            Integrity, Innovation, Customer Success, Teamwork, and Excellence.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl w-full text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Single Team Member */}
          {["John", "Sarah", "Michael", "Emma"].map((name, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <img
                src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${index + 10}.jpg`}
                alt={name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
              <p className="text-gray-500 text-sm mt-2">Senior Developer</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Journey</h2>
        <p className="text-gray-600 mb-6">
          Ready to work with a passionate team that cares about your success?
          Let's build the future together.
        </p>
        <button className="px-8 py-4 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default About;
