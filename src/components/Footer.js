
import React from 'react';
import { AppBar, Toolbar, Typography, Container, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  footer: {
    backgroundColor: "rgb(111, 146, 131)",
    position: "fixed",
    left: "0",
    bottom: "0",
    boxShadow: "none"
  }
});

function Footer() {
  const classes = useStyles();

  return (
      <AppBar className={classes.footer} position="static" >
        <Container maxWidth="md">
          <Toolbar>
            <Typography >
              made by: Me
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Footer;