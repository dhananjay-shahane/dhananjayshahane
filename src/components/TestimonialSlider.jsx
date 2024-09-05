import React, { useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Amit Sharma",
    handle: "@amitsharma",
    text: "The website design is clean and user-friendly. Great job!",
  },
  {
    name: "Priya Singh",
    handle: "@priyasingh",
    text: "Working with Dhananjay was a pleasure. He delivered on time and exceeded expectations.",
  },
  {
    name: "Rahul Verma",
    handle: "@rahulverma",
    text: "Impressed by the responsive design and attention to detail.",
  },
  {
    name: "Anjali Mehta",
    handle: "@anjalimehta",
    text: "The front-end development was top-notch. Highly recommend Dhananjay.",
  },
  {
    name: "Vikram Joshi",
    handle: "@vikramjoshi",
    text: "Professional work and excellent communication throughout the project.",
  },
  {
    name: "Neha Gupta",
    handle: "@nehagupta",
    text: "Dhananjay's coding skills are impressive. The website performs flawlessly.",
  },
  {
    name: "Arjun Patel",
    handle: "@arjunpatel",
    text: "Great attention to cross-browser compatibility. The site works perfectly on all devices.",
  },
  {
    name: "Sneha Kapoor",
    handle: "@snehakapoor",
    text: "The user interface is intuitive and engaging. Fantastic work!",
  },
];


const TestimonialSlider = () => {
  const duplicateTestimonials = [...testimonials, ...testimonials]; // Duplicate the array for seamless looping
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-12 relative px-4 md:px-0 mb-20">
          <div className="text-center">
      <h2 className="text-center text-5xl style_header">
      <span className="text-secondary style_header">People</span> Actually Said This!
      </h2>
      <p className="mt-4 text-lg text-gray-500">
        Don’t just take my word for it. Here's what people are saying about my work!
      </p>
    </div>


      <div className="relative mt-10">
        {/* Left Blur */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-primary-opacity to-transparent z-10 pointer-events-none"></div>
        
        {/* Right Blur */}
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-primary-opacity to-transparent z-10 pointer-events-none"></div>
        
        {/* First Line of Testimonials */}
        <div className="overflow-hidden conatiner mx-auto">
          <motion.div 
            className="flex space-x-4"
            animate={{ x: isPaused ? 0 : ['0%', '-100%'] }} // Pause or move
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {duplicateTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 p-4 bg-white shadow-lg rounded-lg w-full max-w-sm"
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              >
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.handle}</div>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{testimonial.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Line of Testimonials */}
        <div className="overflow-hidden mt-6 conatiner mx-auto">
          <motion.div 
            className="flex space-x-4"
            animate={{ x: isPaused ? 0 : ['0%', '100%'] }} // Pause or move in the opposite direction
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {duplicateTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 p-4 bg-white shadow-lg rounded-lg w-full max-w-sm"
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              >
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.handle}</div>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{testimonial.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
