import fitnessWebsiteImage from "../assets/img/Fitness-website.png";
import BlueRexWebsiteImage from "../assets/img/BlueRex-website.png";
import colorsWebsiteImage from "../assets/img/Colors-website.png";
import MyProfile from "../assets/img/me.png";



// project details
export const projects = [
    {
      title: "Fitness Website",
      image: fitnessWebsiteImage,
      description:
        "A fitness landing page designed to showcase workout plans, trainers, and health tips. Converted from Photoshop to HTML, using HTML and CSS.",
      tags: ["HTML", "CSS", "Photoshop to HTML"],
      link: "https://fitness-website-coral.vercel.app",
    },
    {
      title: "BlueRex Landing Page",
      image: BlueRexWebsiteImage,
      description:
        "A sleek and modern landing page for a tech startup. Designed and implemented using HTML and CSS.",
      tags: ["HTML", "CSS", "Photoshop to HTML"],
      link: "",
    },
    {
      title: "Colors Website",
      image: colorsWebsiteImage,
      description:
        "A vibrant website featuring color palettes and themes, with interactive elements. Developed with HTML, Tailwind CSS, and JavaScript.",
      tags: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "https://colors-website-2023.vercel.app",
    },
  ];


//   Skills details
export const skills = [
    { name: 'HTML', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
    { name: 'CSS', logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' },
    { name: 'Bootstrap 5', logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
    { name: 'Beginner React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
    { name: 'Beginner Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'Beginner Motion', logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
    { name: 'Photoshop To Html', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg' },
    { name: 'WordPress', logo: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg' },
];

// social media details
export const ItMeProfile = () =>{
  return(
    <img src={MyProfile} className="absolute w-[500px] top-20 right-0 hidden md:block" alt="me"></img>
  )
}

// my journey

export const myJourney = [
  {
    year: 2017,
    title: "Dream",
    description:
      "Aspiration to start a company that believes in infinite innovations. The dream took the best idea to deliver beautiful websites to clients by brainstorming and working tirelessly to make this dream come true.",
    side: "left",
  },
  {
    year: 2017,
    title: "Beginning",
    description:
      "The first official website for a client delivered with extraordinary results.",
    side: "right",
  },
  {
    year: 2018,
    title: "Achievement",
    description:
      "By working on some great projects, we accomplished much recognition as clients reacted to a new beginning.",
    side: "left",
  },
  {
    year: 2019,
    title: "Unstoppable",
    description:
      "We delivered solutions during the global pandemic and went further to build a new era.",
    side: "right",
  },
  {
    year: 2020,
    title: "A Company",
    description:
      "Completing several projects across various industries, Infynno saw unprecedented growth.",
    side: "left",
  },
  {
    year: 2021,
    title: "Towards",
    description:
      "We set our sights on further expansion and delivering cutting-edge solutions.",
    side: "right",
  },
  {
    year: 2022,
    title: "Infynno Owned Office",
    description:
      "We moved into our new office space, growing to meet increased demands.",
    side: "left",
  },
  {
    year: 2023,
    title: "Expanding",
    description:
      "Further expansion with several new offices in different locations.",
    side: "right",
  },
];