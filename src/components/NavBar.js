import React from 'react';
import { Link } from "react-router-dom";
import '../../src/index.css';

const NavBar = () => {

  return (
    <>
      <nav className="flex-row space-between sm:text-xl ">
        <Link
          to="/about"
          className="navlink hover:bg-green-900 md:p-2 rounded-lg pr-2  ">
           About Me  
        </Link>
        <Link
          to="/portfolio"
          className="navlink hover:bg-green-900 md:p-2 rounded-lg">
          |  Portfolio
        </Link>
        <Link
          to="https://github.com/timweyel"
          className="navlink hover:bg-green-900 md:p-2 rounded-lg">
          | Github
        </Link>
        <Link
          to="https://www.linkedin.com/in/timweyel/"
          className="navlink hover:bg-green-900 md:p-2 rounded-lg">
          | Linkedin
        </Link>
      </nav>
    </>
  );
}

export default NavBar;