import React, { useState, useEffect } from 'react'
import photo from './Hrithik.jpg';
import './homepage.css';
import Skills from './Skills';
import Resume from './Resume'


function HomePage() {
  const Typewriter = ({ text, delay}) => {
    // await waitForMs(1000);
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if(currentIndex < text.length){
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex])
          setCurrentIndex(prevIndex => prevIndex + 1)
        }, delay);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, text])

    return <span>{currentText}</span>
  }

  

  return (
    <div className='home-page-container'   style={{position:"absolute"}}>
      <div className='flex-container' style={{ maxWidth:"1000px"}}>
        <div className='flex-item-left' style={{}}>
          <img src={photo} alt="Hrithik" width="100%" height="auto" style={{float: "right"}} />
        </div>
        <div className='flex-item-right' style={{float: "left", textAlign:"left"}}>
          <div id="homepage_name" className="roboto-large">
            <Typewriter text="Hi, I'm Hrithik" delay={150} /> <span class="input-cursor"></span>
          </div>
          <div className='roboto-medium'>
            Software Engineer
          </div><br/>
          <div className='roboto-regular'>
          Dedicated and motivated software engineer with strong problem-solving skills. Passionate about learning and developing user-friendly, performant, and quality software applications. Enthusiastic about leveraging machine learning technologies in innovative projects.
          </div>
          <br />
          <Resume />
          <br />
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default HomePage