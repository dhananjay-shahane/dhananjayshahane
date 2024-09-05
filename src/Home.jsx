import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SkillsSection from "./SkillsSection";
import Projects from "./Projects";

import Hero from "./Hero";
import ThemeSelector from "./components/ThemeSelector";
import Contactus from "./Contactus";
import ViewPreview from "./ViewPreview";
import TestimonialSlider from "./components/TestimonialSlider";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("rainbowMode") || ""
  );

  const handleSelectTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    setIsOpen(false);
    document.documentElement.className = selectedTheme;
    localStorage.setItem("rainbowMode", selectedTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <motion.div
        className="home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero setIsOpen={setIsOpen} />
        <ViewPreview />

        {isOpen && (
          <ThemeSelector
            setIsOpen={setIsOpen}
            handleSelectTheme={handleSelectTheme}
          />
        )}

        {/* <ViewPreview/> */}

        <Projects />
        <SkillsSection />
        <TestimonialSlider/>
        {/* <Contactus /> */}
      </motion.div>
    </div>
  );
}

export default Home;
