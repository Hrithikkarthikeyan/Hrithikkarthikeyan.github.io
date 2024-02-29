import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function FullNavBar({setCurrentPage}) {
  const [navClick, setNavClick] = useState();

  useEffect(() => {
    setCurrentPage(navClick);
  }, [navClick]);
  return (
    <div>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => setNavClick('home')}>Hrithik K</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav style={{paddingRight:"10px"}}>
              <Nav.Link  style={{paddingRight:"40px"}} onClick={() => setNavClick('home')}>Home</Nav.Link>
              <Nav.Link  style={{paddingRight:"40px"}} onClick={() => setNavClick('experience')}>Experience</Nav.Link>
              <Nav.Link  style={{paddingRight:"40px"}} onClick={() => setNavClick('projects')}>Projects</Nav.Link>
              <Nav.Link  style={{paddingRight:"40px"}} onClick={() => setNavClick('achievements')}>Achievements</Nav.Link>
              <Nav.Link  style={{paddingRight:"40px"}} onClick={() => setNavClick('contacts')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default FullNavBar
