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

const BASE = "/20_react-portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/20_react-portfolio/About" element={<About />} />
        <Route path="/20_react-portfolio/projects" element={<Projects />} />
        <Route
          path="/20_react-portfolio/projects/soundvoter"
          element={<SoundVoter />}
        />
        <Route
          path="/20_react-portfolio/projects/text-editor"
          element={<TextEditor />}
        />
        <Route
          path="/20_react-portfolio/projects/bite-buddy"
          element={<BiteBuddy />}
        />
        <Route
          path="/20_react-portfolio/projects/weather-dashboard"
          element={<WeatherDashboard />}
        />
        <Route path="/20_react-portfolio/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
