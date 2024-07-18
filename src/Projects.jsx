import React from 'react';
import restaurantWebsiteImage from './assets/img/restaurant-website.png';
import fitnessWebsiteImage from './assets/img/Fitness-website.png';
import BlueRexWebsiteImage from './assets/img/BlueRex-website.png';
import FoodDahboardWebsiteImage from './assets/img/Food-Dashboard.png';
import netFlixWebsiteImage from './assets/img/NetFlix-banner.png';
import colorsWebsiteImage from './assets/img/Colors-website.png';



// Array of project data
const projects = [
  {
    title: 'Restaurant Website',
    image: restaurantWebsiteImage,
    description: "A dynamic restaurant website with features like menu browsing, cart management, and online ordering. Built using React JS and Tailwind CSS.",
    tags: ['React JS', 'Tailwind CSS'],
    link: 'https://restaurant-io-eta.vercel.app'
  },
  {
    title: 'Food Hunt Dashboard',
    image: FoodDahboardWebsiteImage,
    description: 'A comprehensive dashboard for managing restaurant operations, including order tracking and analytics. Developed with Tailwind CSS.',
    tags: ['Tailwind CSS'],
    link: 'https://restaurants-admin-panel.vercel.app'
  },
  {
    title: 'Fitness Website',
    image: fitnessWebsiteImage,
    description: 'A fitness landing page designed to showcase workout plans, trainers, and health tips. Converted from Photoshop to HTML, using HTML and CSS.',
    tags: ['HTML', 'CSS', 'Photoshop to HTML'],
    link: 'https://fitness-website-coral.vercel.app'
  },
  {
    title: 'BlueRex Landing Page',
    image: BlueRexWebsiteImage,
    description: 'A sleek and modern landing page for a tech startup. Designed and implemented using HTML and CSS.',
    tags: ['HTML', 'CSS', 'Photoshop to HTML'],
    link: ''
  },
  {
    title: 'Netflix Clone',
    image: netFlixWebsiteImage,
    description: 'A Netflix clone with a similar user interface, showcasing movies and TV shows. Built using HTML and CSS.',
    tags: ['HTML', 'CSS'],
    link: 'https://netflixclone-website.vercel.app'
  },
  {
    title: 'Colors Website',
    image: colorsWebsiteImage,
    description: 'A vibrant website featuring color palettes and themes, with interactive elements. Developed with HTML, Tailwind CSS, and JavaScript.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
    link: 'https://colors-website-2023.vercel.app'
  },
];




// ProjectCard component
const ProjectCard = ({ project }) => {
  return (
    <a href={project.link} className="rounded-lg overflow-hidden flex flex-col border border-transparent hover:border-sky-400 bg-[#ffffffb0] hover:scale-[101%] transition-transform">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-2 pb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

// Main component
const ProjectsSection = () => {
  return (
    <section>
      <div className="container max-w-[1200px] mx-auto flex px-5 py-8 flex-col">
        <p className="text-3xl sm:text-4xl text-gray-600">
          My <span className="font-semibold text-sky-400">Projects</span>
        </p>
        <div className="pt-8">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard project={project} className='shadow-sm' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
