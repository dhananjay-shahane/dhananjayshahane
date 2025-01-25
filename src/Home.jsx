import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SkillsSection from "./SkillsSection";
import Hero from "./Hero";
import ThemeSelector from "./components/ThemeSelector";
import DevDetails from "./components/DevDetails";
import Projects from "./components/Projects";
import { Helmet } from 'react-helmet';

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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        
        {isOpen && (
          <ThemeSelector
            setIsOpen={setIsOpen}
            handleSelectTheme={handleSelectTheme}
          />
        )}

        <SkillsSection />
        <div className="mt-[50px]"><Projects /></div>
        <DevDetails />
      </motion.div>
    </div>
  );
}

export default Home;
