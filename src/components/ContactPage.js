import React from 'react'
import Title from './Title'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

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
    }
  ]
  const allContacts = contacts.map((contact) => {
    return <div>{contact.icon} {contact.name} : <a href={contact.link}>{contact.subName}</a> <br/> </div>
  })
  return (
    <div>
      <Title name="Contact" allProjects={allContacts}/>
    </div>
  )
}

export default ContactPage