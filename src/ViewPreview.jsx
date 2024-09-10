import React, { useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import macbook from "./assets/img/macbook.png";
// import restaurantWebsiteImage from "./assets/img/restaurant-website.png";
import fitnessWebsiteImage from "./assets/img/Fitness-website.png";
import BlueRexWebsiteImage from "./assets/img/BlueRex-website.png";
// import FoodDahboardWebsiteImage from "./assets/img/Food-Dashboard.png";

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
      {/* <div>
        <img
          className="lapimg h-[380px] bg-cover"
          src={restaurantWebsiteImage}
          alt="Slide 1"
        />
      </div> */}
      <div>
        <img
          className="lapimg h-[380px] bg-cover"
          src={fitnessWebsiteImage}
          alt="Slide 1"
        />
      </div>
      <div>
        <img
          className="lapimg h-[380px] bg-cover"
          src={BlueRexWebsiteImage}
          alt="Slide 2"
        />
      </div>
      {/* <div>
        <img
          className="lapimg h-[380px] bg-cover"
          src={FoodDahboardWebsiteImage}
          alt="Slide 5"
        />
      </div> */}
    </Slider>
  );
};

const viewPreview = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const handleButtonClick = (slideIndex) => {
        setCurrentSlide(slideIndex);
        sliderRef.current.slickGoTo(slideIndex);
    };
  return (
    <div className="pbox hidden md:block">
      <div className="pcontainer">
        <div className="mockup">
          <img className="lap" src={macbook} alt="Laptop Mockup" />
          <div className="artwork">
            <ImageSlider
              setCurrentSlide={setCurrentSlide}
              sliderRef={sliderRef}
            />
          </div>
        </div>
      </div>
      <div className="button-section hidden md:block">
        <div className="buttons-wrapper flex justify-center">
          <div className="buttons mt-4 flex items-center gap-5">
            {/* <button
              className={`px-4 py-2 rounded border-2 border-black ${
                currentSlide === 0
                  ? "bg-primary text-white"
                  : "text-black"
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Restaurant Website
            </button> */}
            <button
              className={`px-4 py-2 rounded border-2 border-black ${
                currentSlide === 0
                  ? "bg-primary text-white"
                  : "text-black"
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Fitness Website
            </button>
            <button
              className={`px-4 py-2 rounded border-2 border-black ${
                currentSlide === 1
                  ? "bg-primary text-white"
                  : "text-black"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              BlueRex Website
            </button>
            {/* <button
              className={`px-4 py-2 rounded border-2 border-black ${
                currentSlide === 3
                  ? "bg-primary text-white"
                  : "text-black"
              }`}
              onClick={() => handleButtonClick(3)}
            >
              FoodHunt Dashboard
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default viewPreview;
