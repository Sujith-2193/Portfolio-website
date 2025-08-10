import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio site highlighting my work, skills, and resume, aimed at connecting with potential collaborators or employers.",
    link: "https://github.com/Sujith-2193/Portfolio-website",
  },
  {
    title: "Phytoscan",
    description: "A smart chatbot built using ML and data from various plant leaves, capable of detecting and diagnosing plant diseases with precision",
    link: "https://github.com/Sujith-2193/Phytoscan",
  },
  {
    title: "IconDeck",
    description: "A world of personalized file folder icons to transform your PC into a reflection of your style.",
    link: "https://github.com/Sujith-2193/IconDeck",
  },
];

const Projects = () => {
  return (
    <section
      className="py-20 px-4 md:px-6 bg-gradient-to-r from-black to-slate-500"
      id="projects"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">
          Projects
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row */}
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}

          {/* Empty placeholder to center IconDeck */}
          <div></div>

          {/* Second Row - Centered IconDeck */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 md:col-start-2"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              {projects[2].title}
            </h3>
            <p className="text-gray-700 mb-4">{projects[2].description}</p>
            <a
              href={projects[2].link}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

