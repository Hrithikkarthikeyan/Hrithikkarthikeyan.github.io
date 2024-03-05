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
      icon: <svg height="32" viewBox="0 0 32 32" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m21.469 23.907-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052.708-.713.735-1.848.047-2.536l-3.473-3.511c-.901-.891-2.032-1.505-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558h-13.531c-.932 0-1.692.801-1.692 1.791 0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797 0-.989-.76-1.791-1.693-1.791z"/></svg>,
      name: <span style={{marginLeft: "1px"}}>Leetcode</span>,
      link: "https://leetcode.com/hrithikkarthik/",
      subName: "Hrithikkarthik"
    },
    {
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="23px" style={{marginLeft: "2px"}}><path d="M5.665 5.823c-.667 0-1.247.08-1.741.241-.495.161-.93.356-1.308.583l-.342-.566h-.666l-.075 4.132h.683a11.2 11.2 0 0 1 .433-1.341c.172-.445.394-.842.666-1.192a3.02 3.02 0 0 1 1-.833c.389-.21.855-.316 1.4-.316.594 0 1.124.122 1.59.366.467.24.873.597 1.217 1.075.339.461.6 1.036.783 1.724.184.69.275 1.458.275 2.308 0 .192-.006.38-.017.567H0v.608c.133.016.314.044.541.083.222.033.403.083.542.15a.748.748 0 0 1 .358.358c.067.15.1.328.1.534v.916c0 .666-.003 1.116-.008 1.35a22.14 22.14 0 0 1-.033.574 12.57 12.57 0 0 0 2.207.767 9.138 9.138 0 0 0 2.158.266c.755 0 1.483-.141 2.183-.425a5.46 5.46 0 0 0 1.832-1.208 5.815 5.815 0 0 0 1.258-1.924 6.09 6.09 0 0 0 .389-1.441h.946c.075.511.204.992.389 1.44.31.756.73 1.398 1.258 1.925a5.46 5.46 0 0 0 1.833 1.208c.7.284 1.427.425 2.182.425.705 0 1.425-.089 2.158-.266a12.57 12.57 0 0 0 2.208-.767c-.012-.15-.023-.341-.034-.575a66.751 66.751 0 0 1-.008-1.35v-.915c0-.206.033-.384.1-.534a.748.748 0 0 1 .358-.358c.14-.067.32-.117.542-.15.228-.039.408-.067.541-.083v-.608h-9.563a9.108 9.108 0 0 1-.017-.567c0-.85.092-1.619.275-2.308.183-.688.444-1.263.783-1.724.344-.478.75-.836 1.216-1.075.467-.244.997-.366 1.592-.366.544 0 1.01.105 1.399.316a3.02 3.02 0 0 1 1 .833c.272.35.494.747.666 1.192.172.439.317.886.433 1.341h.684l-.075-4.132h-.667l-.342.566a6.317 6.317 0 0 0-1.307-.583c-.495-.16-1.075-.241-1.742-.241a5.95 5.95 0 0 0-2.349.466 5.503 5.503 0 0 0-1.883 1.291 5.996 5.996 0 0 0-1.266 2.008 6.913 6.913 0 0 0-.442 2.5c0 .164.007.324.017.483h-.823c.01-.159.016-.32.016-.484 0-.9-.147-1.732-.441-2.499A5.996 5.996 0 0 0 9.897 7.58a5.503 5.503 0 0 0-1.882-1.29 5.953 5.953 0 0 0-2.35-.467zm-.483 7.356h4.32a7.714 7.714 0 0 1-.188.95 5.43 5.43 0 0 1-.792 1.716 3.76 3.76 0 0 1-1.291 1.166c-.517.283-1.103.425-1.758.425a3.77 3.77 0 0 1-1.333-.225c-.405-.15-.691-.308-.858-.475a5.749 5.749 0 0 1-.066-.875 36.8 36.8 0 0 1-.008-.75v-.65c0-.232.033-.438.1-.616a.648.648 0 0 1 .391-.4c.183-.083.433-.144.75-.183a9.87 9.87 0 0 1 .733-.083zm9.316 0h4.32c.178.01.422.039.733.083.317.039.567.1.75.183.2.084.33.217.392.4.066.178.1.384.1.617v.65c0 .205-.004.455-.009.75 0 .294-.022.585-.066.874-.167.167-.453.325-.858.475-.4.15-.845.225-1.333.225-.656 0-1.242-.142-1.758-.425a3.76 3.76 0 0 1-1.291-1.166 5.43 5.43 0 0 1-.792-1.717 7.712 7.712 0 0 1-.188-.95z"/></svg>,
      name: "Geeks For Geeks",
      link: "https://auth.geeksforgeeks.org/user/hrithikkarthikeyan/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
      subName: "hrithikkarthikeyan"
    },
    {
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="23px" style={{marginLeft: "2px"}}><path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799a.259.259 0 0 0-.258.258v3.875H9.963V6.908h.701a.255.255 0 0 0 .254-.258.257.257 0 0 0-.123-.221L9.223 4.92a.303.303 0 0 0-.226-.109.265.265 0 0 0-.207.107L7.11 6.43a.257.257 0 0 0-.12.218c0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492a.258.258 0 0 0 .259-.256v-4.004h4.073v4.152h-.699a.26.26 0 0 0-.137.477l1.579 1.51a.301.301 0 0 0 .225.109.264.264 0 0 0 .208-.109l1.679-1.51a.258.258 0 0 0-.135-.477h-.704l-.007-10.034a.257.257 0 0 0-.255-.26h-1.494v.002z"/></svg>,
      name: <span style={{marginLeft: "1px"}}>Hackerrank</span>,
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
    return <div style={{marginTop: "5px"}}>{contact.icon} <span style={{position: "absolute", marginTop: "1px", marginLeft: "8px"}}>{contact.name}: <a href={contact.link}>{contact.subName}</a></span> <br/> </div>
  })
  return (
    <div>
      <Title name="Contact" allProjects={allContacts}/>
    </div>
  )
}

export default ContactPage