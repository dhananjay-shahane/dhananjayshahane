import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constant/constant";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

   const visibleProjects = projects.filter((project) => {
      if (project.noIndex && typeof window === "undefined") return false;
      return true;
   });

   const displayProject = visibleProjects.slice(0, 3);



  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
  };

  const SkeletonCard = () => (
    <motion.div
      variants={cardVariants}
      className="group relative block h-full w-full p-0 sm:p-2.5"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-transparent bg-gray-100 p-3 md:p-5">
        <div className="relative space-y-5">
          <div className="h-48 w-full rounded-xl bg-gray-200 animate-pulse" />
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-2.5 lg:flex">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="overflow-x-hidden">
      <div className="receptacle space-y-5 max-w-7xl mx-auto p-3">
        <h1 className="text-center font-epilogue text-4xl font-bold text-neutral-900 md:text-5xl">
          Works
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:gap-0 md:grid-cols-2 xl:grid-cols-3">
          {isLoading ? (
            <>
              {[1, 2, 3].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </>
          ) : (
            <AnimatePresence>
              {displayProject.map((project, index) => (
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
                              <FaEye className="h-6 w-6" /> {/* View Icon */}
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

        

        <div className="my-4 flex justify-center items-center">
          {isLoading ? (
            <div className="h-12 w-32 bg-gray-200 rounded-lg animate-pulse" />
          ) : (
            <Link
              to="/projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-neutral-900 text-neutral-200 active:scale-[.95] w-full px-10 py-3 text-sm font-semibold uppercase md:w-auto md:text-base"
            >
              <span>View More</span>
              <div className="skew-12 absolute inset-0 flex h-full w-full translate-x-[-110%] transform justify-center group-hover:translate-x-[100%] duration-1000">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </Link>
          )}
        </div>
      </div>
      <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="md:w-1/2  relative bg-gray-100 flex items-center justify-center">
                  <motion.img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-white font-semibold text-lg">Project Preview</h3>
                  </div>
                </div>

                <div className="p-6 md:w-1/2 space-y-6 overflow-y-auto">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 border-b pb-2">
                      {selectedProject.title}
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      {selectedProject.features && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features</h3>
                          <ul className="space-y-3">
                            {selectedProject.features.map((feature, index) => (
                              <li 
                                key={index}
                                className="flex items-start space-x-2 bg-gray-50 p-3 rounded-lg"
                              >
                                <div className="bg-blue-100 p-1 rounded-full">
                                  <svg
                                    className="h-5 w-5 text-blue-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                                <span className="flex-1 text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium flex-1"
                    >
                      Live Preview
                      <svg
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                    
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg transition-all font-medium flex-1"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </main>
  );
};

export default Work;