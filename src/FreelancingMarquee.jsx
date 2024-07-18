import React, { useState, useEffect } from 'react';

const Marquee = ({ texts, speed }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, speed);

    return () => clearInterval(interval);
  }, [texts, speed]);

  return (
    <div className="marquee overflow-hidden relative w-full">
      <div className="absolute top-0 left-0 w-full h-full flex">
        {texts.map((text, i) => (
          <span key={i} className={`px-4 py-2 text-gray-800 transition-colors duration-300 ${i === index ? 'text-sky-500 dark:text-sky-400' : ''}`}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

const FreelancingMarquee = () => {
  const freelancingTexts = [
    'Freelancer Available',
    'Looking for Projects',
    'Experienced Freelancer',
    'Available for Hire',
    'Open to Freelance Opportunities'
  ];

  return (
    <div className="w-full bg-gray-100 py-4 rounded-xl">
      <Marquee texts={freelancingTexts} speed={2000} />
    </div>
  );
};

export default FreelancingMarquee;
