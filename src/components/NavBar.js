import React from 'react';
import { Link } from "react-router-dom";
import "../index.css";
import "../App.css";

const NavBar = () => {

  return (
    <>
        <nav className="flex-row">
          <Link
              to="/about"
              activeClassName=""
              className="">
              About Me
          </Link>
          <Link
              to="/portfolio"
              activeClassName=""
              className="">
              Portfolio
          </Link>
          <Link
              to="/resume"
              activeClassName=""
              className="">
              Resume
          </Link>
          <Link
              to="/contact"
              activeClassName=""
              className="">
              Contact Me
          </Link>
        </nav>
    </>
  );
}

export default NavBar;