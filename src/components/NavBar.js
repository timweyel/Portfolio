import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import "../index.css";
// import "../App.css";

const useStyles = makeStyles({
  nav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flexEnd"
  }
});

function NavBar(props) {
  const classes = useStyles();

  return (
    <div>
      <List component={classes.nav}>
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
    </div>
  );
}

export default NavBar;