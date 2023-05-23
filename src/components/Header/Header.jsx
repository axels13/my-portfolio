import React, { useState } from "react";
import "./header.css";

import { Link } from "react-scroll";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navColour ? "navbar sticky" : "navbar"}>
      <div>
        <h2 className="text-[#c770f0] font-bold  text-4xl">Ax.dev</h2>
      </div>

      <div>
        <ul className={`nav_menu  ${isOpen ? "nav_menu open" : ""}`}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-menu-link"
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav-menu-link"
            >
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="proyects"
              smooth={true}
              duration={500}
              className="nav-menu-link"
            >
              Proyects
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-menu-link"
            >
              Contact
            </Link>
          </li>
          <li className="close">
            <i class="ri-close-line" onClick={toggleMenu}></i>
          </li>
        </ul>
      </div>

      <div>
        <i
          class="ri-menu-line text-white font-[600] text-[30px] cursor-pointer menu "
          onClick={toggleMenu}
        ></i>
      </div>
    </nav>
  );
};

export default Header;
