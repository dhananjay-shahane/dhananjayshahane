const DevDetails = () => {
  return (
    <div className="py-10 md:py-20 lg:py-28 max-w-7xl mx-auto p-5">
      <div className="receptacle space-y-10">
        <div className="space-y-2.5">
          <h1 className="text-start font-epilogue text-2xl font-bold text-neutral-900 md:text-5xl">
            Your Ultimate Development Ally!
          </h1>
          <p className="text-base text-neutral-500 md:text-xl">
            Vision Beyond Limits: If you can name it, we can make it!
          </p>
        </div>
        <div className="grid w-full auto-rows-[20rem] grid-cols-1 gap-5 md:grid-cols-12">
          <div className="group relative flex transform-gpu flex-col justify-between overflow-hidden rounded-2xl bg-white md:col-span-6 lg:col-span-8">
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
                Attention to Detail
              </h3>
              <p className="max-w-2xl text-sm text-neutral-500 md:text-base">
                It's the little things that make a big difference. I'm committed
                to excellence, paying close attention to every detail in your
                project. Whether it's coding structure or user interface design,
                I strive for greatness in every line of code.
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
          <div className="group relative flex transform-gpu flex-col justify-between overflow-hidden rounded-2xl bg-white md:col-span-6 lg:col-span-4">
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
                Async… or Not?
              </h3>
              <p className="max-w-2xl text-sm text-neutral-500 md:text-base">
                Collaboration is key! &amp; I'll to adapt to your preferred
                communication style. Whether it's real-time discussions through
                calls/meetings or asynchronous communication via messages,
                emails, and Looms, I ensure that our workflow is seamless.
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
          <div className="group relative flex transform-gpu flex-col justify-between overflow-hidden rounded-2xl bg-white md:col-span-6 lg:col-span-5">
            <div>
              <div className="absolute left-0 top-0 w-full"></div>
            </div>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 space-y-1.5 p-5 transition-all duration-300 group-hover:-translate-y-10">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-10 origin-left transform-gpu text-neutral-900 transition-all duration-300 ease-in-out group-hover:scale-[.80]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z"></path>
              </svg>
              <h3 className="font-epilogue text-xl font-semibold text-neutral-900 md:text-3xl">
                Crafting Solutions
              </h3>
              <p className="max-w-2xl text-sm text-neutral-500 md:text-base">
                Beyond the lines of code and the structure of databases, I
                thrive in solving complex problems. As a FullStack Developer, I
                bring an innovative mindset to overcome challenges and deliver
                tailored solutions. I don't just code; I architect robust
                systems that stand the test of functionality and user
                experience.
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
          <div className="group relative flex transform-gpu flex-col justify-between overflow-hidden rounded-2xl bg-white md:col-span-6 lg:col-span-7">
            <div>
              <div className="absolute left-0 top-0 w-full"></div>
            </div>
            <div className="absolute -right-1/2 -top-1/4 h-full w-full bg-[radial-gradient(#a1a1a1_0.5px,transparent_1px)] transition-transform duration-200 [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] group-hover:bg-[radial-gradient(#737373_1px,transparent_1px)]"></div>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 space-y-1.5 p-5 transition-all duration-300 group-hover:-translate-y-10">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                className="size-10 origin-left transform-gpu text-neutral-900 transition-all duration-300 ease-in-out group-hover:scale-[.80]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 448c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V128H0v320zm448-208c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-32zm0 120c0-4.42 3.58-8 8-8h112c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H456c-4.42 0-8-3.58-8-8v-16zM64 264c0-4.42 3.58-8 8-8h304c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm0 96c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zM624 32H16C7.16 32 0 39.16 0 48v48h640V48c0-8.84-7.16-16-16-16z"></path>
              </svg>
              <h3 className="font-epilogue text-xl font-semibold text-neutral-900 md:text-3xl">
                Pricing &amp; Timeline Transparency
              </h3>
              <p className="max-w-2xl text-sm text-neutral-500 md:text-base">
                Transparency is the foundation of trust. I provide a clear
                breakdown of pricing and timelines for your project. so all
                revisions are included at no extra cost. No surprises, just a
                transparent and collaborative development journey.
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
        </div>
      </div>
    </div>
  );
};

export default DevDetails;
