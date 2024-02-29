import React from 'react'
import Button from '@mui/material/Button';

function Skills() {
  return (
    <div>
      <div className='roboto-medium'>
        Skills
      </div>
      <Button variant="contained" color="success" sx={{ fontSize: 10 }} style={{marginRight: "10px", marginTop: "10px"}} disabled disableElevation>
        Ruby on Rails
      </Button><Button variant="contained" color="success" sx={{ fontSize: 10 }} style={{marginRight: "10px", marginTop: "10px"}} disableElevation>
        Ruby on Rails
      </Button>
      {/* <span className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-small text-white" style={{"background": "Green"}}>Go</span> */}
    </div>
  )
}

export default Skills