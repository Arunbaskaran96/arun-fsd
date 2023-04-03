import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

function Topbar() {
    const [ismobile,setMobile]=useState(false)
  return (
    <nav className='topbar-container'>
        <ul className='topbar-bio'>
            <h5 className='logo-container'>
            <i class="fa-sharp fa-solid fa-font your-logo"></i>
            </h5>
            <h4 className='bio'>Arun Mern Stack Developer</h4>
        </ul>
        <ul  onClick={()=>{
            setMobile(false)
        }}  className={ismobile?"nav-links-mobile":"nav-links"}>
            <Link to='/navbar/about' className='about'>
                <li>About</li>
            </Link>
            <Link to='/navbar/skills' className='skills'>
                <li>Skills</li>
            </Link>
            <Link to='/navbar/projects' className='projects'>
                <li>Projects</li>
            </Link>
            <Link to='/navbar/experience' className='experiences'>
                <li>Experiences</li>
            </Link>
            <Link to='/navbar/contact' className='experiences'>
                <li>Contact</li>
            </Link>
        </ul>
        <button onClick={()=>{
            setMobile(!ismobile)
        }} className='mobile-menu-icon'>
            {
                ismobile ?(<i className='fas fa-times'></i>
                ):(
                    <i className='fas fa-bars'></i>
                )
            }
        </button>
    </nav>
  )
}

export default Topbar