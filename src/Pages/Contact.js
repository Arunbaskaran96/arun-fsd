import React from 'react'
import './Pages.css'

function Contact() {
  return (
    <div classname="container-fluid">
        <div className='row' style={{marginTop:"20px"}}>
            <div className='col-12 text-center'>
                <h3 className='project-heading'>Contact</h3>
            </div>
        </div>
        <div className='row contact-information' style={{marginTop:"50px"}}>
            <div className='col-6 text-center' style={{marginTop:"100px"}}>
                <p className='contact-p'>Let's Connect</p>
                <h2 className='contact-h2'>Digitally</h2>
            </div>
            <div className='col-6' style={{paddingLeft:"50px",marginTop:"50px"}}>
                <a className='contact-lists' href='mailto:arundhi04101996@gmail.com'><i class="fa-solid fa-envelope email"></i><span className='contact-type'>Email</span></a><br/>
                <a className='contact-lists' href='tel:+917539913570'><i class="fa-solid fa-mobile mobile"></i><span className='contact-type'>Mobile</span></a><br/>
                <a className='contact-lists' href='https://github.com/Arunbaskaran96' target="_blank"><i class="fa-brands fa-github github"></i><span className='contact-type'>Github</span></a><br/>
                <a className='contact-lists' href=''><i class="fa-brands fa-linkedin linkedin"></i><span className='contact-type'>LinkedIn</span></a><br/>
            </div>
        </div>
    </div>
  )
}

export default Contact