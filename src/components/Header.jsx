import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/css/style.css";
import MarqueeLink from "./MarqueeLink";

function Header() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleMenu = () => {
    setSelectedMenuItem(!selectedMenuItem);
  };

  const closeMenu = () => {
    setSelectedMenuItem(false);
  };

  const headerStyle = {
    position: "relative",
    padding: "8px 0",
    borderWidth: "10px 0 0",
    borderTopStyle: "solid",
    borderImage: "linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3",
  };

  const logostyle = {
    fontFamily: "disneyfont",
    fontSize: "29px",
  };

  return (
    <header className="body-font text-black sticky top-0 z-10 border-b-2" style={headerStyle}>
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link className="logo" to="/" style={logostyle}>
          Dhananjay <br />
        </Link>
        <div className="mx-auto hidden w-full md:col-span-6 md:block xl:w-1/3">
          <MarqueeLink />
        </div>
        <div className="flex items-center">
          <div className="outer-menu ml-4">
            <input
              className="checkbox-toggle"
              type="checkbox"
              checked={selectedMenuItem}
              onChange={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={selectedMenuItem}
            />
            <div className="hamburger">
              <div></div>
            </div>
            <div className="menu">
              <div>
                <div>
                  <ul>
                    <li>
                      <Link className="heading font-bold uppercase" to="/" onClick={closeMenu}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="heading font-bold uppercase" to="/about" onClick={closeMenu}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="heading font-bold uppercase" to="/projects" onClick={closeMenu}>
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link className="heading font-bold uppercase" to="/contact" onClick={closeMenu}>
                        Contact
                      </Link>
                    </li>
                    <Outlet />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
