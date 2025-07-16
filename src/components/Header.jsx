
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  
  // Refs for GSAP animations
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const menuRef = useRef(null);

  useEffect(() => {
    // Initialize dark mode from localStorage
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
    
    // GSAP entrance animation
    const tl = gsap.timeline();
    
    tl.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    
    tl.fromTo(
      logoRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.4"
    );
    
    navItemsRef.current.forEach((item, index) => {
      if (item) {
        tl.fromTo(
          item,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power1.out" },
          `-=${index > 0 ? 0.1 : 0}`
        );
      }
    });
    
    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    
    // GSAP animation for dark mode toggle
    gsap.to(document.body, {
      duration: 0.5,
      backgroundColor: newMode ? "#121212" : "#ffffff",
      ease: "power2.out"
    });
    
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Prevent body scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
      
      // Menu open animation
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "auto";
      
      // Menu close animation
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in"
      });
    }
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      // Menu close animation
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          setIsMenuOpen(false);
          document.body.style.overflow = "auto";
        }
      });
    }
  };

  // Hover animation for nav items
  const handleNavItemHover = (index, isEnter) => {
    gsap.to(navItemsRef.current[index], {
      scale: isEnter ? 1.1 : 1,
      // color: isEnter ? "#f97316" : location.pathname === navItems[index].path ? "#f97316" : darkMode ? "#e5e7eb" : "#374151",
      duration: 0.3,
      ease: "power1.out"
    });
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header 
        ref={headerRef}
        className="sticky top-0 z-40 w-full border-t-4 backdrop-blur-sm dark:backdrop-blur-sm border-t-orange-500" 
        style={{
          borderImage: "linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 1",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:space-x-10">
            {/* Logo */}
            <div className="flex justify-start">
              <Link 
                to="/" 
                className="flex items-center" 
                onClick={closeMenu}
                ref={logoRef}
              >
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-all duration-300 hover:text-orange-600" style={{ fontFamily: "'disneyfont', cursive" }}>
                  Dhananjay
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-medium transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? "text-orange-600 border-b-2 border-orange-600" 
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                  ref={el => navItemsRef.current[index] = el}
                  onMouseEnter={() => handleNavItemHover(index, true)}
                  onMouseLeave={() => handleNavItemHover(index, false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleDarkMode}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-600 transition-transform duration-300 hover:rotate-12 focus:outline-none"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                ref={el => navItemsRef.current[navItems.length] = el}
              >
                {darkMode ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>
                )}
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDarkMode}
                className="mr-4 text-gray-700 dark:text-gray-200 hover:text-orange-600 transition-transform duration-300 hover:rotate-12 focus:outline-none"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>
                )}
              </button>
              <button
                type="button"
                className="hamburger z-50 w-10 h-10 relative focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span
                  className={`hamburger-line absolute h-0.5 w-6 bg-gray-800 dark:bg-white transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                  style={{ left: "20%" }}
                ></span>
                <span
                  className={`hamburger-line absolute h-0.5 bg-gray-800 dark:bg-white transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0 w-0" : "opacity-100 w-6"
                  }`}
                  style={{ left: "20%" }}
                ></span>
                <span
                  className={`hamburger-line absolute h-0.5 w-6 bg-gray-800 dark:bg-white transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                  style={{ left: "20%" }}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>
      
      {/* Offcanvas Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-full sm:w-80 backdrop-blur-lg bg-white/80 dark:bg-gray-900/90 z-50 shadow-xl transform transition-transform duration-300 ease-in-out translate-x-full"
      >
        <div className="h-full flex flex-col overflow-y-auto pt-20 px-8">
          <nav className="flex flex-col space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xl font-bold uppercase transition-all duration-300 hover:text-orange-600 hover:translate-x-2 ${
                  location.pathname === item.path 
                    ? "text-orange-600" 
                    : "text-gray-800 dark:text-gray-200"
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-6">
              <a 
                href="https://github.com/yourname" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-transform duration-300 hover:translate-x-2"
                onClick={closeMenu}
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
                <span className="text-lg">GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourname" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-transform duration-300 hover:translate-x-2"
                onClick={closeMenu}
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-lg">LinkedIn</span>
              </a>
              
              <a 
                href="mailto:your@email.com" 
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-transform duration-300 hover:translate-x-2"
                onClick={closeMenu}
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-lg">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )}