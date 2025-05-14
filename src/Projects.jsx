import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./constant/constant";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  const visibleProjects = projects.filter((project) => {
    if (project.noIndex && typeof window === "undefined") return false;
    return true;
  });

  return (
    <main className="overflow-x-hidden mb-10">
      <div className="receptacle space-y-5 max-w-7xl mx-auto p-3">
        <h1 className="text-center font-epilogue text-4xl font-bold text-neutral-900 md:text-5xl">
          Works
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:gap-0 md:grid-cols-2 xl:grid-cols-3">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="group relative block h-full w-full p-0 sm:p-2.5"
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-transparent bg-gray-100 p-3 md:p-5">
                  <div className="relative space-y-5">
                    <div className="relative">
                      <div className="h-48 w-full rounded-xl bg-gray-200 animate-pulse" />
                    </div>
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse" />
                        <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                      </div>
                      <div className="grid grid-cols-2 gap-2.5 lg:flex">
                        {Array.from({ length: 3 }).map((_, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <AnimatePresence>
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  className="group relative block h-full w-full p-0 sm:p-2.5"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl border border-transparent bg-gray-100 p-3 md:p-5">
                    <div className="relative space-y-5">
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          alt={project.title}
                          loading="lazy"
                          className="h-48 w-full object-cover shadow-xl"
                          src={project.image}
                        />
                      </div>
                      <div className="space-y-5">
                        <div className="flex items-center justify-between text-neutral-900">
                          <h1 className="font-epilogue text-xl font-semibold md:text-3xl">
                            {project.title}
                          </h1>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                            >
                              <FaEye className="h-6 w-6" />
                            </button>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          </div>
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
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
      {/* Modal code stays the same (not repeated for brevity) */}
    </main>
  );
};

export default Work;
