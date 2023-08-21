import React from "react";
import ProjectCard from "./ProjectCard";
// TO DO: Import images
import placeholderImg from "../assets/placeholder.jpg";

function Projects() {
  // const [info, setInfo] = useState(false);
  // const handleInfo = () => {
  //   setInfo(!Info);
  // };

  return (
    <div id="projects" className="max-w-[1040px] m-auto p-4 py-28">
      <div className="grid sm:grid-cols-2 gap-12 py-8">
        {/* TO DO: ADD PROJECT DESCRIPTIONS & LINKS */}
        <a href="projects/soundvoter">
          <ProjectCard title="SoundVoter" />
        </a>
        <a href="projects/project2">
          <ProjectCard title="project 2" />
        </a>
        <a href="projects/bite-buddy">
          <ProjectCard title="bite buddy" />
        </a>
        <a href="projects/weather-dashboard">
          <ProjectCard title="weather dashboard" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
