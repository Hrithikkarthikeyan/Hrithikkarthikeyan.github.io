import React from 'react'
// import Button from '@mui/material/Button';
import './homepage.css'

function Skills() {
  const skills = [
    "Ruby on Rails",
    "C++",
    "JavaScript",
    "jQuery",
    "Java",
    "HTML",
    "Python",
    "CSS",
    "Bootstrap",
    "MySql",
    "Oracle",
    "MongoDB",
    "ReactJs",
    "NodeJs",
    "VR",
    "Elasticsearch",
    "Git",
    "Docker",
    "Airbrake",
    "Mailgun",
    "Redis",
    "Chrome Extensions",
    "JSP",
    "Servlets",
    "Cucumbers",
    "Problem Solving",
    "Algorithms",
    "System Design",
    "Google Analytics",
    "Data analytics",
    "Mixpanel",
    "Agile",
    "Machine Learning"
  ]

  const allSkills = skills.map((skill, index) => {
    return <span className='skill-box mr-2 mb-2 rounded-sm px-2 py-1 text-xxs font-small text-white' style={{"background": "rgb(0, 128, 255)"}}>{skill}</span>
    // return <Button variant="contained" key={index} color={colors[index%4]} sx={{ fontSize: 10 }} style={{marginRight: "10px", marginTop: "10px"}} disableElevation>
    //       {skill}
    //       </Button>
  }) 
  return (
    <div>
      <div className='roboto-medium' style={{marginTop: "20px"}}>
        Skills
      </div>
      {/* <Button variant="contained" color="success" sx={{ fontSize: 10 }} style={{marginRight: "10px", marginTop: "10px"}} disabled disableElevation>
      </Button> */}
      <div style={{marginTop: "5px", fontSize: "80%"}}>
        {allSkills}
      </div>
      {/* <span className="mr-2 mb-2 rounded-sm px-2 py-1 text-xs font-small text-white" style={{"background": "Green"}}>Go</span> */}
    </div>
  )
}

export default Skills