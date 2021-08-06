import React from 'react';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import masterticket2 from '../assets/images/masterTicket2.png';
import wineNdine from '../assets/images/Wine-n-Dine.png';
import masterTicket from '../assets/images/masterTicket.png';


const useStyles = makeStyles((theme) => ({

  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

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
    description: "masterTicket is THE place to find music events for YOU. Find details about the events like venue information, band details, and see how many people have RSVP'd to attend. Check out the Featured Event section that showcases the biggest shows! And don't forget our Staff Picks section that highlights events recommended by masterTicket staff! Whether it's an 80s big hair rock band or a small, indie artist, you can find out all the details here at masterTicket! We built this project using express, express-handlebars, express-session, mysql2, and sequelize.",
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

function Portfolio() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Tim Weyel
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Full stack web developer with Product and Project management experience. Recent graduate from UC 
            Berkeley’s Full Stack Javascript development program with experience working with HTML, CSS, Express, 
            Sequelize, Mongoose, Node, MongoDB, MySQL, Apollo, Handlebars, and React.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {portfolioInfo.map((project, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.project}>
                  <CardMedia
                    className={classes.cardMedia}
                    // component="img"
                    image={project.imageURL}
                    title={project.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                    </Typography>
                    <Typography>
                    {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link to={{ pathname: project.githubURL }} target="_blank" className="repoDemoLink" rel="noreferrer">Repo</Link>
                    </Button>
                    <Button size="small" color="primary">
                    <Link to={{ pathname: project.deployedURL }} target="_blank" className="repoDemoLink" rel="noreferrer">Demo</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>


    </React.Fragment>
  );
}

export default Portfolio;