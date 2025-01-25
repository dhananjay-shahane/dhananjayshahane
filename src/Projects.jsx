import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { projects } from "./constant/constant";

// Define motion variants for project cards
const cardVariants = {
  hidden: { opacity: 10, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Work = () => {
  // Simulate loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);     
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Helmet>
        <title>Work | Dhananjay Shahane</title>
      </Helmet>
      <div className="receptacle space-y-5 max-w-7xl mx-auto p-3">
        <h1 className="text-center font-epilogue text-4xl font-bold text-neutral-900 md:text-5xl">
          Works
        </h1>

        {/* Skeleton Loader Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {isLoading
            ? [1, 2, 3 ,4 ,5, 6].map((skeleton, index) => (
                <motion.div
                  key={index}
                  className="relative h-full w-full overflow-hidden rounded-2xl shadow-sm bg-gray-100 p-3 md:p-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Skeleton content */}
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
              ))
            : projects.map((project, index) => (
                <motion.a
                  href={project.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full w-full p-0 sm:p-2.5"
                  custom={index}
                  variants={cardVariants}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl  bg-gray-100 p-3 md:p-5">
                    <div className="relative space-y-5">
                      <div className="relative">
                        <img
                          alt="Project"
                          loading="lazy"
                          width="800"
                          height="500"
                          decoding="async"
                          className="h-full rounded-xl object-cover shadow-xl"
                          srcSet={project.image}
                          src={project.image}
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
              ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Work;
