import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [quote, setQuote] = useState('');
  const quotes = [
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it.",
  ];

  useEffect(() => {
    const changeQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    };

    changeQuote(); // Set initial quote
    const intervalId = setInterval(changeQuote, 5000); // Change quote every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [quotes]);

  const footerStyle= {
    position: 'absolute',
    bottom: '0',
    right:'0',
    left: '0',
    height:'5px',
    backgroundImage: 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)',
  }

  return (
    <footer className="mt-5 relative">
      <div id="watermountains"></div>
      <div id="hills"></div>
      <div style={footerStyle}>
        <div className="footer_footerWrapper text-center py-5">
          <div className='flex flex-wrap justify-center  md:justify-between items-center gap-2'>
                <p className="footer_footerText text-center">
                    Copyright © 2024 All rights reserved | Made With ❤️&amp;🧠 In{' '}
                    <span className="fw-bolder text-dark">India</span>
                </p>

                <p className="footer_footerText text-center">{quote}</p>
          </div>

        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
