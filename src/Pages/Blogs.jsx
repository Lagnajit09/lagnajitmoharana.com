import React, { useEffect, useState } from "react";
import { blogs } from "../constants/blogs";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div className="w-[75vw] m-auto flex gap-10 flex-wrap py-16">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          image={blog.image}
          title={blog.name}
          link={blog.link}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default Blogs;
