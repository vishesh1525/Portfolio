import React from 'react'

import IMG4 from '../../assets/4.png'

import './portfolio.css'

const data=[
  {
    id:1,
    image:IMG4,
    title:'Project in frontend',
    github:'https://github.com',
    demo:"https://github.com"
  },
  {
    id:2,
    image:IMG4,
    title:'Project in frontend',
    github:'https://github.com',
    demo:"https://github.com"
  },
  {
    id:3,
    image:IMG4,
    title:'Project in frontend',
    github:'https://github.com',
    demo:"https://github.com"
  }
]
function Portfolio() {
  return (
    <section id="Portfolio">
      <h5>MY receent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item_image">
              <img src={image} alt="img1"></img>
            </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
             <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
           
             </div>
           
          </article>
          )

        })
      }
        
      </div>


    </section>
  )
}

export default Portfolio
