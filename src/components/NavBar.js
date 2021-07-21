import React from 'react';
import { Link } from "react-router-dom";
import '../../src/index.css';

const NavBar = () => {

  return (
    <>
      <nav className="flex-row sm:text-xl ">
        <Link
          to="/about"
          className="navlink hover:bg-green-900 md:p-2 rounded-lg">
          About Me
        </Link>
        <Link
          to="/portfolio"
          className="navlink hover:bg-green-900 md:p-2 rounded-lg">
          Portfolio
        </Link>
        <Link
          to="/resume"
          className="navlink hover:bg-green-900 md:p-2 rounded-lg">
          Resume
        </Link>
        {/* <Link
          to="/contact"
          className="navlink hover:bg-green-900 md:p-2 rounded-lg">
          Contact Me
        </Link> */}
      </nav>
    </>
  );
}

export default NavBar;