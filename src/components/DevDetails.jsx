import { useState, useEffect } from "react";

const DevDetails = () => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <div className="py-10 md:py-20 lg:py-28 max-w-7xl mx-auto p-5">
        <div className="receptacle space-y-10">
          {/* Heading Skeleton */}
          <div className="space-y-2.5">
            <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse md:h-14"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse md:h-7"></div>
          </div>

          {/* Grid Skeleton */}
          <div className="grid w-full auto-rows-[20rem] grid-cols-1 gap-5 md:grid-cols-12">
            {/* Project Highlights Skeleton */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-100 md:col-span-6 lg:col-span-8 animate-pulse">
              <div className="absolute inset-0 bg-gray-200 opacity-20"></div>
              <div className="z-10 flex flex-col gap-4 p-5">
                <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
                <div className="space-y-3">
                  <div className="h-8 bg-gray-300 rounded w-2/5"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
              <div className="absolute bottom-0 w-full p-5">
                <div className="h-12 bg-gray-300 rounded-lg"></div>
              </div>
            </div>

            {/* Technologies Skeleton */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gray-100 md:col-span-6 lg:col-span-4 animate-pulse">
              <div className="z-10 flex flex-col gap-4 p-5">
                <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
                <div className="space-y-3">
                  <div className="h-8 bg-gray-300 rounded w-2/5"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
              <div className="absolute bottom-0 w-full p-5">
                <div className="h-12 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 md:py-20 lg:py-28 max-w-7xl mx-auto p-5">
      <div className="receptacle space-y-10">
        <div className="space-y-2.5">
          <h1 className="text-start font-epilogue text-2xl font-bold text-neutral-900 md:text-5xl">
            Turning Your Ideas into Reality!
          </h1>
          <p className="text-base text-neutral-500 md:text-xl">
            Building modern, high-quality web solutions that reflect your vision and goals.
          </p>
        </div>

        <div className="grid w-full auto-rows-[20rem] grid-cols-1 gap-5 md:grid-cols-12">
          {/* Project Highlights */}
          <div className="group relative flex transform-gpu flex-col justify-between overflow-hidden rounded-2xl bg-gray-100 md:col-span-6 lg:col-span-8">
            <div>
              <div className="absolute h-full w-full overflow-hidden opacity-20 [perspective:200px]">
                <div className="absolute inset-0 [transform:rotateX(45deg)]">
                  <div className="inset-0 h-screen animate-move bg-repeat [background-image:linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_0)] [background-size:60px_30px] [transform-origin:100%_0_0]"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent to-60%"></div>
              </div>
            </div>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 space-y-1.5 p-5 transition-all duration-300 group-hover:-translate-y-10">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-10 origin-left transform-gpu text-neutral-900 transition-all duration-300 ease-in-out group-hover:scale-[.80]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M13 5h8"></path>
                <path d="M13 9h5"></path>
                <path d="M13 15h8"></path>
                <path d="M13 19h5"></path>
                <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
              </svg>
              <h3 className="font-epilogue text-xl font-semibold text-neutral-900 md:text-3xl">
                Project Highlights
              </h3>
              <p className="max-w-2xl text-sm text-neutral-500 md:text-base">
                Explore some of my top projects, from dynamic e-commerce platforms to sleek portfolio websites. Each project showcases my ability to deliver responsive, high-performance, and aesthetically pleasing solutions tailored to specific client needs.
              </p>
            </div>
            <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="https://cal.com/dhananjayshahane"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border group pointer-events-auto flex w-full items-center gap-x-2 bg-black px-5 py-2.5 text-sm uppercase text-white"
              >
                Schedule a call
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="text-base md:text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Technologies and Tools Used */}
          <div className="group relative flex transform-gpu flex-col justify-between overflow-hidden rounded-2xl bg-gray-100 md:col-span-6 lg:col-span-4">
            <div>
              <div className="absolute left-0 top-0 w-full"></div>
            </div>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 space-y-1.5 p-5 transition-all duration-300 group-hover:-translate-y-10">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                className="size-10 origin-left transform-gpu text-neutral-900 transition-all duration-300 ease-in-out group-hover:scale-[.80]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-15.08,15.09-40,40a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm18.24-18.24L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Z"></path>
              </svg>
              <h3 className="font-epilogue text-xl font-semibold text-neutral-900 md:text-3xl">
                Technologies & Tools
              </h3>
              <p className="max-w-2xl text-sm text-neutral-500 md:text-base">
                Leveraging the latest technologies and tools, I ensure that every project is built with efficiency, scalability, and future-proofing in mind. From front-end frameworks like React.js to back-end solutions like Node.js and MongoDB, I've got you covered.
              </p>
            </div>
            <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="https://cal.com/dhananjayshahane"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border group pointer-events-auto flex w-full items-center gap-x-2 bg-black px-5 py-2.5 text-sm uppercase text-white"
              >
                Book Your Project Consultation
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="text-base md:text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevDetails;