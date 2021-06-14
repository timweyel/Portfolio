import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  } from "@material-ui/core";
import Navigation from './Navigation';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Tim Weyel
            <Navigation />
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}