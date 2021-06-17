import React from 'react';
import { 
  Grid,  
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button } from '@material-ui/core';
import { portfolioInfo } from "../assets/portfolioData";
import { makeStyles } from '@material-ui/core/styles';
// import '../../src/App.css';



const useStyles = makeStyles({
  portfolioContainer: {
    marginTop: 20,
    padding: 30
  }
});

function Portfolio(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.portfolioContainer}>
      <Grid container spacing={7} justify="center">
        {portfolioInfo.map(project => (
          <Grid item key={project.title}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="master ticket app"
                  height="300"
                  width="300"
                  image={project.imageURL}
                  title="masterTicket app"
                />
                <CardContent>
                  <Typography>
                    {project.title}
                  </Typography>
                  <Typography component="p">{project.description}</Typography>
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
    </div>
  )
}

export default Portfolio;