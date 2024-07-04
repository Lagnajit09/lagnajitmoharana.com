import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
