import restaurantWebsiteImage from "../assets/img/restaurant-website.png";
import fitnessWebsiteImage from "../assets/img/Fitness-website.png";
import BlueRexWebsiteImage from "../assets/img/BlueRex-website.png";
import FoodDahboardWebsiteImage from "../assets/img/Food-Dashboard.png";
import colorsWebsiteImage from "../assets/img/Colors-website.png";
import MyProfile from "../assets/img/me.png";



// project details
export const projects = [
    // {
    //   title: "Restaurant Website",
    //   image: restaurantWebsiteImage,
    //   description:
    //     "A dynamic restaurant website with features like menu browsing, cart management, and online ordering. Built using React JS and Tailwind CSS.",
    //   tags: ["React JS", "Tailwind CSS"],
    //   link: "https://restaurant-io-eta.vercel.app",
    // },
    // {
    //   title: "Food Hunt Dashboard",
    //   image: FoodDahboardWebsiteImage,
    //   description:
    //     "A comprehensive dashboard for managing restaurant operations, including order tracking and analytics. Developed with Tailwind CSS.",
    //   tags: ["Tailwind CSS"],
    //   link: "https://restaurants-admin-panel.vercel.app",
    // },
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
    { name: 'HTML', src: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
    { name: 'CSS', src: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { name: 'JavaScript', src: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' },
    { name: 'Bootstrap 5', src: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
    { name: 'Beginner React', src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Tailwind CSS', src: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' },
    { name: 'Beginner Node.js', src: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'Beginner Motion', src: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
    { name: 'Photoshop To Html', src: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg' },
    { name: 'WordPress', src: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg' },
];

// social media details
export const ItMeProfile = () =>{
  return(
    <img src={MyProfile} class="absolute w-[500px] top-20 right-0 hidden md:block" alt="me"></img>
  )
}