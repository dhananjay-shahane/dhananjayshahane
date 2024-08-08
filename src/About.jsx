const educationDetails = [
  {
    institution: "Dr. Babasaheb Ambedkar University",
    degree: "BSC ( COMPUTER SCRIENCE )",
    imgSrc: "",
    imgAlt: "Dr. Babasaheb Ambedkar University",
  },
];

const Education = () => {
  return (
    <div className="flex min-h-0 max-w-3xl flex-col gap-y-3">
      <div
        style={{
          opacity: 1,
          filter: "blur(0px)",
          transform: "translateY(-6px) translateZ(0px)",
        }}
      >
        <h1 className="title-font text-left sm:text-xl  mb-4 font-medium text-gray-900 text-4xl">
          Education
        </h1>
      </div>
      {educationDetails.map((education, index) => (
        <div
          key={index}
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(-6px) translateZ(0px)",
          }}
        >
          <a className="block cursor-pointer bg-white p-3 rounded-md" href={education.link}>
            <div className="rounded-lg bg-card text-card-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                  <img
                    className="aspect-square w-10 object-contain"
                    alt={education.imgAlt}
                    src={education.imgSrc}
                  />
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex flex-col text-sm">
                      {education.institution}
                      <span className="font-sans text-xs text-left">
                        {education.degree}
                      </span>
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      {education.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

const workExperiences = [
  {
    company: "BR Tech Solutions Pvt Ltd",
    role: "Front End Developer",
    imgSrc: "",
    imgAlt: "Infraveo Pvt Ltd",
  },
  {
    company: "BR Tech Solutions Pvt Ltd",
    role: "Front End Developer",
    imgSrc: "",
    imgAlt: "Infraveo Pvt Ltd",
  },
  {
    company: "Infraveo Pvt Ltd",
    role: "Front End Dev Internship",
    imgSrc: "",
    imgAlt: "Infraveo Pvt Ltd",
  },
];

const WorkExperience = () => {
  return (
    <div className="flex min-h-0 max-w-3xl flex-col gap-y-3">
      <div
        style={{
          opacity: 1,
          filter: "blur(0px)",
          transform: "translateY(-6px) translateZ(0px)",
        }}
      >
        <h1 className="title-font sm:text-xl  mb-4 font-medium text-left text-gray-900 text-4xl">
          Work Experience
        </h1>
      </div>
      {workExperiences.map((experience, index) => (
        <div
          key={index}
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(-6px) translateZ(0px)",
          }}
        >
          <a className="block cursor-pointer bg-white p-3 rounded-md" href={experience.link}>
            <div className="rounded-lg bg-card text-card-foreground flex">
              <div className="flex-none">
                <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background">
                  <img
                    className="w-10"
                    alt={experience.imgAlt}
                    src={experience.imgSrc}
                  />
                </span>
              </div>
              <div className="flex-grow ml-4 items-center flex-col group">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex flex-col text-sm">
                      {experience.company}
                      <span className="font-sans text-xs text-left">{experience.role}</span>
                    </h3>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                      {experience.date}
                    </div>
                  </div>
                </div>
                <div
                  className="mt-2 text-xs sm:text-sm"
                  style={{ opacity: 0, height: "0px" }}
                >
                  {experience.description}
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

function About() {
  return (
    <>
      {/* <div className="overflow-x-hidden">
        <div id="clouds">
              <div className="cloud" id="cloud-one"></div>
              <div className="cloud" id="cloud-two"></div>
              <div className="cloud" id="cloud-three"></div>
              <div className="cloud" id="cloud-four"></div>
              <div className="cloud" id="cloud-six"></div>
          </div>
          <div id="hot-air-balloon"></div>
      </div> */}
      <section className="text-gray-600 body-font p-5 mb-20 my-4 flex justify-center">
        <div className="text-center max-w-6xl mb-20">
          <h1 className="title-font sm:text-5xl  mb-4 font-medium text-gray-900 text-4xl style_header">
            Here i am!
          </h1>
          <p className="about_sub_title mb-10">
            I'm Dhananjay and I enjoy creating things that live on the internet,
            whether that be websites, applications, or anything in between.
            Since the day I was first introduced to a computer, its working
            mechanism piqued my curiosity, and growing up I have been engrossed
            in sharpening my technical skills with the aim of developing
            something on my own. To fulfill my curiosity, I've chosen my career
            path as a web developer.
          </p>
          <div className="grid md:grid-cols-2 gird-cols-1 items-start place-center gap-x-10">
            <WorkExperience />
            <Education />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
