import React from 'react'
import'./Pages.css'
import resume from '../Resume/ArunFSD.pdf'

function About() {
  return (
    <div className='container-fliud about-maincontainer'>
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-10' style={{marginTop:"70px",textAlign:"center",padding:"0px 10px"}}>
          <h3 className='about-heading' style={{fontSize:"70px"}}>About</h3>
          <p className='about-para' style={{fontSize:"20px"}}>I am a full stack developer with a passion for building beautiful and user friendly web-sites.I have a strong understanding for both front-end and back-end development, and i am excited to put my skills to use in professional settings. I am a quick leaner and a team player,and i am confident that i can be valuable assest to any development team.</p>
          <div className='about-contact'>
            <a href='mailto:arundhi04101996@gmail.com'>
              <i class="fa-regular fa-envelope about-contact-img"></i>
            </a>
            <a href='tel:753-991-3570'>
              <i class="fa-solid fa-phone about-contact-img"></i>
            </a>
            <a href='https://github.com/Arunbaskaran96' target="_blank">
              <i class="fa-brands fa-github about-contact-img"></i>
            </a>
          </div>
          <a href="https://drive.google.com/file/d/12JhD5ZDqTzAnEkg2fU7P6EesIRsvDiBC/view?usp=share_link" target="_blank"  className='resume' style={{marginTop:"20px"}}>Resume</a>
        </div>
        <div className='col-1'></div>
      </div>
    </div>
  )
}

export default About