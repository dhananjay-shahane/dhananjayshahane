import React, { Suspense } from "react";
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
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
      <div>
        <div>
          <Header />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Projects />} />
              {/* <Route path="/blogs" element={<BlogSection />} /> */}
              <Route path="/contact" element={<Contactus />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
      </div>
      <Footer />
    </Suspense>
    </BrowserRouter>
  );
}
