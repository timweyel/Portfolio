import React from 'react';

const Project = ({ portfolioInfo }) => {
    
    return (
        <div className="project row" key={portfolioInfo.name}>
            <img src={portfolioInfo.imageURL} alt={portfolioInfo.description}/>
            <h2>{portfolioInfo.name}</h2>
            <p><a href={portfolioInfo.deployedUrl}>live</a></p>
            <p><a href={portfolioInfo.githubURL}>repo</a></p>
        </div>
    );
};

export default Project;