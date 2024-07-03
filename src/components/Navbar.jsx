import React from "react";
import { PiGraduationCapFill } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { MdArticle } from "react-icons/md";

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col h-[100vh] fixed left-0 top-0 p-5 gap-12 justify-center">
      <a href="#education" onClick={(e) => handleScroll(e, "education")}>
        <PiGraduationCapFill className="w-9 h-9 text-gray-100 hover:text-white cursor-pointer" />
      </a>
      <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
        <GrProjects className="w-7 h-7 text-gray-100 hover:text-white cursor-pointer" />
      </a>
      <a href="#articles" onClick={(e) => handleScroll(e, "articles")}>
        <MdArticle className="w-8 h-8 text-gray-100 hover:text-white cursor-pointer" />
      </a>
      <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
        <IoMdContact className="w-9 h-9 text-gray-100 hover:text-white cursor-pointer" />
      </a>
    </div>
  );
};

export default Navbar;
