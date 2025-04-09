// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Menu from "./pages/Menu/Menu";
import Event from "./pages/Event/Event";
import News from "./pages/News/News";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import StickyHeader from "./components/StickyHeader"; // ✅ correct

const App = () => {
  return (
    <Router>
      <Routes></Routes>
      <Navbar />
      <StickyHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/event" element={<Event />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
