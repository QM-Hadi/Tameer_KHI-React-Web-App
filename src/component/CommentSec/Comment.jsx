import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Animation for comments

const Comment = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedComment = comment.trim();

    if (!trimmedEmail || !trimmedSubject || !trimmedComment) {
      alert('Error: Please fill in all the fields.');
      return;
    }

    const newComment = {
      id: Date.now(), // Unique id
      email: trimmedEmail,
      subject: trimmedSubject,
      comment: trimmedComment,
    };

    setCommentsList([newComment, ...commentsList]); // New comment at top
    setEmail('');
    setSubject('');
    setComment('');
    alert('Comment submitted successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-blue-50 via-white to-purple-50 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-2xl backdrop-blur-md mb-10"
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

      {/* Comments Section */}
      <div className="w-full max-w-4xl p-6 bg-white rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Recent Comments
        </h2>

        <div className="flex flex-col gap-6 max-h-[400px] overflow-y-auto pr-2">
          <AnimatePresence>
            {commentsList.length > 0 ? (
              commentsList.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.subject}</h3>
                  <p className="text-gray-600 mb-4">{item.comment}</p>
                  <div className="text-right text-sm text-gray-500 italic">- {item.email}</div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-400">No comments yet. Be the first to comment!</p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Comment;
