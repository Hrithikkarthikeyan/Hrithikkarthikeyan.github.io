import React, { useState } from 'react'
import './homepage.css';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';

function Project({id, name, description, technologies, link}) {
  const [showMore, setShowMore] = useState(false);

  const allTechnologies = technologies.split(', ').map((technology, index) => {
    return <span className='skill-box mr-2 mb-2 rounded-sm px-2 py-1 text-xxs font-small text-white' style={{"background": "rgb(51, 103, 145)"}}>{technology}</span>
  }) 
  let button;
  if(link){
    button = <Button variant="outlined" size="small" href={link} style={{border: '1px solid', borderRadius: "30px", fontSize: "12px", color: "grey"}}>Show project<LaunchIcon style={{marginLeft: "4px", fontSize: "15px"}} /></Button> 
  }
  return (
    <div key={id} className='project-box'>
      <div className='project-name' style={{position: "relative"}}>
        {name}   {button}
      </div>
      <div style={{marginTop: "10px"}}>
        {showMore ? description.split('\n').map((des) => {return <div> {des} </div> }) : description.substring(0, 200)}
        {
          (description.length > 200 && !showMore) ? 
          <Button onClick={() => setShowMore(!showMore)} style={{fontSize: "12px", color: "grey", float: "right"}} disableElevation>
            ...see more
          </Button> : null
        }
        {/* {description} */}
      </div>
      <div style={{marginTop: "10px"}}>
        <b>Technologies used:</b> {allTechnologies}
        
      </div>
    </div>
  )
}

export default Project