import React, { useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import "../index.css";
// import "../App.css";

const useStyles = makeStyles({
  nav: {

  display: "flex",
  flexWrap: "wrap",
  justify: "space-between"

//TODO: get nav tabs to justify right
  }
});

function NavBar(props) {
  const classes = useStyles();

  // const [currentTab, setCurrentTab] = useState(tabs[0]);
  const tabs = [
    {
      name: 'About'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ];

  function tabSelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <div>
      <List component={classes.nav}>
        <ListItem component="div">
          {tabs.map((tab) => (
          <ListItem 
          key={tab.name}
          >
          <span onClick={() => tabSelected(tab.name)} >
            {tab.name}
          </span>
          </ListItem>
          ))}
        </ListItem>
      </List>
    </div>
  );
}

export default NavBar;