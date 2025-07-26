import React from "react";
import favicon from "../assets/favicon.png"; // 🔁 import your favicon image

const Navbar = () => {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black to-slate-500 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={favicon} alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-extrabold text-white">My Portfolio</h1>
        </div>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-blue-900 transition font-bold text-blue-200 text-lg"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
