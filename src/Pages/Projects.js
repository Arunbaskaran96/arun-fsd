import React from 'react'
import './Pages.css'

import  shopify from '../ProjectImages/shopify.png'
import vehicleService from '../ProjectImages/Project2.png'

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
      frontendsource:"https://github.com/Arunbaskaran96/shopping-app-frontend",
      backendsource:"https://github.com/Arunbaskaran96/shopping-app-backend",
      frontenddeploy:"https://fascinating-dragon-43b7cd.netlify.app/",
      backenddeploy:"https://shopify-backend-x9ad.onrender.com/"
    },
    {
      img:shopify,
      heading:"Shopify",
      des:"Shopify is a real-time shopping web application where users can buy products from their homes. This application provides a very intuitive user experience and tries to make the shopping process as easy as possible.",
 
    },
    {
      img:shopify,
      heading:"Shopify",
      des:"Shopify is a real-time shopping web application where users can buy products from their homes. This application provides a very intuitive user experience and tries to make the shopping process as easy as possible.",

    },
  ]

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 project-container'>
          <h3 className='project-heading'>Projects</h3>
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