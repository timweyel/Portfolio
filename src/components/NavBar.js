import React from 'react';
import { Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import '../../src/index.css';

const useStyles = makeStyles((theme) => ({
  appbar: {
    alignItems: 'center'
  }
}));

const NavBar = () => {

  const classes = useStyles();

  return (
    <>
      <AppBar position="relative" className={classes.appbar}>
        <Toolbar className="align=center">
          <Typography  variant="h6"  noWrap>
            {/* <nav className="flex-row space-between sm:text-xl "> */}
              <Link
                to="/about"
                className="navlink md:p-2">
                About Me  
              </Link>
              <Link
                to="/portfolio"
                className="navlink md:p-2">
                | Portfolio
              </Link>
              <Link
                to={{ pathname: "https://github.com/timweyel" }} target="_blank" 
                className="navlink md:p-2">
                | Github
              </Link>
              <Link
                to={{ pathname: "https://www.linkedin.com/in/timweyel/" }} target="_blank"
                className="navlink md:p-2">
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