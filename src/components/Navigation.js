import React from 'react';
//import { makeStyles, Container } from "@material-ui/core"

import "../App.css";
//import { Router } from '@material-ui/icons';


// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: "120px"
//   }
// }));

const projectInfo = [
  {
    title: "Project 1",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    image: `project1image`,
    appLink: `link to app`,
    gitLink: `link to repo`
  },
  {
    title: "Project 2",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    image: `project2image`,
    appLink: `link to app`,
    gitLink: `link to repo`
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

function projectSelected() {
  console.log('projectSelected')
}

function Navigation() {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {projectInfo.map((project) => (
            <li
              key={project.title}
            >
                <span onClick={() => projectSelected(project.name)}>
                  {project.title}
                </span>
            </li>          
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;