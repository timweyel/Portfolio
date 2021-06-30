import React from 'react';
import { Link } from '@material-ui/core';

const Project = ({ portfolioInfo }) => {
    
    return (
        <div key={portfolioInfo.name}>
            <img src={portfolioInfo.imageURL} alt={portfolioInfo.description}/>
            <h2>{portfolioInfo.name}</h2>
            <div>
            <Link href={portfolioInfo.githubURL}>Demo</Link>
            </div>
            <div>
                <Link href={portfolioInfo.githubURL}>Repo</Link>
            </div>
        </div>
    );
};

export default Project;

