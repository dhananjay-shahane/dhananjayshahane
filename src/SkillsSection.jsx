import React from "react";
import { skills } from "./constant/constant.jsx";

const SkillsSection = () => {
  return (
    <section className="conatiner mx-auto">
      <h2 className="text-center text-5xl style_header"><span className="text-secondary  style_header">Techno</span>logies</h2>
      <div className="text-[26px] text-white my-10">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center sm:justify-start justify-center sm:flex-row sm:align-middle border rounded-md border-transparent px-6 py-4 bg-[#ffffffb0] shadow-sm sm:hover:scale-105 transition-transform"
                >
                  <div className="mb-1 sm:mr-4 flex align-middle">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          alt={skill.name}
                          aria-hidden="true"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                        />
                      </span>
                      <img
                        alt={skill.name}
                        srcSet={`${skill.src} 1x, ${skill.src} 2x`}
                        src={skill.src}
                        decoding="async"
                        style={{
                          position: "absolute",
                          inset: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </span>
                  </div>
                  <p className="flex align-middle text-xl m-0 p-0 text-gray-600">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
    </section>
  );
};

export default SkillsSection;
