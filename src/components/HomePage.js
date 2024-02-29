import React from 'react'
import photo from './Hrithik.jpg';
import './homepage.css';
import Skills from './Skills';

function HomePage() {
  return (
    <div style={{position:"absolute", top:"20%", left:"15%", right:"15%"}}>
      <div className='row' style={{ maxWidth:"1000px"}}>
        <div className='col-6'>
          <img src={photo} alt="Hrithik" width="100%" height="auto" style={{float: "right"}} />
        </div>
        <div className='col-6' style={{float: "left", textAlign:"left"}}>
          <div className="roboto-bold">
            Hi, I am Hrithik
          </div>
          <div className='roboto-medium'>
            Software Engineer
          </div><br/>
          <div className='roboto-regular'>
          Dedicated and motivated software engineer with strong problem-solving skills. Passionate about learning and developing user-friendly, performant, and quality software applications. Enthusiastic about leveraging machine learning technologies in innovative projects.
          </div>
          <br />
          {/* <Skills /> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage