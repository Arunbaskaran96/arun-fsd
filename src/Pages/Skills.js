import React from 'react'
import './Pages.css'

function Skills() {
  const skills=[
    {
      img:"https://cdn.iconscout.com/icon/free/png-512/html-2752158-2284975.png?f=avif&w=256",
      topic:"HTML"
    },
    {
      img:"https://cdn.iconscout.com/icon/free/png-512/css-131-722685.png?f=avif&w=256",
      topic:"CSS"
    },
    {
      img:"https://cdn.iconscout.com/icon/free/png-512/javascript-2038874-1720087.png?f=avif&w=256",
      topic:"JAVASCRIPT"
    },
    {
      img:"https://cdn.iconscout.com/icon/free/png-512/react-3-1175109.png?f=avif&w=256",
      topic:"REACT"
    },
    {
      img:"https://cdn.iconscout.com/icon/free/png-512/mongodb-4-1175139.png?f=avif&w=256",
      topic:"MONGODB"
    },
    {
      img:"https://cdn.iconscout.com/icon/free/png-512/node-js-3-1174937.png?f=avif&w=256",
      topic:"NODE JS"
    },
    {
      img:"https://cdn.iconscout.com/icon/free/png-512/visual-studio-code-3251603-2724650.png?f=avif&w=256",
      topic:"VS CODE"
    },
    {
      img:"https://cdn.iconscout.com/icon/free/png-512/bootstrap-1-226079.png?f=avif&w=256",
      topic:"BOOTSTRAP"
    },
    {
      img:"https://cdn.iconscout.com/icon/free/png-512/express-9-1175170.png?f=avif&w=256",
      topic:"EXPRESS JS"
    },
  ]
  return (
    <div className='container-fluid skills-container'>
      <div className='row'>
        <div className='col-md-12' style={{textAlign:"center",marginTop:"10px"}}>
          <h3 className='skills-heading'>Skills</h3>
        </div>
      </div>
      <div className='row' style={{marginTop:"15px"}}>
        <div className='col-md-3 skill-minicard'>
          <h4 className='skill-line1'>Web Design</h4>
          <p>I love designs and it's the first step before creating any website as I can give layout to my imagination.</p>
        </div>
        <div className='col-md-3 skill-minicard'>
          <h4  className='skill-line1'>Web Development</h4>
          <p>I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.</p>
        </div>
        <div className='col-md-3 skill-minicard'>
          <h4  className='skill-line1'>Problem Solving</h4>
          <p>I love solving problems whether it's programming problems or real life problems.</p>
        </div>
      </div>
      <div className='row' style={{marginTop:"18px"}}>
        <div className='col-md-12 tech-skill'>
          <h4>TECH I AM FAMILIAR WITH</h4>
        </div>
      </div>
      <div className='row'>
        {
          skills.map((item)=>{
            return(
              <div className='col-md-2  tech-minicard'>
                <img className='skill-img' src={item.img} alt="skill-img"/>
                <h6 className='skill-topic' style={{textAlign:"center"}}>{item.topic}</h6>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills