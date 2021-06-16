import React from 'react';
import { 
  Grid, 
  Paper, 
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button } from '@material-ui/core';
import { array } from "../assets/portfolioData";

function Portfolio(props) {
  return (
    <div>
      <Grid container>
        {array.map(project => (
          <Grid item key={project.title}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="master ticket app"
                  // height
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
                <Button size="small" color="red">
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