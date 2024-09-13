import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Brand with React Router Link */}
        <Navbar.Brand as={Link} to="/">Cyber Secure Mindset</Navbar.Brand>
        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Collapsible Navbar Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left-aligned navigation links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/framework">Framework</Nav.Link>
            <Nav.Link as={Link} to="/scams">Scams Awareness</Nav.Link>
            <Nav.Link href="https://cybersecuremindset.com/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
