import React from 'react';

const Project = ({ portfolioInfo }) => {
    
    return (
        <div className="project row" key={portfolioInfo.name}>
            <img src={portfolioInfo.imageURL} alt={portfolioInfo.description}/>
            <h2>{portfolioInfo.name}</h2>
            <h6><a href={portfolioInfo.deployedUrl}>live</a></h6>
            <h6><a href={portfolioInfo.githubURL}>repo</a></h6>
        </div>
    );
};

export default Project;