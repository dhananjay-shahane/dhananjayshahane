import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ErrorPage from "./ErrorPage";

// Lazy-load other components
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Projects = React.lazy(() => import("./Projects"));
const BlogSection = React.lazy(() => import("./BlogSection"));
const Contactus = React.lazy(() => import("./Contactus"));

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulating data fetching
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false); // Hide loader after 2 seconds
  //   }, 100); // Adjust the time as necessary

  //   // Clean up the timer
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <BrowserRouter>
      {/* {loading ? ( */}
        {/* <Loader />
      ) : ( */}
        <Suspense >
          <div>
            <Header />
            <div>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contactus />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Suspense>
      {/* )} */}
    </BrowserRouter>
  );
}
