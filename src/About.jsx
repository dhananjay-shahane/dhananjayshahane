import Experience from "./components/Experience";
import superHero from "../src/assets/img/super-hero.jpeg"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Helmet } from 'react-helmet';
const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return (
      <main className="overflow-x-hidden p-4">
        <Helmet>
          <title>About | Dhananjay Shahane</title>
        </Helmet>

        <div className="wrapper space-y-5 py-10 md:py-28 max-w-7xl mx-auto">
          <div className="grid h-full gap-5 md:grid-cols-12 md:gap-10">
            {/* Left Column Skeleton */}
            <div className="flex flex-col items-start justify-center space-y-2.5 md:col-span-8">
              {/* Headline Skeleton */}
              <div className="mb-3 h-26 w-full bg-gray-200 rounded-xl animate-pulse md:h-36"></div>

              {/* Grid Skeleton */}
              <div className="w-full space-y-2.5">
                <div className="grid grid-cols-1 gap-2.5 md:grid-cols-12">
                  <div className="row-span-2 h-32 bg-gray-200 rounded-xl animate-pulse lg:col-span-9"></div>
                  <div className="row-span-2 h-32 bg-gray-200 rounded-xl animate-pulse lg:col-span-3"></div>
                </div>
              </div>

              {/* Stats Grid Skeleton */}
              <div className="w-full space-y-2.5">
                <div className="grid grid-cols-1 gap-2.5 md:grid-cols-12">
                  <div className="row-span-2 h-32 bg-gray-200 rounded-xl animate-pulse lg:col-span-6"></div>
                  <div className="row-span-4 h-64 bg-gray-200 rounded-xl animate-pulse lg:col-span-6"></div>
                  <div className="row-span-2 h-32 bg-gray-200 rounded-xl animate-pulse lg:col-span-3"></div>
                  <div className="row-span-2 h-32 bg-gray-200 rounded-xl animate-pulse lg:col-span-3"></div>
                </div>
              </div>
            </div>

            {/* Right Column Skeleton (Image) */}
            <div className="bg-gray-200 rounded-xl animate-pulse md:col-span-4"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden p-4">
      <Helmet>
        <title>About | Dhananjay Shahane</title>
      </Helmet>

      <div className="wrapper space-y-5 py-10 md:py-28 max-w-7xl mx-auto">
        <div className="grid h-full gap-5 md:grid-cols-12 md:gap-10">
          <div className="flex flex-col items-start justify-center space-y-2.5 md:col-span-8">
            <h1 className="headline mb-3 text-start font-epilogue text-2xl font-bold text-neutral-900 md:text-5xl">
              By Day a Front End Developer, By Night a Superhero — Here I Am!
            </h1>
            <div className="grid grid-cols-1 gap-2.5 md:grid-cols-12">
              <div className="rounded-xl bg-gray-100 p-2.5 md:col-span-12 md:p-5">
                <p className="text-base text-neutral-900 md:text-xl">
                  <strong>Transforming startups of all scales</strong> with bespoke web experiences that leave a mark and drive growth. Fueled by a love for design and development, I oversee projects from initial concepts to final launch, ensuring a flawless process that makes a lasting impression in the digital realm.
                </p>
              </div>
              <div className="rounded-xl bg-gray-100 p-2.5 md:col-span-9 md:p-5">
                <p className="text-base text-neutral-900 md:text-xl">
                  My name is <strong>Dhananjay Shahane</strong>, and I'm passionate about building digital products, from websites to applications and everything in between. My fascination with computers ignited at a young age, and I've been refining my technical expertise ever since, with the goal of creating my own innovations. Thus, I embarked on my journey as a front end developer.
                </p>
              </div>
              <div className="flex cursor-pointer items-center justify-center rounded-xl bg-gray-100 p-2.5 md:col-span-3 md:p-5">
                <Link
                  className="relative font-epilogue font-bold text-neutral-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-neutral-800 after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0 md:text-2xl"
                  to="/contact"
                >
                  Hire Me?
                </Link>
              </div>
            </div>
            <div className="w-full space-y-2.5">
              <div className="grid w-full grid-cols-1 grid-rows-4 gap-2.5 lg:grid-cols-12">
                <div className="row-span-2 flex flex-col justify-center space-y-1.5 rounded-xl bg-gray-100 p-2.5 md:p-5 lg:col-span-6">
                  <h3 className="font-epilogue text-sm font-bold text-neutral-900 md:text-lg">
                    My Age
                  </h3>
                  <p className="text-lg font-medium text-neutral-900 md:text-2xl">
                    24 Years
                  </p>
                </div>
                <div className="relative row-span-4 overflow-hidden rounded-xl bg-gray-100 lg:col-span-6">
                  <h3 className="px-2.5 pt-2.5 font-epilogue text-sm font-bold text-neutral-900 md:px-5 md:pt-5 md:text-lg">
                    Location: Ahmedabad, Gujarat, India
                  </h3>
                  <div className="absolute bottom-[-30%] right-0 mx-auto aspect-square sm:h-[200%] md:h-[150%] lg:bottom-[-50%] lg:right-[-20%] [@media(max-width:640px)]:h-[140px]">

                  </div>
                </div>
                <div className="relative row-span-2 overflow-hidden rounded-xl bg-gray-100 p-2.5 md:p-5 lg:col-span-3">
                  <div className="space-y-1 md:space-y-2.5">
                    <h3 className="font-epilogue text-sm font-bold text-neutral-900 md:text-lg">
                      GitHub Stars
                    </h3>
                    <p className="text-lg font-medium text-neutral-900 md:text-2xl">
                      <span className="inline-block tabular-nums undefined">10</span>+
                    </p>
                  </div>
                </div>
                <div className="row-span-2 space-y-1 rounded-xl bg-gray-100 p-2.5 md:space-y-2.5 md:p-5 lg:col-span-3">
                  <h3 className="font-epilogue text-sm font-bold text-neutral-900 md:text-lg">
                    Projects Completed
                  </h3>
                  <p className="text-lg font-medium text-neutral-900 md:text-2xl">
                    <span className="inline-block tabular-nums undefined">5</span>+
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group overflow-hidden rounded-xl md:col-span-4">
            <img alt="About Me" loading="lazy" width="300" height="500" decoding="async" data-nimg="1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={'https://cdn.prod.website-files.com/63957415c9d3c7c02d068332/67e59106600b2658f5ba6de5_Chris.avif'} />
          </div>
        </div>
      </div>

      <Experience />
    </main>
  );
};

export default About;
