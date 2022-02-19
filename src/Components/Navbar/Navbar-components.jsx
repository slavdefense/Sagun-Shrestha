import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar-components.css";

const Navbar = ({ navComponents }) => {
  const [navbar, setNavbar] = useState(false);

  const handleChangeColor = () => {
    if (window.scrollY > 115) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", handleChangeColor);

  return (
    <div className={navbar ? "navbar" : "navbar active"}>
      {navComponents.map((components, idx) => {
        return (
          <div>
            <Link
              to={components.name}
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
              className="navbarspan"
              key={idx}
            >
              <span key={components.id} className={navbar ? "navbarspan-larger" : "navbarspan"}>
                {components.name}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
