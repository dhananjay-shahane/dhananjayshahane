import { useState, useEffect, useRef } from "react";

// Create an array of roles with different colors
const roles = [
  { text: "GENERALIST", color: "text-blue-400" },
  { text: "WEB", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-orange-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-yellow-400" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-pink-400" },
  { text: "TECH", color: "text-gray-500" },
  { text: "GENERALIST", color: "text-blue-500" },
  { text: "WEB", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-red-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-amber-500" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-violet-400" },
  { text: "TECH", color: "text-gray-500" },
  { text: "GENERALIST", color: "text-blue-400" },
  { text: "WEB", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-orange-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-yellow-400" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-purple-400" },
  { text: "TECH", color: "text-gray-500" },
  { text: "GENERALIST", color: "text-blue-400" },
  { text: "WEB", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-orange-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-amber-400" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-pink-400" },
  { text: "TECH", color: "text-gray-500" },
  { text: "GENERALIST", color: "text-blue-500" },
  { text: "WEB", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-red-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-amber-500" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-violet-400" },
  { text: "TECH", color: "text-gray-500" },
];

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const imageRef = useRef(null);
  const [imagePosition, setImagePosition] = useState(0);
  
  // Simple animation effects triggered on component mount
  useEffect(() => {
    setAnimate(true);
    
    // Create a simple floating animation for the character
    const floatInterval = setInterval(() => {
      setImagePosition(prev => (prev === 0 ? -10 : 0));
    }, 3000);
    
    return () => clearInterval(floatInterval);
  }, []);

  return (
    <section 
      id="hero" 
      className="h-screen relative overflow-hidden flex items-center justify-center text-center"
      style={{
        background: "linear-gradient(to bottom, #12141d 0%, #1a1d2d 100%)"
      }}
    >
      {/* Dark overlay with transparency */}
      <div className="absolute inset-0  bg-black bg-opacity-30 z-10"></div>
      
      {/* Background text overlay */}
      <div 
        className="absolute inset-0 flex flex-wrap opacity-100 overflow-hidden z-0"
      >
        <div 
          className={`flex flex-wrap text-5xl md:text-6xl font-extrabold opacity-70 p-4 w-full h-full transition-opacity duration-1000 ${animate ? 'opacity-70' : 'opacity-0'}`}
          style={{ 
            lineHeight: '1.1', 
            userSelect: 'none',
            justifyContent: 'space-evenly',
            alignContent: 'space-around'
          }}
        >
          {roles.map((role, index) => (
            <span 
              key={index} 
              className={`${role.color} mx-1 my-1 whitespace-nowrap transition-opacity duration-500`}
              style={{ 
                opacity: animate ? 1 : 0, 
                transitionDelay: `${index * 10}ms`
              }}
            >
              {role.text}.
            </span>
          ))}
        </div>
      </div>
      
      {/* Central content */}
      <div className="container z-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          
          {/* Titles */}
          <div className="text-center">
            {[
              { text: <><span className="text-white">WEB</span><span className="text-orange-500"> DEVELOPER.</span></>, size: "text-3xl md:text-5xl lg:text-6xl mb-3" },
              { text: <><span className="text-yellow-400">FREELANCE</span><span className="text-white"> DEVELOPER.</span></>, size: "text-3xl md:text-5xl lg:text-6xl mb-4" },
              { text: <><span className="text-purple-500">PROBLEM</span><span className="text-white"> SOLVER.</span></>, size: "text-2xl md:text-4xl lg:text-5xl mb-2" },
              { text: <><span className="text-blue-500">TECH</span><span className="text-white"> GENERALIST.</span></>, size: "text-2xl md:text-4xl lg:text-5xl" }
            ].map((item, index) => (
              <h1 
                key={index} 
                className={`font-extrabold ${item.size} transition-transform duration-500`}
                style={{ 
                  transform: animate ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${400 + (index * 100)}ms`
                }}
              >
                {item.text}
              </h1>
            ))}
          </div>

          {/* Character image */}
          <div 
            className="absolute bottom-0 transition-transform duration-3000 ease-out"
            style={{ 
              transform: animate ? `translateY(0px)` : `translateY(300px)`,
              transitionDelay: '500ms',
              marginBottom: `${imagePosition}px`
            }}
          >
            <img 
              ref={imageRef}
              src="https://cdn.prod.website-files.com/63957415c9d3c7c02d068332/67e59106600b2658f5ba6de5_Chris.avif"
              alt="Profile" 
              className="w-[500px] h-full max-h-460"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom rainbow border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 via-red-500 via-yellow-500 to-green-500 z-20"></div>
    </section>
  );
};

export default Hero;