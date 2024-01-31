import React from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
function Contact() {
  return (
    <section id='Contact'>
      <h5>
        Get in touch
      </h5>
      <h2>
        Contact Me
      </h2>
      <div className=" container conatct_container">
        <div className="contact_options">
          <article className="contact_option">
          <MdEmail className='icons' />
            <h4>Email</h4>
            <h5>visheshhirisave@gmail.com</h5>
            <a href='mailto:visheshhirisave@gmail.com' target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
          <FaTwitter className='icons'/>
            <h4>Twitter</h4>
            <h5>VISHESH_1525</h5>
            <a href='https://twitter.com/messages' target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
          <FaWhatsappSquare className='icons' />
            <h4>Whatsapp</h4>
            <h5>9481262426</h5>
            <a href='https://wa.me/9481262426' target="_blank">Send a Message</a>

          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Full name' required></input>
          <input type='email' name='email' placeholder='Your Email' required></input>
          <textarea name='message' rows='7' placeholder=' Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
