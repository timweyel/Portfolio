import React from 'react';
import { Grid } from '@material-ui/core';

import masterTicketImg from "../assets/images/masterTicket.png"
import wineNdineImg from "../assets/images/Wine-n-Dine.png";



  const portfolio = [
    {
      title: "masterTicket",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: `../assets/images/masterTicket.png`,
      appLink: `https://masterticket.herokuapp.com/`,
      gitLink: `https://github.com/UCB-Bootcamp/masterTicket`
    },
    {
      title: "Wine-n-Dine",
      description: `Wine and Dine is an application built to help users pair wine with food. Wine and Dine also offers alternative cocktail options for users who would like a beverage other than wine.`,
      image: `../assets/images/Wine-n-Dine.png`,
      appLink: `https://ucb-bootcamp.github.io/wine-and-dine/`,
      gitLink: `https://github.com/UCB-Bootcamp/wine-and-dine`
    },
    {
      title: "Project 3",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: `project3image`,
      appLink: `link to app`,
      gitLink: `link to repo`
    },
    {
      title: "Project 4",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: `project4image`,
      appLink: `link to app`,
      gitLink: `link to repo`
    },
    {
      title: "Project 5",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: `project5image`,
      appLink: `link to app`,
      gitLink: `link to repo`
    },
    {
      title: "Project 6",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      consequatur magni quod nesciunt necessitatibus molestiae non
      eligendi, magnam est aliquam recusandae? Magnam soluta minus
      iste alias sunt veritatis nisi dolores!`,
      image: `project6image`,
      appLink: `link to app`,
      gitLink: `link to repo`
    },
  ];

  function Portfolio() {

  return (

    <section>
      <Grid container spacing={3}>
        <Grid item xs>
          <h1>{portfolio[0].title}</h1>
          <div className="flex-row">
            <img 
              src={masterTicketImg}
              alt="masterTicket app"
              className = "img-thumbnail mx-1"
            />
          </div>
        </Grid>
        <Grid item xs>
          <h1>{portfolio[1].title}</h1>
          <div className="flex-row">
            <img 
              src={wineNdineImg}
              alt="wine-n-dine app"
              className = "img-thumbnail mx-1"
            />
          </div>
        </Grid>
        <Grid item xs>
          <h1>{portfolio[1].title}</h1>
          <div className="flex-row">
            <img 
              src={wineNdineImg}
              alt="wine-n-dine app"
              className = "img-thumbnail mx-1"
            />
          </div>
        </Grid>
        <Grid item xs>
          <h1>{portfolio[1].title}</h1>
          <div className="flex-row">
            <img 
              src={wineNdineImg}
              alt="wine-n-dine app"
              className = "img-thumbnail mx-1"
            />
          </div>
        </Grid>
        <Grid item xs>
          <h1>{portfolio[1].title}</h1>
          <div className="flex-row">
            <img 
              src={wineNdineImg}
              alt="wine-n-dine app"
              className = "img-thumbnail mx-1"
            />
          </div>
        </Grid>
        <Grid item xs>
          <h1>{portfolio[1].title}</h1>
          <div className="flex-row">
            <img 
              src={wineNdineImg}
              alt="wine-n-dine app"
              className = "img-thumbnail mx-1"
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
}


// {portfolio.map((project) => (
//   <li
//     key={project.title}
//   >
//       <span onClick={() => projectSelected(project.name)}>
//         {project.title}
//       </span>
//   </li>          
// ))}

export default Portfolio;



// import React from 'react';
// import { 
//   GridList, 
//   Typography, 
//   makeStyles, 
//   Card,
//   GridListTile,
//   CardHeader,
//   CardActions,
//   Button
//    } from "@material-ui/core";
// import Header from "./Header";


// export default function Projects() {
//   const useStyles = makeStyles();
//   const tileData = [];
//   return (
//     <div className={useStyles.root}>
//     {/* <Header /> */}
//       <Typography variant="h3" gutterBottom>
//         Projects area
//       </Typography>
//       <GridList className={useStyles.gridList} cols={3} spacing={30}>
//         {tileData.map(tile => (
//           <GridListTile cols={1} className={useStyles.gridTile}>
//             <Card>
//               <CardHeader title={tile} />
//               <CardActions>
//                 <Button size="small" color="primary" variant="outlined">
//                   Read more
//                 </Button>
//               </CardActions>
//             </Card>
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }