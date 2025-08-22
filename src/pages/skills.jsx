import React from 'react';
import cpplogo from '../assets/cpplogo.png';
import pythonlogo from '../assets/pythonlogo.gif';
import tailwindlogo from '../assets/tailwindlogo.png';
import htmlLogo from '../assets/html.gif';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.gif';
import reactLogo from '../assets/react.gif';

const skills = [
  { name: 'Python', logo: pythonlogo },
  { name: 'C++', logo: cpplogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'Tailwind', logo: tailwindlogo },
  { name: 'React', logo: reactLogo },
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-black to-slate-500 text-white py-10 px-4" id="skills">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">My Skills</h2>

      {/* Row 1: 4 skills */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-6">
        {skills.slice(0, 4).map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:scale-105 transition w-full"
          >
            <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
            <p className="text-xl font-semibold text-black">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Row 2: 3 skills, centered */}
      <div className="grid grid-cols-3 gap-6 max-w-[640px] mx-auto">
        {skills.slice(4).map((skill, index) => (
          <div
            key={index + 4}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:scale-105 transition w-full"
          >
            <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
            <p className="text-xl font-semibold text-black">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
