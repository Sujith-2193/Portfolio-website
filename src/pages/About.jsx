// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="py-24 px-6 md:px-10 w-full bg-gradient-to-r from-black to-slate-500"
      id="about"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
          About Me
        </h2>

        <p className="text-lg md:text-xl bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent font-semibold italic mb-6">
          I'm a passionate web developer with experience building responsive websites
          using React, Tailwind CSS, and modern JavaScript frameworks.
        </p>

        <p className="text-lg md:text-xl bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent font-semibold italic">
          Currently pursuing B.Tech in Electronics Engineering (3rd Year) at
          <span className="ml-2 font-extrabold text-white underline">
            IIT (BHU) Varanasi
          </span>.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
