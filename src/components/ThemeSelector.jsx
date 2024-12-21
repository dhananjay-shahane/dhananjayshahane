import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const ThemeSelectorPopup = ({ setIsOpen, handleSelectTheme }) => {
  const controls = useAnimation();
  const buttonControls = useAnimation();

  // Animation variants for the popup
  const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0.95 }
  };

  // Handle opening animation
  React.useEffect(() => {
    controls.start('open');
  }, [controls]);

  // Handle closing animation
  const handleClose = () => {
    controls.start('closed').then(() => setIsOpen(false));
  };

  // Handle button click animation
  const handleButtonClick = async (theme) => {
    // Animate button on click
    await buttonControls.start({ scale: 0.95 });
    await buttonControls.start({ scale: 1 });
    handleSelectTheme(theme);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      initial="closed"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={handleClose}
        >
          ✕
        </button>
        <div className="flex flex-col items-center space-y-6">
          {/* First Theme */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#6a2c00] w-16 h-16 rounded-full border-4 border shadow-2xl"></div>
            <div className="bg-[#ffdb58] w-16 h-16 rounded-full border-4 border shadow-2xl"></div>
            <motion.button
              className="bg-[#ff7f2a] text-white py-2 px-6 rounded-lg hover:bg-[#e66d1f]"
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleButtonClick('theme1')}
            >
              Select Theme
            </motion.button>
          </div>

          {/* Second Theme */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#2c003e] w-16 h-16 rounded-full border-4 border shadow-2xl"></div>
            <div className="bg-[#a233ff] w-16 h-16 rounded-full border-4 border shadow-2xl"></div>
            <motion.button
              className="bg-[#502e80] text-white py-2 px-6 rounded-lg hover:bg-[#45266f]"
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleButtonClick('theme2')}
            >
              Select Theme
            </motion.button>
          </div>

          {/* Third Theme */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#2c2c2c] w-16 h-16 rounded-full border-4 border shadow-2xl"></div>
            <div className="bg-[#ffffff] w-16 h-16 rounded-full border-4 border shadow-2xl"></div>
            <motion.button
              className="bg-[#333333] text-white py-2 px-6 rounded-lg hover:bg-[#292929]"
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleButtonClick('theme3')}
            >
              Select Theme
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThemeSelectorPopup;
