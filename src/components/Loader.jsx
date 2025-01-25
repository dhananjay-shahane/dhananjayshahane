import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
  }, []);

  const logostyle = {
    fontFamily: "disneyfont",
  };

  return (
    <motion.div
      className="fixed z-50 flex w-full items-center justify-center bg-neutral-950"
      id="initialLoader"
      style={{ height: "100vh", top: "0px" }}
      initial={{ opacity: 1, x: "0%" }} // Start from right (off-screen)
      animate={{
        opacity: 1,
        x: "0%",
        y: animationComplete ? "100%" : "0%", // Move up after animation completes
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="absolute z-50 flex items-center justify-center text-white font-amsterdam text-4xl tracking-wider lg:text-3.5xl xl:text-7xl"
        style={logostyle}
      >
        Dhananjay Shahane
      </motion.div>
    </motion.div>
  );
};

export default Loader;
