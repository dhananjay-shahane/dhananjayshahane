import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ErrorPage from "./ErrorPage";

// Lazy-loaded components
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Projects = React.lazy(() => import("./Projects"));
const Contactus = React.lazy(() => import("./Contactus"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Loader />
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}
