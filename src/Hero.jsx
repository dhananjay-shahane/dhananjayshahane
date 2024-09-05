import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ItMeProfile } from "./constant/constant.jsx";

const Hero = ({ setIsOpen }) => {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProfile(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.section
        className="text-gray-600 body-font hero-section conatiner mx-auto"
        // style={heroBg}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between mb-5 md:mb-0 px-5">
          <div className="text-left hero-left">
            <motion.h1
              className="title-font sm:text-5xl text-left  text-5xl mb-4 font-medium text-gray-900"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hello World
            </motion.h1>
            <h2 className="title-font sm:text-7xl text-5xl mb-4 font-medium text-gray-900 ">
              I am a Curious <br />
              <p>
                <span className="magicalText">Front End Developer</span>
                <div className="tooltip-container">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="hover:scale-[120%] cursor-pointer hover:rotate-45 transition-transform"
                  >
                    🌈
                  </button>
                  <div className="tooltip-text text-sm">Set Theme</div>
                </div>
              </p>
            </h2>
            <p className="text-xl font-bold">Dhananjay shahane</p>

            <div className="flex items-center gap-x-2 md:gap-x-5 my-5">
              <button onClick={()=>{window.location.href="https://www.linkedin.com/in/dhananjayshahane"}} className="bg-primary px-12 text-sm  md:px-10 h-12  text-white shadow-black hover:shadow-xl">
                Let`s Connects
              </button>

              <button className="border-black border-2 text-[15px] md:text-md border px-10 h-12 hover:bg-black hover:text-white trancation-2">
                My Resume
              </button>
            </div>
          </div>
          {showProfile && <ItMeProfile />}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Hero;
