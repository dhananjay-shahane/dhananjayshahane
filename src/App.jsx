import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ErrorPage from "./ErrorPage";

// Function to delay import of components
const delayImport = (importFunc, delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFunc()), delay);
  });
};

// Lazy-load components with delay
const Home = React.lazy(() => delayImport(() => import("./Home"), 3000)); // 3s delay
const About = React.lazy(() => delayImport(() => import("./About"), 3000)); // 2s delay
const Projects = React.lazy(() => delayImport(() => import("./Projects"), 2500)); // 2.5s delay
const Contactus = React.lazy(() => delayImport(() => import("./Contactus"), 3000)); // 2s delay

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          {/* Home Route */}
          <Route
            index
            path="/"
            element={
              <>
                <Helmet>
                  <title>Dhananjay Shahane | Web Developer </title>
                  <meta
                    name="description"
                    content="Discover Dhananjay Shahane's portfolio as a passionate Front-End Developer specializing in React.js, UI/UX design, and web development."
                  />

                  {/* JSON-LD Schema for Home */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "WebPage",
                      "name": "Dhananjay Shahane Portfolio",
                      "description": "Explore the portfolio of Dhananjay Shahane, a Front-End Developer specializing in React.js and UI/UX design.",
                      "url": "https://dhananjayshahane.vercel.app/",
                      "image": "https://dhananjay-dev.vercel.app/home.png",
                      "mainEntityOfPage": "https://dhananjayshahane.vercel.app/",
                      "publisher": {
                        "@type": "Organization",
                        "name": "Dhananjay Shahane",
                        "url": "https://dhananjayshahane.vercel.app/",
                      },
                      "author": {
                        "@type": "Person",
                        "name": "Dhananjay Shahane",
                        "url": "https://dhananjayshahane.vercel.app/",
                        "sameAs": [
                          "https://www.linkedin.com/in/dhananjayshahane",
                          "https://github.com/DhananjayShahane",
                          "https://www.instagram.com/shahane.dhananjay",
                        ]
                      },
                      "breadcrumb": {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://dhananjayshahane.vercel.app/",
                          },
                        ],
                      },
                      "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://dhananjayshahane.vercel.app/?search={search_term_string}",
                        "query-input": "required name=search_term_string",
                      },
                    })}
                  </script>
                </Helmet>
                <Home />
              </>
            }
          />

          {/* About Route */}
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Dhananjay Shahane - Front-End Developer</title>
                  <meta
                    name="description"
                    content="Learn about Dhananjay Shahane, a passionate Front-End Developer dedicated to creating intuitive, user-friendly web experiences using React.js."
                  />
                  {/* JSON-LD Schema for About */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "WebPage",
                      "name": "About Dhananjay Shahane",
                      "description": "Learn more about Dhananjay Shahane, a skilled Front-End Developer who crafts beautiful, intuitive digital experiences.",
                      "url": "https://dhananjayshahane.vercel.app/about",
                      "image": "https://dhananjay-dev.vercel.app/about.png", // Image added here
                      "mainEntityOfPage": "https://dhananjayshahane.vercel.app/about",
                      "publisher": {
                        "@type": "Organization",
                        "name": "Dhananjay Shahane",
                        "url": "https://dhananjayshahane.vercel.app/",
                      },
                      "author": {
                        "@type": "Person",
                        "name": "Dhananjay Shahane",
                        "url": "https://dhananjayshahane.vercel.app/",
                      },
                    })}
                  </script>
                </Helmet>
                <About />
              </>
            }
          />

          {/* Projects Route */}
          <Route
            path="/projects"
            element={
              <>
                <Helmet>
                  <title>My Projects - Dhananjay Shahane</title>
                  <meta
                    name="description"
                    content="Explore the web development projects of Dhananjay Shahane, including innovative React.js applications and stunning UI designs."
                  />
                  {/* JSON-LD Schema for Projects */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "WebPage",
                      "name": "Projects by Dhananjay Shahane",
                      "description": "Explore innovative web development projects by Dhananjay Shahane showcasing React.js and UI/UX design skills.",
                      "url": "https://dhananjayshahane.vercel.app/projects",
                      "image": "https://dhananjay-dev.vercel.app/work.png",
                      "mainEntityOfPage": "https://dhananjayshahane.vercel.app/projects",
                      "publisher": {
                        "@type": "Organization",
                        "name": "Dhananjay Shahane",
                        "url": "https://dhananjayshahane.vercel.app/",
                      },
                      "author": {
                        "@type": "Person",
                        "name": "Dhananjay Shahane",
                        "url": "https://dhananjayshahane.vercel.app/",
                      },
                    })}
                  </script>
                </Helmet>
                <Projects />
              </>
            }
          />

          {/* Contact Route */}
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact Dhananjay Shahane</title>
                  <meta
                    name="description"
                    content="Get in touch with Dhananjay Shahane, a skilled Front-End Developer and freelancer, to discuss your next web development project."
                  />
                  {/* JSON-LD Schema for Contact */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "WebPage",
                      "name": "Contact Dhananjay Shahane",
                      "description": "Reach out to Dhananjay Shahane for web development and freelancing opportunities.",
                      "url": "https://dhananjayshahane.vercel.app/contact",
                      "image": "https://dhananjay-dev.vercel.app/contact-us.png", // Image added here
                      "mainEntityOfPage": "https://dhananjayshahane.vercel.app/contact",
                      "publisher": {
                        "@type": "Organization",
                        "name": "Dhananjay Shahane",
                        "url": "https://dhananjayshahane.vercel.app/",
                      },
                      "author": {
                        "@type": "Person",
                        "name": "Dhananjay Shahane",
                        "url": "https://dhananjayshahane.vercel.app/",
                      },
                    })}
                  </script>
                </Helmet>
                <Contactus />
              </>
            }
          />

          {/* Error Page Route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}
