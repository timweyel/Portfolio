import React from 'react';
import photo from '../assets/profile pic.jpg';

function About() {
  return (
    <div className=" mx-auto px-10 ">
      <div className="text-xl text-center pt-5 pb-5"></div>
        <div className="flex">
          <img src={photo} alt="Tim singing" className="photoContainer"/>
          <div className="pl-8">
            <p>Budding full stack developer with 15+ years experience in Software Product Management.
                Results-oriented, innovative professional known for ability to create alignment 
                between internal and external stakeholders while translating user requirements 
                into market-ready product solutions that delight clients. Ambitiously engaged in 
                transitioning from working on what software gets built to how the software gets built.</p>
              <br />
            <p >When I'm not knee deep in code, I enjoy playing, coaching, and watching soccer, hiking 
            around the beautiful Santa Barbara area, or working on my house.</p>
          </div>
        </div>
    </div>

  );
}

export default About;