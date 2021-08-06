import React from 'react';
import photo from '../assets/profile_pic.jpg';
import resume from '../assets/Resume - Tim Weyel.pdf';

function About() {
  return (
    <section className=" mx-auto px-10 ">
      <div className="text-xl text-center pt-5 pb-5"></div>
        <div className="flex">
          <img src={photo} alt="Tim singing" className="photoContainer"/>
          <div className="pl-8">
            <p>Full stack developer with 15+ years experience in Software Product Management.
              Results-oriented, innovative professional known for ability to create alignment 
              between internal and external stakeholders while translating user requirements 
              into market-ready product solutions that delight clients. Ambitiously engaged in 
              transitioning from working on what software gets built to how the software gets built.
              I a recent graduate from the UC Berkeley Full-Stack Coding Boot Camp.
            </p>
              <br/>
            <p>Towards the end of the bootcamp, we developed a couple of projects using React. While I'm sure I still 
            have a ton to learn about it, the componentization and flexibility it lends seem to be major advantages 
            that it holds. I have yet to experience its performance under high-load but am eager to learn about all 
            the benefits it touts. With the final two projects, we implemented this portfolio and the masterTicket2.0 
            project using the MERN stack. 
            </p>
              <br />
            <p>Other technologies that we studied and implemented projects with were:              </p>
            <div className="container grid">
              <div>
              <h5 className="list-headers">Frontend</h5>                
                  <ul>

                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Handlebars</li>
                    <li>Bootstrap, Material UI, Tailwind</li>
                  </ul>
              </div>
              <div>
              <h5 className="list-headers">Backend</h5>
                  <ul>

                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>Sequelize</li>
                    <li>Mongoose</li>
                  </ul>
              </div>
              <div>
              <h5 className="list-headers">Database</h5>
                  <ul>

                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                  </ul>
              </div>
              </div>
                  <br />
                <p >When I'm not knee deep in code, I enjoy playing, coaching, or watching soccer, hiking 
                around the beautiful Santa Barbara area, or working on my house.</p>
                  <br />
              <div>
                <p >I'd love to talk to you about any opportunities for us to work together. <a href="mailto:tweyel@gmail.com?subject=Want to chat?" className="email ">Email Me</a> or <a href={resume} download className="underline">Download My Resume</a></p>
              </div>
          </div>
        </div>
    </section>

  );
}

export default About;