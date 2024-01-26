import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocials from './Headersocials'
function Header() {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>VISHESH P GOWDA</h1>
        <h5 className='text-light'>STUDENT OF INFORMATION SCIENCE</h5>
        <CTA></CTA>
        <Headersocials/>
        <div className='me'>
            <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll_down'><b>Scroll Down</b></a>
      </div>

    </header>
  )
}

export default Header
