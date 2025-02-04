import React, { useState, useEffect } from "react";
import { CircleCheckBig, Globe, Eye } from "lucide-react";
import { projects } from "../constant/constant";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const displayProjects = projects.slice(0, 2);

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
          displayProjects.map((item, index) => (
            <div
              key={index}
              className="container mx-auto px-4 py-4 my-3 border-2 rounded-lg shadow-md"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h1>
              <p className="text-sm md:text-xl max-w-6xl mb-4 text-gray-500">
                {item.description}
              </p>

              {/* Conditional Layout */}
              <div
                className={`grid gap-8 md:grid-cols-2 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <ImageSection image={item.image} />
                <div className="space-y-4">
                  <FeatureList features={item.features} />
                  <TagList tags={item.tags} />
                  <ProjectButtons link={item.link} />
                </div>
              </div>
            </div>
          ))
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

function SkeletonCard() {
  return (
    <div className="animate-pulse p-4 bg-gray-200 rounded-lg shadow-md">
      {/* Skeleton for Title */}
      <div className="h-8 w-3/4 bg-gray-300 rounded-md mb-4"></div>
      {/* Skeleton for Description */}
      <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-4"></div>
      {/* Skeleton for Image */}
      <div className="h-48 bg-gray-300 rounded-md mb-4"></div>
      {/* Skeleton for Tags */}
      <div className="flex gap-2 mb-4">
        <div className="h-5 w-20 bg-gray-300 rounded-md"></div>
        <div className="h-5 w-20 bg-gray-300 rounded-md"></div>
      </div>
      {/* Skeleton for Buttons */}
      <div className="flex gap-4 mt-4">
        <div className="h-10 w-28 bg-gray-300 rounded-md"></div>
        <div className="h-10 w-28 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
}

function FeatureList({ features }) {
  return (
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <CircleCheckBig className="h-5 w-5 text-green-500 bg-green-200 rounded-full shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectButtons({ link }) {
  return (
    <div className="flex gap-4 mt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border border-gray-700 text-gray-700 px-4 py-2 rounded-lg transition hover:bg-gray-900 hover:text-white hover:scale-105"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden md:block">Visit Website</span>
      </a>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border border-gray-700 text-gray-700 px-4 py-2 rounded-lg transition hover:bg-gray-900 hover:text-white hover:scale-105"
      >
        <Eye className="h-5 w-5" />
        <span className="hidden md:block">
          Live Preview
        </span>
      </a>
    </div>
  );
}

function ImageSection({ image }) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-lg shadow-2xl shadow-neutral-400">
        <img
          src={image}
          alt="Project Preview"
          className="object-cover w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
