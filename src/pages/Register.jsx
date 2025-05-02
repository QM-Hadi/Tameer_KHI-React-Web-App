import React, { useState } from "react";
import { db } from '../../firebase';
import { ref, set } from "firebase/database";
import { toast, Toaster } from 'react-hot-toast';

const LabourRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    cnic: "",
    skill: "",
    phone: "",
    address: "",
    experience: "",
    loading: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData({ ...formData, loading: true });

    try {
      const formRef = ref(db, 'labour_registrations/' + Date.now());
      await set(formRef, {
        fullName: formData.fullName,
        cnic: formData.cnic,
        skill: formData.skill,
        phone: formData.phone,
        address: formData.address,
        experience: formData.experience,
        timestamp: new Date().toISOString(),
      });

      toast.success('Registration Successful!', {
        style: {
          background: '#4caf50',
          color: '#fff',
          fontWeight: 'bold',
        },
      });

      setFormData({
        fullName: "",
        cnic: "",
        skill: "",
        phone: "",
        address: "",
        experience: "",
        loading: false,
      });
    } catch (error) {
      console.error("Error registering labour: ", error);
      toast.error(`Something went wrong. Please try again.`, {
        style: {
          background: '#f44336',
          color: '#fff',
          fontWeight: 'bold',
        },
      });

      setFormData({ ...formData, loading: false });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-10">
          Labour Registration
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {[
            { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter Full Name" },
            { label: "CNIC Number", name: "cnic", type: "text", placeholder: "e.g., 35202-1234567-8" },
            { label: "Skill Type", name: "skill", type: "text", placeholder: "e.g., Electrician, Mason" },
            { label: "Phone Number", name: "phone", type: "text", placeholder: "e.g., 0300-1234567" },
          ].map((input, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">{input.label}</label>
              <input
                type={input.type}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                required
                placeholder={input.placeholder}
                className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-semibold mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Enter your complete address"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-semibold mb-2">Years of Experience</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              min="0"
              className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 2"
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className={`w-full md:w-auto px-10 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-bold text-lg shadow-md ${formData.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={formData.loading}
            >
              {formData.loading ? "Submitting..." : "Register Now"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LabourRegistration;
