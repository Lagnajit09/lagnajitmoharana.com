import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, image, link, description }) => {
  return (
    <Link to={link} target="_blank" style={{ width: "30%" }}>
      <div
        className=" w-full h-full flex flex-col gap-2 border-2 border-blue-800 rounded-lg overflow-hidden p-1 bg-opacity-5 cursor-pointer"
        style={{ backgroundColor: "#11214a" }}
      >
        <img
          src={image}
          alt={title}
          className="overflow-hidden object-contain rounded-md"
        />
        <div className=" mt-3 flex flex-col p-1">
          <h1 className=" text-gray-300 font-semibold text-lg">{title}</h1>
          <p className=" text-gray-400 text-sm py-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
