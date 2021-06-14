import React from 'react';
import { Link } from 'react-router-dom';
//import { makeStyles, Container } from "@material-ui/core"
import "../index.css";
import "../App.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Navigation() {

  const navLinks = [
    {
      url: 'About'
    },
    {
      url: 'Portfolio'
    },
    {
      url: 'Resume'
    },
    {
      url: 'Contact'
    }
  ]

  return (
    <header >
      <nav >
      <List >
        {navLinks.map((link, index) => (
          <ListItem
            className="flex-row px-1"
            component = {Link}
            to={link.url}
            button
            key={index}
            >
              <ListItemText primary={link.url} />
          </ListItem>
        ))}
      </List>
        {/* <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          <li>
            <span>Resume</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}

export default Navigation;