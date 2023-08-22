import React from "react";
import ProjectCard from "./ProjectCard";
// TO DO: Import images

function Projects() {
  return (
    <div id="projects" className="max-w-[1600px] m-auto mt-20 p-8 py-28">
      <div className="grid flex-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
        {/* TO DO: ADD PROJECT DESCRIPTIONS & LINKS */}
        <a href="#/projects/soundvoter">
          <ProjectCard title="SoundVoter" />
        </a>
        <a href="#/projects/text-editor">
          <ProjectCard title="text editor" />
        </a>
        <a href="#/projects/bite-buddy">
          <ProjectCard title="bite buddy" />
        </a>
        <a href="#/projects/weather-dashboard">
          <ProjectCard title="weather dashboard" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
