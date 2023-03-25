import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

function Home() {
  return (
    <div className='about-container'>
    <div className='about-minicard'>
    <div>
      <img src=""></img>
      <h3 className='about-wel'>Welcome</h3>
      <h6 className='about-iam'>I am</h6>
      <h4 className='about-name'>Arun.B</h4>
      <h6 className='about-des'>Full Stack Web Developer</h6>
    </div>
    <div className='home-image'>
      <img className='about-img' src='https://wallpapercave.com/wp/wp8903914.jpg' alt='about-img'/>
    </div>
    </div>
    <div className='about-hyperlink'>
      <Link className="" to='/navbar/about' style={{textDecoration:"none",color:"gold"}}>
        <i style={{fontSize:"40px",marginLeft:"13px"}} class="fa-solid fa-circle-chevron-down about-hyper"></i>
        <p>Know more</p>
      </Link>
    </div>
  </div>
  )
}

export default Home