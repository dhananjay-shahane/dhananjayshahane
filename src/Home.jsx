import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SkillsSection from "./SkillsSection";
import Hero from "./Hero";
import ThemeSelector from "./components/ThemeSelector";
import DevDetails from "./components/DevDetails";
import { Helmet } from 'react-helmet';
import Loader from "./components/Loader";

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
      <Helmet>
        <title>Dhananjay | Software Engineer</title>
      </Helmet>
      <motion.div
        className="home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero setIsOpen={setIsOpen} />

        {isOpen && (
          <ThemeSelector
            setIsOpen={setIsOpen}
            handleSelectTheme={handleSelectTheme}
          />
        )}

        <SkillsSection />
        <DevDetails/>
      </motion.div>
    </div>
  );
}

export default Home;
