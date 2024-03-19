import React from "react";
import ico from "./img_page/ico.png"
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <Navbar bg="light" variant="light" className="shadow rounded mx-4 my-4">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><img src={ico} style={{ width: "50px", height: "50px" }} /></Navbar.Brand>
        <Nav className="justify-content-center">
          <Link to="/Hotspots" className='me-3 lead text-decoration-none link-danger'>Hotspots</Link>
          <Link to="/Cuisine" className='me-3 lead text-decoration-none link-danger'>Cuisine</Link>
          <Link to="/Lodging" className= 'me-3 lead text-decoration-none link-danger'>Lodging</Link>
          <Link to="/Activities" className='me-3 lead text-decoration-none link-danger'>Activities</Link>
        </Nav>
      </Container>
    </Navbar>

  );
}; export default Navigation; 