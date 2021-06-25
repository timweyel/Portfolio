import React, { useState } from 'react';
import { ReactDOM } from 'react-dom';
import { 
  Grid,  
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  makeStyles } from '@material-ui/core';
import { portfolioInfo } from "../assets/portfolioData";
import Project from './Project';
import NavBar from './NavBar';
import Contact from './Contact';
// import Resume from './Resume';
import About from './About';

import '../../src/App.css';

const useStyles = makeStyles({
  portfolioContainer: {
    marginTop: 20,
    padding: 30,
  },
  images: {
    height: 300
  }
});

const Portfolio = () => {
  const classes = useStyles();
  
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch(currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      // case 'Resume':
      //   return <Resume />;
      default: 
      return <About />
    }
  }

  return (
    <div className={classes.portfolioContainer}>
      <Grid container spacing={4} justify="center">
        {portfolioInfo.map(project => (
          <Grid item md={4} lg={6} sm={2} xs={1} key={project.title}>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.images}
                  component="img"
                  alt={project.alt}                  
                  image={project.imageURL}
                />
                <CardContent>
                  <Typography>
                    {project.title}
                  </Typography>
                  <Typography component="p">{project.description}</Typography>
                  < Project portfolioInfo={portfolioInfo} />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>

          </Grid>
        ))}
      </Grid>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  )

}


export default Portfolio;