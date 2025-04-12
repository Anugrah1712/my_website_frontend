// About.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Stats from './pages/Stats';
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { Chatbot } from '@anugrah17/rag-chatbot-widget';
// import '@anugrah17/rag-chatbot-widget/chatbot-widget.css';

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
      {/* <Chatbot /> */}
      <Footer />  
    </Router>
  );
}

export default App;
