import React from 'react'
import './homepage.css';

function Experience({key, role, companyName, timeRange, description}) {
  return (
    <div key={key} className='project-box'>
      <div className='project-name'>
        {role}
      </div>
      <div>
        {companyName} | {timeRange}
      </div>
      <div>
        {description.split('\n').map((des) => {
          return <div>- {des}</div>;
        })}
      </div>
    </div>
  )
}

export default Experience