import React from 'react'
import Title from './Title'
import Project from './Project'

function ProjectsPage() {
  const projects = [
    {
      name: "Todo app",
      description: "Users can sign-up / login using a valid email and password to the application. \nUsers can add new todos. \nUsers can delete or update any of their todos. \nUsers can mark a todo as completed. \nUsers can create lists and add any number of todos to the list. \nUsers can create groups and add any number of Lists to the group. \nUsers can delete any of their groups and lists. \nUsers can search their tasks using the search bar. \nUsers can filter their todos(all, completed, yet to complete). \nDefault todos will be added to the Reminders list.",
      technologies: "ReactJs, HTML, CSS, Bootstrap, Python Flask, flask_mysqldb, MySQL, JWT authentication, REST API",
      link: "https://react-todo-app-one-eta.vercel.app/"
    },
    {
      name: "Admin Dashboard",
      description: "This is a responsive website created using Next.js, Tailwind CSS, ProstgreSQL, Prisma. \nAdmins can view the reports dashboard after sign-in / sign-up. \nAdmins can view all the other admins and delete other admins. \nAdmins can also update their details",
      technologies: "Next.js, Tailwind CSS, Prisma, PostgreSQL",
      link: "https://next-js-dashboard-pink-six.vercel.app/"
    },
    {
      name: "Connected - Social networking website",
      description: "A web application that helps users connect and also upload multiple images, like, comment, and share the posts. \nUsers can upload multiple images in a post. likes and comments in a post will not reload the page. \nUsers can search for other users and send connection requests to them. They can also undo the request. \nUsers can look into their connection requests list and accept the request. \nUsers also get suggestions for connecting with other users. Most relevant users will be the top suggestion (i.e, friends of friends) \nUsers can edit their profiles. also, add a profile picture if required. \nUsers can also delete their posts or even their accounts. \nUsers can also see who viewed them in the past week. Views older than 7 days are deleted using a cronjob which runs each day to execute a rake that deletes the older views. \nUsers can log out from the connected app.",
      technologies: "Ruby on Rails, JavaScript, Bootstrap, MySql",
      link: "https://github.com/Hrithikkarthikeyan/Connected"
    },
    {
      name: "Navigation system for Visually Impaired using VSLAM",
      description: "System for aiding the movement of visually impaired people, by locating and identifying objects in indoor-physical environments and providing instructions for navigating to it.",
      technologies: "Machine Learning, Image Processing, Python"
    },
    {
      name: "Educational content using VR",
      description: "A virtual reality app to provide an immersive educational experience for children with realistic 3-D projections of various objects included in different static and dynamic applications.",
      technologies: "Unity 3D, C#",
      link: "https://github.com/Hrithikkarthikeyan/Educational-content-using-VR"
    },
    {
      name: "Farmer’s guide",
      description: "An application to predict the production of a crop for a particular land using a machine learning model with random forest regressor and suggest the best crop for that land so that the farmers are profited. The model has an accuracy of 90%. \nThe application also includes an interface to connect the farmers directly to the customers in order to sell their crops.",
      technologies: "Python, ReactJS, Flask",
      link: "https://github.com/Hrithikkarthikeyan/Farmers-guide"
    },
    {
      name: "Safe Shop-COVID 19 Project",
      description: "A website where customers, shopkeepers, and volunteers can connect during the pandemic for easy and safe shopping of groceries and medicines.",
      technologies: "Node.js, MongoDB, HTML, CSS, Express.js, Mongoose"
    },
    {
      name: "Sports development",
      description: "A website to connect sports enthusiasts and also different sports/games organisers.",
      technologies: "HTML, PHP, CSS, Bootstrap, MySql",
      link: "https://github.com/Hrithikkarthikeyan/sportsdevelopment"
    },
    {
      name: "Hostel complaints",
      description: "An online website to record different kind of complaints from hostellers and sort them into different departments which can solve the problem. \nThe application sorts the problems based upon their importance and their requirement to solve them immediately.",
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
      technologies: "Python",
      link: "https://github.com/Hrithikkarthikeyan/Asteroids"
    },
    {
      name: "Cats or Dogs",
      description: "A machine learning model using convolutional neural networks to differentiate cats from dogs.",
      technologies: "Python",
      link: "https://github.com/Hrithikkarthikeyan/Cats-or-Dogs"
    },
    {
      name: "Face recognition",
      description: "A facial recognition app using python opencv library, which can detect anyone and can mark all the faces that are detected from a camera or an image to a csv file.",
      technologies: "Python OpenCv, Image Processing",
      link: "https://github.com/Hrithikkarthikeyan/Face-recognition"
    }
  ]
  let allProjects = projects.map((project, index) => {
    return <div><Project id={index} name={project.name} description={project.description} technologies={project.technologies} link={project.link} /> <br/></div>
  })
  
  return (
    <div>
      <Title name="Projects" allProjects={allProjects} />
      
    </div>
  )
}

export default ProjectsPage