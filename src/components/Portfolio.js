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
import { Link } from 'react-router-dom';
import masterticket2 from '../assets/images/masterTicket2.png';
import wineNdine from '../assets/images/Wine-n-Dine.png';
import masterTicket from '../assets/images/masterTicket.png';
import weatherApp from '../assets/images/weather-app.png';
import runBuddy from '../assets/images/Run-Buddy.png';
import passwordGenerator from '../assets/images/password-generator.png';


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

  const portfolioInfo = [
    {
      title: "masterTicket2.0",
      alt: "masterTicket2",
      description: "masterTicket2.0 is a refactor of our original masterTicket group project. masterTicket2.0 uses the MERN (MongoDB, Express, React, Node) stack to provide a forum-like site where a user can post musical events and mark an event as something they are attending. Users also have a dashboard where they can see all of the events that they've posted as well as the one that are attending.",
      imageURL: masterticket2,
      githubURL: "https://github.com/UCB-Bootcamp/masterTicket2.0",
      deployedURL: "https://masterticket2.herokuapp.com/",
    },
    {
      title: "Wine-n-Dine",
      alt: "Wine-n-Dine",
      description: `When a user selects a wine, they are given a list of recipes that would pair with their selected wine.
      A user can also hit a "Surprise Me!' button to be given a random wine and food pairing suggestion.
      Users can view previously selected wines to revisit at a later time in their history page.
      If a user feels like a cocktail instead of wine, they can select the cocktail button where they are given cocktail suggestions and a list of ingredients. We built this app using HTML, CSS and Javascript. It utilizes jQuery and Materialize as a UI Framework as well as icons from Material.io. It leverages APIs from Unsplash, Spoonacular and the Cocktail DB. It's deployed using Github Pages.`,
      imageURL: wineNdine,
      githubURL: "https://github.com/UCB-Bootcamp/wine-and-dine",
      deployedURL: "https://ucb-bootcamp.github.io/wine-and-dine/",
    },
    {
      title: "masterTicket",
      alt: "masterTicket",
      description: "masterTicket is THE place to find music events for YOU. Find details about the events like venue information, band details, and see how many people have RSVP'd to attend. Check out the Featured Event section that showcases the biggest shows! And don't forget our Staff Picks section that highlights events recommended by masterTicket staff! Whether it's an 80s big hair rock band or a small, indie artist, you can find out all the details here at masterTicket! We build this project using express, express-handlebars, express-session, mysql2, and sequelize.",
      imageURL: masterTicket,
      githubURL: "https://github.com/UCB-Bootcamp/masterTicket",
      deployedURL: "https://masterticket.herokuapp.com/",
    },
    // {
    //   title: "Weather Dashboard",
    //   alt: "Weather Dashboard",
    //   description: "Weather Dashboard using the OpenWeatherMap api. A user can search for a city and it will return the current weather and 5-day forecast. Cities are saved to local storage for easy searching at later date.",
    //   imageURL: weatherApp,
    //   githubURL: "https://github.com/timweyel/weather-dashboard",
    //   deployedURL: "https://timweyel.github.io/weather-dashboard/",
    // },
    // {
    //   title: "Run Buddy",
    //   alt: "Run Buddy",
    //   description: "Refactor website to include media queries and flexbox to make the site more engaging and mobile-responsive.",
    //   imageURL: runBuddy,
    //   githubURL: "../assets/images/Run-Buddy.png",
    //   deployedURL: "https://timweyel.github.io/run-buddy/",
    // },
    // {
    //   title: "Password Generator",
    //   alt: "Password Generator",
    //   description: "An application that allows a user to generate a random password based on the character criteria they’ve selected",
    //   imageURL: passwordGenerator,
    //   githubURL: "https://github.com/timweyel/password-generator",
    //   deployedURL: "https://timweyel.github.io/password-generator/",
    // },
  ];

  return (
    
    <section className={classes.portfolioContainer}>
      <Grid container spacing={4} justify="center">
        {portfolioInfo.map((project, i) => (
          <Grid item xs={12} md={4} sm={6} lg={4} key={i}>
            <Card className={classes.cardHeight}>
              <CardActionArea>
                <CardMedia square
                  className={classes.images}
                  component="img"
                  alt={project.alt}                  
                  image={project.imageURL}
                />
                <CardContent>
                  <Typography className={classes.title}>
                    {project.title}
                  </Typography>
                  <Typography component="span">{project.description}</Typography>
                  <p>
                    <span>
                      <Link to={{ pathname: project.githubURL }} target="_blank" className="repoDemoLink" rel="noreferrer">Repo</Link>
                    </span>
                  </p>
                  <p>
                    <span>
                      <Link to={{ pathname: project.deployedURL }} target="_blank" className="repoDemoLink" rel="noreferrer">Demo</Link>
                    </span>
                  </p>
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