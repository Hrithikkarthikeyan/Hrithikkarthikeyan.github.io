import React from 'react'
import Title from './Title'
import Project from './Project'

function ProjectsPage() {
  const projects = [
    {
      name: "Connected - Social networking website",
      description: "A web application that helps users connect and also upload multiple images, like, comment, and share the posts.",
      technologies: "Ruby on Rails, JavaScript, Bootstrap, MySql"
    },
    {
      name: "Navigation system for Visually Impaired using VSLAM",
      description: "System for aiding the movement of visually impaired people, by locating and identifying objects in indoor-physical environments and providing instructions for navigating to it.",
      technologies: "Machine Learning, Image Processing, Python"
    },
    {
      name: "Educational content using VR",
      description: "A virtual reality app to provide an immersive educational experience for children with realistic 3-D projections of various objects included in different static and dynamic applications.",
      technologies: "Unity 3D, C#"
    },
    {
      name: "Farmer’s guide",
      description: "An application to predict the production of a crop for a particular land using a machine learning model with random forest regressor and suggest the best crop for that land so that the farmers are profited. The model has an accuracy of 90%. The application also includes an interface to connect the farmers directly to the customers in order to sell their crops.",
      technologies: "Python, ReactJS, Flask"
    },
    {
      name: "Safe Shop-COVID 19 Project",
      description: "A website where customers, shopkeepers, and volunteers can connect during the pandemic for easy and safe shopping of groceries and medicines.",
      technologies: "Node.js, MongoDB, HTML, CSS, Express.js, Mongoose"
    },
    {
      name: "Sports development",
      description: "A website to connect sports enthusiasts and also different sports/games organisers.",
      technologies: "HTML, PHP, CSS, Bootstrap, MySql"
    },
    {
      name: "Hostel complaints",
      description: "An online website to record different kind of complaints from hostellers and sort them into different departments which can solve the problem. The application sorts the problems based upon their importance and their requirement to solve them immediately.",
      technologies: "HTML, CSS, Bootstrap, MySql"
    },
    {
      name: "Smart Tracker",
      description: "A vehicle/object tracking system that alerts the proprietary when in danger using a tilt sensor, GPS tracking sensor, and Arduino.",
      technologies: "Arduino, Sensors, Global Positioning System (GPS), Amazon Web Services (AWS), Internet of Things (IoT)"
    },
    {
      name: "Point to Point Protocol Implementation (RFC 1661)",
      description: "Simulation of Point to Point Protocol to understand the transition of data packets passing through the layers of a network.",
      technologies: "C++, Web Sockets, Computer Networks"
    },
    {
      name: "Automatic hand sanitizer",
      description: "An embedded systems project that detects the presence of hand using IR sensors and Heart beat sensors and arduino that dispenses hand sanitizer only when it detects a hand, and no other object can trigger the sensors.",
      technologies: "Arduino, Sensors"
    },
    {
      name: "Asteroids",
      description: "A python game using pygame library, for a retro and old school game by controlling the ships and destroying the astroids.",
      technologies: "Python"
    },
    {
      name: "Cats or Dogs",
      description: "A machine learning model using convolutional neural networks to differentiate cats from dogs.",
      technologies: "Python"
    },
    {
      name: "Face recognition",
      description: "A facial recognition app using python opencv library, which can detect anyone and can mark all the faces that are detected from a camera or an image to a csv file.",
      technologies: "Python OpenCv, Image Processing"
    }
  ]
  let allProjects = projects.map((project, index) => {
    return <div><Project id={index} name={project.name} description={project.description} technologies={project.technologies} /> <br/></div>
  })
  
  return (
    <div>
      <Title name="Projects" allProjects={allProjects} />
      
    </div>
  )
}

export default ProjectsPage