import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import SoundVoter from "./components/Projects/SoundVoter";
import BiteBuddy from "./components/Projects/BiteBuddy";
import WeatherDashboard from "./components/Projects/WeatherDashboard";
import TextEditor from "./components/Projects/TextEditor";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/soundvoter" element={<SoundVoter />} />
        <Route path="/projects/text-editor" element={<TextEditor />} />
        <Route path="/projects/bite-buddy" element={<BiteBuddy />} />
        <Route
          path="/projects/weather-dashboard"
          element={<WeatherDashboard />}
        />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
