import React from "react";
import { PiGraduationCapFill } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { MdArticle } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    navigate("/");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const iconStyle = {
  //   width: "36px",
  //   height: "36px",
  //   color: "#f3f4f6",
  //   cursor: "pointer",
  //   "&:hover": {
  //     color: "cyan",
  //   },
  // };

  const iconStyle = "w-9 h-9 text-gray-200 cursor-pointer hover:text-cyan-500";

  return (
    <div className="hidden md:flex flex-col h-[100vh] fixed left-0 top-0 p-5 gap-12 justify-center">
      <a href="/">
        <FaHome className={iconStyle} />
      </a>
      <a href="#education" onClick={(e) => handleScroll(e, "education")}>
        <PiGraduationCapFill className={iconStyle} />
      </a>
      <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
        <GrProjects className={iconStyle} />
      </a>
      <a href="/blogs">
        <MdArticle className={iconStyle} />
      </a>
      <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
        <IoMdContact className={iconStyle} />
      </a>
    </div>
  );
};

export default Navbar;
