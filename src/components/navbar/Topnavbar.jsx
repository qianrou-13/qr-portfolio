import React, { useState } from "react";
import "./topnavbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'

const Topnavbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="navbar">
      <Container className="nav-container">
        <Navbar.Brand href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>QR Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}>Skill</Nav.Link>
            <Nav.Link href="#resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}>Resume</Nav.Link>
            <Nav.Link href="#testimonial" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}>Testimonial</Nav.Link>
            <Nav.Link href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnavbar;
