import fitnessWebsiteImage from "../assets/img/Fitness-website.png";
import BlueRexWebsiteImage from "../assets/img/BlueRex-website.png";
import colorsWebsiteImage from "../assets/img/Colors-website.png";
import restaurantWebsiteImage from "../assets/img/freshfood.png";
import restaurantAdminPanelImage from "../assets/img/food-admin.png"
import movieFlixImage from "../assets/img/movieflix.png";
import jadooTravelImage from "../assets/img/jadoo-travel.png";

// project details
export const projects = [
  {
    title: "FreshFood",
    image: restaurantWebsiteImage,
    description:
      "A restaurant landing page with features like menu browsing, cart management, online ordering, and payment integration with Stripe. Built using React.js, Tailwind CSS, and Redux for state management.",
    tags: ["React.js", "Tailwind CSS", "Redux", "Stripe Payment Integration"],
    link: "https://final-project-dun-iota.vercel.app",
    features: [
      "Dynamic menu browsing",
      "Shopping cart with real-time updates",
      "Payment integration with Stripe",
      "User login and authentication",
      "Add to cart food and manage orders",
      "Optimized for mobile and tablet users",
    ],
  },
  {
    title: "FreshFood Admin Panel",
    image: restaurantAdminPanelImage, // Add image for the admin panel here
    description:
      "An admin panel to manage orders, add food items, create categories, and manage payments. Built using Node.js, Express, MongoDB for the backend, and React.js with Tailwind CSS for the frontend.",
    tags: ["MongoDB", "Node.js", "Express", "React.js", "Tailwind CSS"],
    link: "https://fresh-food-mu.vercel.app", // Add actual link for the admin panel
    features: [
      "Manage orders and track status",
      "Add food items and categories",
      "Payment management and order history",
      "Real-time updates with Redux",
      "Fully responsive and mobile-friendly UI",
    ],
  },
  {
    title: "Jadoo Travel",
    image: jadooTravelImage,
    description:
      "A travel landing page offering destination packages, booking options, and travel tips. Built using HTML, CSS, and JavaScript for an engaging and interactive experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://jadoo-travel-agency-seven.vercel.app/",
    features: [
      "Responsive design for all devices",
      "Interactive UI with animations",
      "Booking and destination details",
      "SEO-friendly structure",
    ],
  },
  {
    title: "Colors Website",
    image: colorsWebsiteImage,
    description:
      "A vibrant website featuring color palettes and themes, with interactive elements. Developed with HTML, Tailwind CSS, and JavaScript.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    link: "https://colors-website-2023.vercel.app",
    features: [
      "Color palette generator",
      "Interactive UI with smooth animations",
      "Lightweight and fast loading",
      "User-friendly design",
    ],
  },
  {
    title: "Alex Fitness",
    image: fitnessWebsiteImage,
    description:
      "A fitness landing page designed to showcase workout plans, trainers, and health tips. Converted from Photoshop to HTML, using HTML and CSS.",
    tags: ["HTML", "CSS", "Photoshop to HTML"],
    link: "https://fitness-website-coral.vercel.app",
    features: [
      "Trainer profiles and workout plans",
      "Optimized for performance",
      "Mobile-friendly layout",
      "Smooth scrolling and animations",
    ],
  },
  
  {
    title: "MovieFlix",
    image: movieFlixImage,
    description:
      "A Netflix clone built with HTML, CSS, JavaScript featuring a sleek UI for browsing movies and TV shows, with filtering and search functionality.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://movieflix-io.vercel.app",
    features: [
      "Netflix-like UI",
      "Movie search and filtering",
      "Smooth transitions and animations",
      "Responsive and mobile-friendly",
    ],
  },
  {
    title: "BlueRex",
    image: BlueRexWebsiteImage,
    description:
      "A modern landing page for BlueRex, featuring sleek animations, a responsive layout, and engaging content. Built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Photoshop to HTML"],
    link: "https://bluerex-io.vercel.app",
    features: [
      "Modern and engaging animations",
      "Fully responsive layout",
      "SEO-optimized structure",
      "Interactive elements",
    ],
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
  { name: 'Beginner Motion', logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
  { name: 'Photoshop To Html', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg' },
  { name: 'WordPress', logo: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg' },
];

export const experiences = [
  {
    company: "BR Tech Solutions Pvt. Ltd.",
    location: "Remote",
    position: "UI Developer",
    duration: "011/'23 - 09/'24",
    description:
      `At BR Tech Solutions Private Limited , I actively advanced my skills in ui development to drive project
      optimization.I demonstrated proficiency in utilizing contemporary libraries like React.js and frameworks such
      as Tailwind CSS to elevate the user experience.Additionally, I gained experience in Filezilla and Putty tool.
      `,
    url: "https://www.brtechsolution.com/",
  },
  {
    company: "Infraveo Technologies",
    location: "Ahmedabad, Gujarat, India",
    position: "Frontend Developer",
    duration: "09/'22 - 08/'23",
    description:
      "After Internship, I joined Infraveo Technologies as a Frontend Developer, I effectively harness HTML, CSS, and JavaScript to create and manage web applications for diverse client projects, ensuring they meet client expectations and deliver optimal user experiences.",
    url: "https://www.infraveo.com/",
  },
  {
    company: "Infraveo Technologies",
    location: "Ahmedabad, Gujarat, India",
    position: "Frontend Developer (Intern)",
    duration: "09/'22 - 12/'22",
    description:
      "I began my career as a Intern at Infraveo Technologies, where I gained firsthand experience in web development agency practices and learned extensively from my mentor.",
    url: "https://www.infraveo.com/",
  },
];

export const quotes = [
    {
      text: "You have to dream before your dreams can come true.",
      author: "Dr. A.P.J. Abdul Kalam",
    },
    {
      text: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Success is when your signature becomes an autograph.",
      author: "Dr. A.P.J. Abdul Kalam",
    },
    {
      text: "The best way to find yourself is to lose yourself in the service of others.",
      author: "Mahatma Gandhi",
    },
    {
      text: "A person who never made a mistake never tried anything new.",
      author: "Rabindranath Tagore",
    },
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      text: "Life is not merely to be alive, but to be well.",
      author: "Marcus Tullius Cicero",
    },
    {
      text: "What we think, we become.",
      author: "Buddha",
    },
  ];