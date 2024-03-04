import React, { useState, useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
// import MenuItem from 'react-bootstrap/MenuItem';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './HomePage';
import AchievementsPage from './AchievementsPage';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

function FullNavBar() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  }
  const navigateToExperience = () => {
    navigate('/experience');
  }
  const navigateToProjects = () => {
    navigate('/projects');
  }
  const navigateToAchivements = () => {
    navigate('/achivements');
  }
  const navigateToContact = () => {
    navigate('/contact');
  }

  return (
    <div>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary" collapseOnSelect>
        <Container>
          <Navbar.Brand onClick={navigateHome}>Hrithik K</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav style={{paddingRight:"10px"}}>
              <NavItem><Nav.Link eventKey="1" style={{paddingRight:"40px"}} onClick={navigateHome}>Home</Nav.Link></NavItem>
              <NavItem><Nav.Link eventKey="2" style={{paddingRight:"40px"}} onClick={navigateToExperience}>Experience</Nav.Link></NavItem>
              <NavItem><Nav.Link eventKey="3" style={{paddingRight:"40px"}} onClick={navigateToProjects}>Projects</Nav.Link></NavItem>
              <NavItem><Nav.Link eventKey="4" style={{paddingRight:"40px"}} onClick={navigateToAchivements}>Achievements</Nav.Link></NavItem>
              <NavItem><Nav.Link eventKey="5" style={{paddingRight:"40px"}} onClick={navigateToContact}>Contact</Nav.Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/achivements" element={<Achivements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

function Home() {
  return <HomePage />;
}

function Experience() {
  return <ExperiencePage />;
}

function Projects() {
  return <ProjectsPage />;
}

function Contact() {
  return <ContactPage />;
}

function Achivements() {
  return <AchievementsPage />;
}

export default FullNavBar
