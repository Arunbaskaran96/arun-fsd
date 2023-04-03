import React from 'react'
import "./Pages.css"

function Experience() {
  return (
    <div className='container-fuild experience-main-container'>
      <div className='row'>
        <div className='col-12'>
          <h4 className='project-heading text-center'>Experiences</h4>
        </div>
      </div>
      <div className='row' style={{marginTop:"30px"}}>
        <div className='col-4 text-center exp-card'>
          <h6><strong>Designation</strong> : Help Desk Engineer</h6>
          <p className='expp'><strong>Company</strong> : Crown Solutions India Private Limited</p>
          <p className='expp'><strong>Location</strong> : Chennai, India</p>
          <p className='expp'><strong>Duration</strong> : From september-2021 to Present</p>
        </div>
        <div className='col-4 text-center exp-card'>
          <h6><strong>Designation</strong> : CNC Operator</h6>
          <p className='expp'><strong>Company</strong> : Steel Strips Wheels Private Limited</p>
          <p className='expp'><strong>Location</strong> : Chennai, India</p>
          <p className='expp'><strong>Duration</strong>  : 8 Months</p>
        </div>
      </div>
    </div>
  )
}

export default Experience