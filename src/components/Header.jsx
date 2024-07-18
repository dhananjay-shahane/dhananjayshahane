import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/css/style.css";

function Header() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleMenu = () => {
    setSelectedMenuItem(!selectedMenuItem);
  };

  const closeMenu = () => {
    setSelectedMenuItem(false);
  };

  const headerStyle = {
      position: 'relative',
      padding: '8px 0',
      borderWidth: '10px 0 0',
      borderTopStyle: 'solid',
      WebkitBorderImage: 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3',
      OBorderImage: 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3',
      borderImage: 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3',
  };


  const logostyle = {
    fontFamily: 'disneyfont',
    fontSize: '29px',
  };

  return (
    <>
      <header className="body-font text-black" style={headerStyle}>
        <nav className="flex justify-between items-center px-6">
          <Link className="logo" to='/' style={logostyle}>
            Dhananjay Shahane <br />
          </Link>
          <div className="flex items-center">
            <div className="outer-menu ml-4">
              <input
                className="checkbox-toggle"
                type="checkbox"
                checked={selectedMenuItem}
                onChange={toggleMenu}
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
                        <Link className="heading font-bold uppercase" to="/work" onClick={closeMenu}>
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link className="heading font-bold uppercase" to="/contact" onClick={closeMenu}>
                          Contact
                        </Link>
                      </li>
                      {/* <li>
                        <Link className="heading font-bold uppercase" to="/blogs" onClick={closeMenu}>
                          Blogs
                        </Link>
                      </li> */}
                      
                      <Outlet />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
