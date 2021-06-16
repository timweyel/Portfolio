import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

// import "../index.css";
// import "../App.css";

function NavBar(props) {

  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset color="inherit" variant="title">
          <Typography>
            About
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography color="inherit" variant="title">
            Portfolio
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography color="inherit" variant="title">
            Contact
          </Typography>
        </ListItemText>

        <ListItemText inset>
          <Typography color="inherit" variant="title">
            Resume
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;