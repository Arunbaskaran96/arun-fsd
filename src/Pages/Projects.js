import React from 'react'
import './Pages.css'

import  shopify from '../ProjectImages/shopify.png'
import vehicleService from '../ProjectImages/Project2.png'
import hotelbooking from '../ProjectImages/Hotel-web-app.png'
import chatbox from '../ProjectImages/Chat-box.png'

function Projects() {

  const images=[
    {
      img:shopify,
      heading:"Shopify",
      des:"Shopify is a real-time shopping web application where users can buy products from their homes. This application provides a very intuitive user experience and tries to make the shopping process as easy as possible.",
      tool1:"React",
      tool2:"MongoDB",
      tool3:"Node js",
      tool4:"Redux",
      frontendsource:"https://github.com/Arunbaskaran96/shopping-app-frontend",
      backendsource:"https://github.com/Arunbaskaran96/shopping-app-backend",
      frontenddeploy:"https://fascinating-dragon-43b7cd.netlify.app/",
      backenddeploy:"https://shopify-backend-x9ad.onrender.com/"
    },
    {
      img:vehicleService,
      heading:"Motorcycle Service Booking",
      des:"It is a vehicle service web application where users can book for vehicle service from their homes.Used and deployed all CRUD operations in this website in a very standard way using MERN stack.",
      tool1:"React",
      tool2:"MongoDB",
      tool3:"Node js",
      tool4:"Express js",
      frontendsource:"https://github.com/Arunbaskaran96/motorcycle-service-booking-frontend",
      backendsource:"https://github.com/Arunbaskaran96/motorcycle-service-booking-backend",
      frontenddeploy:"https://soft-lokum-1da8b3.netlify.app/",
      backenddeploy:"https://motorcycle-service-app.onrender.com/"
    },
    {
      img:chatbox,
      heading:"Chat Box",
      des:"It is a chat box web application,Where user can make friends and chat with them.Used and deployed all CRUD operations in this website in a very standard way using MERN stack.",
      tool1:"React",
      tool2:"MongoDB",
      tool3:"Node js",
      tool4:"Express js",
      frontendsource:"https://github.com/Arunbaskaran96/chatbox",
      backendsource:"https://github.com/Arunbaskaran96/forgot-password-node",
      frontenddeploy:"https://lucky-brigadeiros-305061.netlify.app/",
      backenddeploy:"https://forgotpassword-g94p.onrender.com/"
    },
    {
      img:hotelbooking,
      heading:"OYO Rooms",
      des:"This is a Hotel booking web application. Where you can book a hotel. If the Book button is disabled that is booked by someone else. And I have used all the CRUD operation in this website. After Booking you can check your booking details in history section. ",
      tool1:"React",
      tool2:"MongoDB",
      tool3:"Node js",
      tool4:"Express js",
      frontendsource:"https://github.com/Arunbaskaran96/project-4",
      backendsource:"https://github.com/Arunbaskaran96/Project4-backend",
      frontenddeploy:"https://sensational-pudding-39ed14.netlify.app/",
      backenddeploy:"https://project4-backend-e5g5.onrender.com/"
    },

  ]

  return (
    <div className='container-fluid projects-main-container'>
      <div className='row'>
        <div className='col-md-12 project-container'>
          <h3 className='project-heading'>Projects</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-center'>
          <div className='credential-container'>
            <h5>User Credential</h5>
            <p style={{marginBottom:"5px"}}><strong>Email :</strong>arundhilla@gmail.com</p>
            <p style={{marginLeft:"-90px"}}><strong>password :</strong>Arun</p>
          </div>
        </div>
        <div className='col-6 text-center'>
          <div  className='credential-container'>
            <h5>Admin Credential</h5>
            <p style={{marginBottom:"5px"}}><strong>Email :</strong>admin@gmail.com</p>
            <p style={{marginLeft:"-60px"}}><strong>password :</strong>Admin</p>
          </div>
        </div>
      </div>
      <div className='row'>
        {
          images.map((item)=>{
            return(
              <div className='col-md-5 projects-container'>
                <img  className='project-image' src={item.img} alt="website-images"/>
                <h4 className='text-center'>{item.heading}</h4>
                <p>{item.des}</p>
                <span className='projeect-tool text-center span1'>{item.tool1}</span>
                <span className='projeect-tool text-center'>{item.tool2}</span>
                <span className='projeect-tool text-center'>{item.tool3}</span>
                <span className='projeect-tool text-center'>{item.tool4}</span>
                <div className='row' style={{marginTop:"10px"}}>
                  <div className='col-md-6'>
                    <h6>Front End Source Code :
                    <a href={item.frontendsource} target="_blank" style={{color:"black",fontSize:"30px"}}>
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </h6>
                  </div>
                  <div className='col-md-6'>
                    <h6>Back End Source Code :
                    <a href={item.backendsource} target="_blank" style={{color:"black",fontSize:"30px"}}>
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </h6>
                  </div>
                  <div className='row' style={{marginTop:"10px"}}>
                    <div className='col-md-12' style={{textAlign:"center"}}>
                      <h6>Live :
                        <a href={item.frontenddeploy} style={{color:"black",fontSize:"30px"}} target="_blank">
                          <i class="fa-solid fa-laptop"></i>
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects