import React, { useState } from "react";

const TestimonialSlider = () => {
  return (
    <div className="receptacle space-y-10 py-10 md:py-20 lg:py-28 max-w-7xl mx-auto p-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="space-y-2.5 lg:col-span-9">
          <h1 className="text-start font-epilogue text-2xl font-bold text-neutral-900 md:text-5xl">
            Preferred &amp; Endorsed by Industry Experts!
          </h1>
          <p className="text-base text-neutral-500 md:text-xl">
            Client satisfaction is a top priority for me, so I'm grateful for
            all the positive feedback from the people I got to collaborate with.
          </p>
        </div>
        <div className="flex items-center justify-start gap-2.5 md:gap-5 lg:col-span-3 lg:justify-center">
          <button className="rounded-lg border border-neutral-300 px-2 py-1.5 transition-transform duration-100 active:scale-90 md:py-0.5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="size-6 text-neutral-900 md:size-8"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
            </svg>
          </button>
          <button className="rounded-lg border border-neutral-300 px-2 py-1.5 transition-transform duration-100 active:scale-90 md:py-0.5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="size-6 text-neutral-900 md:size-8"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
