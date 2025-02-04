import React, { useState, useEffect } from "react";
import { CircleCheckBig, Globe, Eye } from "lucide-react";
import { projects } from "./constant/constant"; // Import project data

export default function Work() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of data
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time to simulate a loading delay
  }, []);

  return (
    <main className="max-w-6xl mx-auto">
      <div className="container mx-auto px-4 py-4">
        {loading
          ? // Show skeleton loader while loading
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          : // Once data is loaded, map through the projects
            projects.map((item, index) => (
              <div key={index} className="container mx-auto px-4 py-4 my-3 border-2 rounded-lg shadow-md">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h1>
                <p className="text-sm md:text-xl max-w-6xl mb-4 text-gray-500">{item.description}</p>

                {/* Conditional Layout */}
                <div className={`grid gap-8 md:grid-cols-2`}>
                  <ImageSection image={item.image} />
                  <div className="space-y-4">
                    <FeatureList features={item.features} />
                    <TagList tags={item.tags} />
                    <ProjectButtons link={item.link} />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </main>
  );
}

// Skeleton Loader Card (Improved Design with Grid Layout)
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
          <CircleCheckBig className="h-5 w-5 text-green-500 bg-green-200 rounded-full  shrink-0" />
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
