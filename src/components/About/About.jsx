import React from 'react'
import ME from '../../assets/me-about.jpg'
import { BiAward } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";
import './About.css'
function About() {
  return (
    <section id='About'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
           <div className="about_me">
            <div className="about_me_image">
                   <img src={ME} alt=""/>
             </div>
          </div>
            <div className="about_me_content">
              <div className='about_cards'>
                <article className="about_cards">
                   <BiAward className='about_icon'/>
                      <h5>EXperince</h5>
                      <small>Fresher</small>
                </article>
                <article className="about_cards">
                      <FaFolderOpen className='about_icon'/>
                      <h5>Projects</h5>
                      <small>5+</small>
                 </article>
            
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laboriosam, est incidunt odit dolor blanditiis similique cumque, eum reiciendis veniam sunt maiores placeat molestiae temporibus accusamus perspiciatis adipisci doloremque aut?
            </p>
            <a href="#contact">Lets connect</a>
          </div>   
      </div>
    </section>
  )
}

export default About
