import React from 'react';
import { Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import '../../src/index.css';

const useStyles = makeStyles((theme) => ({
  appbar: {
    alignItems: 'center',
    backgroundColor: 'var(--tertiary)'
  }
}));

const NavBar = () => {

  const classes = useStyles();

  return (
    <>
      <AppBar position="relative" className={classes.appbar}>
        <Toolbar className="align=center">
          <Typography  variant="h6"  noWrap>
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
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;