import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";
import { FiPhone } from "react-icons/fi";

const Home = () => {
  return (
    <section
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black to-slate-500 px-4 md:px-20 gap-14"
      id="home"
    >
      {/* Profile Image with larger size */}
      <motion.img
        src={profileImage}
        alt="Arun Sujith"
        className="w-52 h-52 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Text Content */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-5xl font-bold mb-4 text-white">👋 Hi,</h1>
        <h2 className="text-5xl md:text-5xl font-bold mb-4 text-white">I'm Arun Sujith</h2>
        <p className="text-xl md:text-2xl mb-6 text-white ">
          Web Developer 💻 <span className="text-orange-600">|</span> Frontend Enthusiast
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/Arun_Sujith_CV.pdf"
            download
            className="bg-orange-600 text-white px-8 py-4 text-lg rounded-xl hover:bg-blue-600 transition"
          >
            📄 Download CV
          </a>
          <a
            href="#contact"
            className="bg-orange-600 text-white px-8 py-4 text-lg rounded-xl hover:bg-blue-600 transition flex items-center gap-2"
          >
            <FiPhone className="text-white text-xl" /> Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
