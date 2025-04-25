import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Animation ke liye

const Comment = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedComment = comment.trim();

    if (!trimmedEmail || !trimmedSubject || !trimmedComment) {
      alert('Error: Please fill in all the fields.');
      return;
    }

    console.log('Email =>', trimmedEmail);
    console.log('Subject =>', trimmedSubject);
    console.log('Comment =>', trimmedComment);
    alert('Comment submitted successfully!');

    setEmail('');
    setSubject('');
    setComment('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-50 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-2xl backdrop-blur-md"
      >
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-10">
          Share Your Thoughts
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 w-full text-gray-700"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-300 w-full text-gray-700"
          />
          <textarea
            placeholder="Enter Your Comment"
            rows={5}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 w-full resize-none text-gray-700"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-500 transition-all duration-500 mt-6 shadow-lg"
          >
            Submit Comment
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Comment;
