import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillsSection from "./SkillsSection";
import Projects from "./Projects";
import macbook from './assets/img/macbook.png';
import restaurantWebsiteImage from './assets/img/restaurant-website.png';
import fitnessWebsiteImage from './assets/img/Fitness-website.png';
import BlueRexWebsiteImage from './assets/img/BlueRex-website.png';
import FoodDahboardWebsiteImage from './assets/img/Food-Dashboard.png';

const ImageSlider = ({ setCurrentSlide, sliderRef }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      <div>
        <img className="lapimg h-[380px] bg-cover" src={restaurantWebsiteImage} alt="Slide 1" />
      </div>
      <div>
        <img className="lapimg h-[380px] bg-cover" src={fitnessWebsiteImage} alt="Slide 2" />
      </div>
      <div>
        <img className="lapimg h-[380px] bg-cover" src={BlueRexWebsiteImage} alt="Slide 3" />
      </div>
      <div>
        <img className="lapimg h-[380px] bg-cover" src={FoodDahboardWebsiteImage} alt="Slide 5" />
      </div>
    </Slider>
  );
};

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleButtonClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
    sliderRef.current.slickGoTo(slideIndex);
  };

  // const heroBg = {
  //   borderImage: 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3',
  //   backgroundImage: 'linear-gradient(270deg, rgba(176, 42, 42, 0.16) 0%, rgba(176, 42, 42, 0.56) 18.45%, rgba(176, 42, 42, 0.8) 49.67%, rgba(176, 42, 42, 0.56) 82.52%, rgba(176, 42, 42, 0.196364) 99.7%, rgba(189, 40, 40, 0) 99.71%, rgba(203, 56, 55, 0) 99.72%, rgba(203, 56, 55, 0.16) 99.73%), url("https://static-production.npmjs.com/abf53a31b2da4657a1a004ee9358551c.png")',
  //   backgroundSize: 'cover',
  // }

  return (
    <motion.div
      className="home-container relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id="duck-flying"></div>
      <motion.section
        className="text-gray-600 body-font hero-section"
        // style={heroBg}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-5 py-24" id="container">
          <div className="text-center w-full">
            <motion.h1
              className="title-font sm:text-7xl text-5xl mb-4 font-medium text-gray-900 style_header magicalText"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi I am , Dhananjay Shahane
            </motion.h1>
            <motion.p
              className="mb-8 leading-relaxed text-2xl max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
             I specialize in Front-End Development and freelance work, primarily focusing on creating UIs using Tailwind CSS. I thrive on solving complex puzzles and transforming them into user-friendly interfaces through design and code. With my expertise, I craft visually appealing and seamless experiences for users.
            </motion.p>
            <div className="flex justify-center mb-3 mt-2">
              <motion.p
                className="_mode text-[50px] cursor-pointer "
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <button className="hover:scale-[161%] hover:rotate-45 transition-transform">🌈</button>
              </motion.p>
            </div>
            <div className="pbox hidden md:block">
              <div className="pcontainer">
                <div className="mockup">
                  <img className="lap" src={macbook} alt="Laptop Mockup" />
                  <div className="artwork">
                    <ImageSlider setCurrentSlide={setCurrentSlide} sliderRef={sliderRef} />
                  </div>
                </div>


              </div>
              <div className="button-section hidden md:block">
                <div className="buttons-wrapper flex justify-center">
                  <div className="buttons mt-4 flex items-center gap-5">
                    <button
                      className={`px-4 py-2 rounded border-2 border-cyan-400 ${currentSlide === 0 ? "bg-sky-500 text-white" : "hover:bg-sky-200 text-sky-500"
                        }`}
                      onClick={() => handleButtonClick(0)}
                    >
                      Restaurant Website
                    </button>
                    <button
                      className={`px-4 py-2 rounded border-2 border-cyan-400 ${currentSlide === 1 ? "bg-sky-500 text-white" : "hover:bg-sky-200 text-sky-500"
                        }`}
                      onClick={() => handleButtonClick(1)}
                    >
                      Fitness Website
                    </button>
                    <button
                      className={`px-4 py-2 rounded border-2 border-cyan-400 ${currentSlide === 2 ? "bg-sky-500 text-white" : "hover:bg-sky-200 text-sky-500"
                        }`}
                      onClick={() => handleButtonClick(2)}
                    >
                      BlueRex Website
                    </button>
                    <button
                      className={`px-4 py-2 rounded border-2 border-cyan-400 ${currentSlide === 3 ? "bg-sky-500 text-white" : "hover:bg-sky-200 text-sky-500"
                        }`}
                      onClick={() => handleButtonClick(3)}
                    >
                      FoodHunt Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      <SkillsSection />

      <motion.section
        className="projects-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Projects />
        <motion.div
          className="flex self-center justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <button className="px-4 py-2 rounded border border-sky-400 hover:border-sky-200 hover:bg-sky-200 text-sky-500">
            <Link to="/projects">Show more</Link>
          </button>
        </motion.div>
      </motion.section>

      <motion.section
        className="blog-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
      </motion.section>
    </motion.div>
  );
}

export default Home;
