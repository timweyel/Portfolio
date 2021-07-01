import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { portfolioInfo } from '../assets/portfolioData';

console.log('portfolioInfo.githubURL', portfolioInfo.githubURL);
console.log('typeof portfolioInfo', typeof portfolioInfo);
console.log('portfolioInfo.name' ,portfolioInfo.name);

const Project = ({ portfolioInfo }) => {
    
    return (
        
        <article key={portfolioInfo.name}>
            <Typography>
                <img src={portfolioInfo.imageURL} alt={portfolioInfo.description}/>
                <div>{portfolioInfo.name}</div>
                <div>
                    <Link to={ portfolioInfo.githubURL }>Demo</Link>
                    {/* <Link to={location => ({ ...location, pathname: portfolioInfo.githubURL })}>link</Link> */}
                    {/* <Link to={({ pathname: `${portfolioInfo.githubURL}` })}>{portfolioInfo.githubURL}</Link> */}
                </div>
                <div>
                    {/* <Link to={ portfolioInfo.githubURL }>Repo</Link> */}
                </div>
            </Typography>
        </article>

    );
};

export default Project;

