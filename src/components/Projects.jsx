import React from "react";
import { projects } from "../constant/constant"

const Work = () => {
  return (
    <main className="overflow-x-hidden">
      <div className="receptacle space-y-5 max-w-7xl mx-auto p-3 ">
        <h1 className="text-center font-epilogue text-4xl font-bold text-neutral-900 md:text-5xl">
          Works
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:gap-0 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            return (
              <a
                href={project.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full w-full p-0 sm:p-2.5"
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-transparent shadow-sm bg-gray-100 p-3 md:p-5">
                  <div className="relative space-y-5">
                    <div className="relative">
                      <img
                        alt="HotNewHipHop"
                        loading="lazy"
                        width="800"
                        height="500"
                        decoding="async"
                        data-nimg="1"
                        className="h-full rounded-xl object-cover shadow-xl"
                        srcset={project.image}
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
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="text-2xl"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
              </a>
            )
          })}
        </div>
      </div>
    </main>
  );
};

export default Work;
