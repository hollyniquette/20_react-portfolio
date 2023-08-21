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
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12 py-8">
        {/* TO DO: ADD PROJECT DESCRIPTIONS & LINKS */}
        <a href="projects/project-1">
          <ProjectCard img={placeholderImg} title="Project 1" />
        </a>
        <ProjectCard img={placeholderImg} title="Project 2" />
        <ProjectCard img={placeholderImg} title="Project 3" />
        <ProjectCard img={placeholderImg} title="Project 4" />
      </div>
    </div>
  );
}

export default Projects;
