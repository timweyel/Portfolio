import React from 'react';
import { Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import '../../src/index.css';

const NavBar = () => {

  return (
    <>
      <AppBar position="relative">
        <Toolbar >
          <Typography className="flex-row space-between" variant="h6" color="inherit" noWrap>
            {/* <nav className="flex-row space-between sm:text-xl "> */}
              <Link
                to="/about"
                className="navlink hover:bg-green-900 md:p-2 rounded-lg pr-2">
                About Me  
              </Link>
              <Link
                to="/portfolio"
                className="navlink hover:bg-green-900 md:p-2 rounded-lg">
                | Portfolio
              </Link>
              <Link
                to={{ pathname: "https://github.com/timweyel" }} target="_blank" 
                className="navlink hover:bg-green-900 md:p-2 rounded-lg">
                | Github
              </Link>
              <Link
                to={{ pathname: "https://www.linkedin.com/in/timweyel/" }} target="_blank"
                className="navlink hover:bg-green-900 md:p-2 rounded-lg">
                | Linkedin
              </Link>
            {/* </nav> */}
          </Typography>
        </Toolbar>
      </AppBar>

    </>
  );
}

export default NavBar;