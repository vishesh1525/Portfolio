import React from 'react'
import { GoProjectRoadmap } from "react-icons/go";
import './services.css'
function Services() {
  return (
    <section id='Services'>
     <h5>Get to know about my projects</h5>
      <h2>Projects</h2>
           <div className="project_container">
           
                
                <article className='projects'>
                  <div className="project_head">
                    <h3>Fantasy Cricket Website </h3>
                  </div>
                  <ul className='project_descrption'>
                       
                       <li>
                       <GoProjectRoadmap className='project_descrption-icon' />
                       <p>Developed a Fantasy Cricket website enabling users to create virtual
                          teams, join leagues, and compete based on real match statistics.
                          Implemented real-time functionality and ensured responsiveness across devices</p>                       </li>
                       <li>
                       <GoProjectRoadmap className='project_descrption-icon' />
                       <p>Utilized technologies such as HTML, CSS, and JavaScript to create an
                        engaging user experience. Integrated multiple HTML files to
                           establish seamless navigation between various sections of the website. </p>                       </li>
                       <li>
                       <GoProjectRoadmap className='project_descrption-icon' />
                        <p>
                        Ensured responsiveness across devices to provide a seamless gaming experience on different screen sizes.
                        </p>
                       </li>
                       <li>
                       <GoProjectRoadmap className='project_descrption-icon' />
                        <p>
                        Integrated multiple HTML files to establish seamless navigation between various sections of the website.
                        </p>
                       </li>
                  </ul>
                </article>
                <article className='projects'>
                  <div className="project_head">
                 <h3> FULLSTACK WEB DEVLOPMENT OF BOOKING WEBSITE</h3>
                  </div>
                  <ul className='project_descrption'>
                       
                  <li>
                       <GoProjectRoadmap className='project_descrption-icon' />
                       <p>Engineered a comprehensive booking website using the MERN
                         (MongoDB, Express.js, React.js, Node.js) stack, following the MVC
                          (Model-View-Controller) design pattern.</p>                       </li>
                       <li>
                       <GoProjectRoadmap className='project_descrption-icon' />
                       <p>Established a secure and efficient database architecture using
                           MongoDB, ensuring seamless integration with the backend.
                            Implemented Mongoose ODM for data modeling, validation, and
                           interaction with the MongoDB database.</p>                       </li>
                       <li>
                       <GoProjectRoadmap className='project_descrption-icon' />
                       <p>Integrated third-party libraries and APIs to enhance the booking website's functionality, geolocation services, and authentication providers.  </p>                       </li>
                  
                       
                       <li>
                       <GoProjectRoadmap className='project_descrption-icon' />
                       <p>Collaborated with UI/UX designers to implement visually appealing
                         and user-friendly interfaces, ensuring a seamless and enjoyable
                        experience for website visitors.
</p>                       </li>
                       
                  </ul>
                </article>
                <article className='projects'>
                  <div className="project_head">
                  <h3>Spotify Clone</h3>
                  </div>
                  <ul className='project_descrption'>
                       
                  <li>
                       <GoProjectRoadmap />
                       <p>Developed a Spotify clone using HTML and CSS, faithfully replicating
                          the user interface and design. Implemented responsive design for optimal viewing on various devices. Demonstrated proficiency in
                          front-end web development, including HTML5 and CSS3.</p>                       </li>
                       <li>
                       <GoProjectRoadmap />
                       <p>Showcased creativity and problem-solving skills in overcoming
                         challenges during the development process</p>                       </li>
                       <li>
                       <GoProjectRoadmap />
                       <p>Implemented responsive design principles, ensuring a seamless user experience on desktops, tablets, and mobile devices.</p>                       </li>
                       <li>
                       <GoProjectRoadmap />
                       <p>Successfully replicated the Spotify UI, showcasing attention to detail and design fidelity</p>                       </li>
                       
                       
                  </ul>
                </article>
           </div>
           
          
    </section>
  )
}

export default Services
