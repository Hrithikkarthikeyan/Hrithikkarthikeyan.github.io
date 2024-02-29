import React from 'react'
import './homepage.css';

function Project({id, name, description, technologies}) {
  return (
    <div key={id} className='project-box'>
      <div className='project-name'>
        {name}
      </div>
      <div>
        {description}
      </div>
      <div className=''>
        <b>Technologies used:</b> {technologies}
      </div>
    </div>
  )
}

export default Project