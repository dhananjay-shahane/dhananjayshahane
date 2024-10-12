import React from "react";

const Loader = () => {
  return (
    <div
      className="absolute z-50 flex w-full items-center justify-center bg-neutral-950"
      id="initialLoader"
      style={{ height: "100vh", top: "0px" }}
    >
      <svg className="absolute z-50 flex h-80 md:w-[22rem]" style={{ opacity: 0 }}>
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width="750"
          height="800"
          className="text-white"
        >
          <rect className="h-full w-full fill-current"></rect>
          <rect
            className="h-full w-full fill-current text-neutral-500"
            transform-origin="176px 160px"
            style={{ transform: "translateX(330px)", transformOrigin: "176px 160px" }}
          ></rect>
        </pattern>
        <text
          className="select-none font-amsterdam text-3xl tracking-wider lg:text-3.5xl xl:text-4.5xl"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "#fffff" }}
        >
          Dhananjay Shahane
        </text>
      </svg>
    </div>
  );
};

export default Loader;
