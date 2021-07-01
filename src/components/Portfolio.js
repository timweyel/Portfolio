import React from 'react';
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
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  portfolioContainer: {
    padding: 30,
  },
    images: {
      height: 300
    },
    cardHeight: {
      height: "100%"
    },
    title: {
      fontSize: "20px",
      color: "#696D7D",
      fontWeight: "bolder",
      paddingBottom: "10px"
    },
    description: {
      color: "#696D7D",
    }
});

const Portfolio = () => {
  const classes = useStyles();
  
  console.log('portfolioInfo',portfolioInfo);
  // console.log('project', Project);

  return (
    
    <section className={classes.portfolioContainer}>
      <Grid container spacing={4} justify="center">
        {portfolioInfo.map(project => (
          <Grid item xs={12} md={4} sm={6} lg={4} key={project.title}>
            <Card className={classes.cardHeight}>
              <CardActionArea>
                <CardMedia className={classes.images}
                  component="img"
                  alt={project.alt}                  
                  image={project.imageURL}
                />
                <CardContent>
                  <Typography className={classes.title}>
                    {project.title}
                  </Typography>
                  <Typography component="span">{project.description}</Typography>
                  {/* <Link to={{ pathname: portfolioInfo.githubURL }}>link</Link> */}
                  < Project portfolioInfo={portfolioInfo} />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
               
                </Button>
              </CardActions>
            </Card>

          </Grid>
        ))}
      </Grid>
    </section>
  )
  
}

export default Portfolio;