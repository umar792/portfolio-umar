import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Conatact from "./Pages/Conatact";
import Blog from "./Pages/Blog";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Conatact />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
