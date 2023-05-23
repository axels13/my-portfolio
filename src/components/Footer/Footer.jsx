import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="text-[#fff]  justify-evenly  pt-3 font-[600] footer-content">
        <span> Designed and Developed by Axel A.Cadona </span>
        <span className="font-[100]">Copyright © 2023 Ax</span>

        <div className="flex gap-2">
          <Link to="https://github.com/axels13">
            <i className="ri-twitter-fill cursor-pointer"></i>
          </Link>
          <Link>
            <i className="ri-github-fill cursor-pointer" target="_black"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/axel-cadona-137b57215/">
            <i className="ri-linkedin-fill cursor-pointer"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
