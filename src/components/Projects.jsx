import React, { useState, useEffect } from "react";
import { projects } from "../constant/constant";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const displayProjects = projects.slice(0, 3);

  // Simulate loading delay (e.g., for fetching data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulated loading time, adjust as necessary
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <div className="receptacle space-y-5 max-w-7xl mx-auto p-3">
        <h1 className="text-center font-epilogue text-4xl font-bold text-neutral-900 md:text-5xl">
          Works
        </h1>
        
        {/* Loading skeleton animation */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5 sm:gap-0 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((skeleton, index) => (
              <motion.div
                key={index}
                className="relative h-full w-full overflow-hidden rounded-2xl border border-transparent shadow-sm bg-gray-100 p-3 md:p-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="animate-pulse space-y-5">
                  <div className="h-48 bg-gray-300 rounded-xl"></div>
                  <div className="space-y-3">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Render Actual Project Cards with Scroll Animation
          <div className="grid grid-cols-1 gap-5 sm:gap-0 md:grid-cols-2 xl:grid-cols-3">
            {displayProjects.map((project, index) => {
              return (
                <motion.a
                  href={project.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full w-full p-0 sm:p-2.5"
                  initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
                  whileInView={{ opacity: 1, y: 0 }} // Final state (visible and in place)
                  transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay for smooth reveal
                  viewport={{ once: true }} // Ensures the animation runs only once when in view
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl border border-transparent shadow-sm bg-gray-100 p-3 md:p-5">
                    <div className="relative space-y-5">
                      <div className="relative">
                        <img
                          alt="Project"
                          loading="lazy"
                          width="800"
                          height="500"
                          decoding="async"
                          data-nimg="1"
                          className="h-full rounded-xl object-cover shadow-xl"
                          src={project.image}
                          srcSet={project.image}
                        />
                      </div>
                      <div className="space-y-5">
                        <div className="flex items-center justify-between text-neutral-900">
                          <div className="space-y-1">
                            <h1 className="font-epilogue text-xl font-semibold md:text-3xl">
                              {project.title}
                            </h1>
                          </div>
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="text-2xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            ></path>
                          </svg>
                        </div>
                        <p className="line-clamp-3 text-sm text-neutral-500 md:text-lg">
                          {project.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2.5 lg:flex">
                          {project.tags.map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}
        
        <div className="flex items-center justify-center mt-5">
          <Link
            to="/Projects"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-neutral-900 text-neutral-200 active:scale-[.95] w-full px-10 py-3 text-sm font-semibold uppercase md:w-auto md:text-base"
            aria-label="View More"
          >
            <span>View More</span>
            <div className="skew-12 absolute inset-0 flex h-full w-full translate-x-[-110%] transform justify-center group-hover:translate-x-[100%] duration-1000">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Work;
