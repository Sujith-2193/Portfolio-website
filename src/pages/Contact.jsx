import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SiCodeforces } from "react-icons/si"; // ✅ Codeforces icon

const Contact = () => {
  return (
    <section
      className="py-20 px-4 md:px-6 bg-gradient-to-r from-black to-slate-500"
      id="contact"
    >
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Contact</h2>
        <p className="mb-6 text-white text-sm md:text-base font-bold">
          Email : matluriarunsujith@gmail.com
        </p>
        <h1 className="mb-6 text-white text-sm md:text-base font-bold">
          Ph.No - 7989539861
        </h1>

        <div className="flex justify-center space-x-6 text-2xl text-blue-600">
          <a
            href="https://github.com/Sujith-2193"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/arunsujith2193"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/ArunSujith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/arun_sujith_1371"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://codeforces.com/profile/Sujith_2193"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
