import React from 'react'
import Title from './Title'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactPage() {
  const contacts = [
    {
      icon: <MailOutlineIcon />,
      name: "Email",
      link: "mailto:hrithikkarthik88@gmail.com",
      subName: "hrithikkarthik88@gmail.com"
    },
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hrithik-karthikeyan/",
      subName: "Hrithik K"
    },
    {
      icon: <GitHubIcon />,
      name: "Github",
      link: "https://github.com/Hrithikkarthikeyan",
      subName: "Hrithikkarthikeyan"
    },
    {
      icon: <CodeIcon />,
      name: "Leetcode",
      link: "https://leetcode.com/hrithikkarthik/",
      subName: "Hrithikkarthik"
    },
    {
      icon: <CodeIcon />,
      name: "Geeks For Geeks",
      link: "https://auth.geeksforgeeks.org/user/hrithikkarthikeyan/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
      subName: "hrithikkarthikeyan"
    },
    {
      icon: <CodeIcon />,
      name: "Hackerrank",
      link: "https://www.hackerrank.com/profile/hrithikkarthik",
      subName: "Hrithik Karthikeyan"
    },
    {
      icon: <LocationOnIcon />,
      name: "Address",
      subName: "Hyderabad, Telangana, India"
    }
  ]
  const allContacts = contacts.map((contact) => {
    return <div style={{marginTop: "5px"}}>{contact.icon} <span style={{position: "absolute", marginTop: "1px", marginLeft: "3px"}}>{contact.name}: <a href={contact.link}>{contact.subName}</a></span> <br/> </div>
  })
  return (
    <div>
      <Title name="Contact" allProjects={allContacts}/>
    </div>
  )
}

export default ContactPage