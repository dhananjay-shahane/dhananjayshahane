import React from "react";
import { projects } from "./constant/constant.jsx"

// ProjectCard component
const ProjectCard = ({ project }) => {
  return (
    <div
      className="overflow-hidden border-secondary project-card flex flex-col border hover:border-primary bg-[#ffffffb0] hover:scale-[101%] transition-transform"
    >
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl">{project.title}</h2>
        <a href={project.link} className="cursor__pointer">{project.link}</a>
      </div>
      <div className="px-6">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-primary-opacity  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
        
      </div>
    </div>
  );
};

// Main component
const ProjectsSection = () => {
  return (
    <section className="conatiner mx-auto">
      <div className="flex px-5 flex-col">
        <h2 className="text-center text-5xl style_header"><span className="text-secondary style_header">Selected</span> Work</h2>
        <div className="my-10">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard project={project} />
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
