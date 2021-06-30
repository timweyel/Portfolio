import React from 'react';
import resume from '../assets/Resume - Tim Weyel.pdf';

const Resume = () => {
  return (
      <section className="container mx-auto pt-20 resume">
          <div className="">
          
          </div>
          <div className="">
          <h1 className="text-center pb-10">Technologies:</h1>
                  <p className="text-center">MERN Stack
                  JavaScript, HTML5/CSS3, JQuery, React, MongoDB, SQL, Git, Heroku
                  </p>
              <div className = 'download text-center pt-10 underline'>
                 
                  <a href={resume} download><p>Download my resume</p></a>
              </div>
              <div className =''>

              </div>
          </div>
      </section>
  );
};

export default Resume;