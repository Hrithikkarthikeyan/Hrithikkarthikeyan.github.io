import React from 'react'
import resume from './Hrithik-resume-mar-2.pdf'
import Button from '@mui/material/Button';

function Resume() {
  return (
    <div>
      <Button variant="primary" size="medium" href={resume} target='_blank' rel='norefferer' style={{marginTop: "15px", border: '1px solid', fontSize: "13px", color: 'light'}}>Resume</Button>
    </div>
  )
}

export default Resume