import {experiences} from '../constant/constant'

const Experience = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:30px_30px] opacity-[.12] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] md:bg-[size:40px_40px]"></div>
      <div className="receptacle space-y-5 py-10 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="space-y-2.5 lg:col-span-9">
            <h1 className="text-start font-epilogue text-2xl font-bold text-neutral-900 md:text-5xl">
              Experience
            </h1>
            <p className="text-base text-neutral-500 md:text-xl">
            With 2 years of experience as a software developer, I've worked across various areas, focusing on coding optimization and improving user experiences. My expertise includes front-end development, software architecture, back-end development, and refining app UI/UX. I'm dedicated to embracing different roles and continuously growing in the dynamic tech world.
            </p>
          </div>
          <div className="flex items-center justify-start gap-2.5 md:gap-5 lg:col-span-3 lg:justify-center">
            <a
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-neutral-900 text-neutral-200 active:scale-[.95] px-6 py-2.5"
              target="_blank"
              href="/resume_v1.pdf"
            >
              <span>Resume</span>
              <div className="skew-12 absolute inset-0 flex h-full w-full translate-x-[-110%] transform justify-center group-hover:translate-x-[100%] group-hover:duration-1000">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
              <div className="relative ml-1 h-5 w-5 overflow-hidden">
                <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="size-5 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="size-5 -translate-x-4 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full max-w-5xl">
          {experiences.map((exp, index) => {
            return (
              <div className="group relative space-y-1.5 py-10 pl-8">
                <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-5">
                  <div>
                    <div key={exp.index} className="space-x-3 text-base font-medium text-neutral-900">
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-epilogue underline"
                      >
                        {exp.company}
                      </a>
                      <span>•</span>
                      <span className="text-base italic">
                        {exp.location}
                      </span>
                    </div>
                    <div className="flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-neutral-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-neutral-50 after:bg-neutral-900 group-last:before:hidden sm:flex-row sm:before:left-0 sm:after:left-0">
                      <div className="font-epilogue text-xl font-semibold text-neutral-900 sm:mb-0 md:text-2xl">
                        {exp.position}
                      </div>
                    </div>
                    <time className="block text-base tracking-normal text-neutral-900">
                      {exp.duration}
                    </time>
                  </div>
                  <div className="text-neutral-500">
                    {exp.description}
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default Experience;
