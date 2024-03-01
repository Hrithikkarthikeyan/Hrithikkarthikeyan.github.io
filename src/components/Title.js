import React from 'react'
import './homepage.css'

function Title({name, allProjects}) {
  return (
    <div>
    <div className='roboto-large title'>
      {name}
      <div>
        <hr
          style={{
            background: 'grey',
            color: 'grey',
            borderColor: 'grey',
            height: '3px',
            width: '100%'
          }}
        />
      </div>
    </div>
      <div className='content'>{allProjects}</div>
    </div>
  )
}

export default Title