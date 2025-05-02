import React, { useState } from "react";
import { db } from '../../firebase'; // Firebase import (Realtime Database)
import { ref, set } from "firebase/database"; // Realtime Database methods
import { toast, Toaster } from 'react-hot-toast'; // Toast import

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    nicImage: null,
    loading: false, // Add loading state for the button
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "nicImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nicImage) {
      toast.error('NIC Image is required!', {
        style: {
          background: '#f44336',
          color: '#fff',
          fontWeight: 'bold',
        },
      });
      return;
    }

    setFormData({ ...formData, loading: true }); // Set loading to true

    try {
      // Save form data to Realtime Database
      const formRef = ref(db, 'contacts/' + Date.now()); // unique ID based on timestamp
      await set(formRef, {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        nicImage: formData.nicImage.name,  // Save only the image name (if you don't want to store the file directly in DB)
        timestamp: new Date().toISOString(),
      });

      // Show success toast
      toast.success('Your message has been sent successfully!', {
        style: {
          background: '#4caf50',
          color: '#fff',
          fontWeight: 'bold',
        },
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        nicImage: null,
        loading: false, // Reset loading state after submission
      });
    } catch (error) {
      console.error("Error submitting form: ", error);

      // Show error toast
      toast.error('Something went wrong, please try again!', {
        style: {
          background: '#f44336',
          color: '#fff',
          fontWeight: 'bold',
        },
      });

      setFormData({ ...formData, loading: false }); // Reset loading state on error
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-4xl w-full bg-white p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-10">
          Contact Form
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* NIC Upload */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">
              Upload NIC (ID Card) Photo <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="nicImage"
              accept="image/*"
              onChange={handleChange}
              required
              className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          {/* Message (full width) */}
          <div className="flex flex-col md:col-span-2">
            <label className="to-purple-600 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className={`px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition text-lg ${formData.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={formData.loading}
            >
              {formData.loading ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
