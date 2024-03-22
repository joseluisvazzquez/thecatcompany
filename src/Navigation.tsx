import React from "react";
import ico from "./img_page/ico.png"
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <Navbar bg="light" variant="light" className="shadow rounded mx-4 my-4 d-inline-flex">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><img src={ico} style={{ width: "50px", height: "50px" }} /></Navbar.Brand>
        <Nav className="hola">
          <Link to="/CatList" className='me-4 lead text-decoration-none link-danger'>Cats!</Link>
          <Link to="/Cuisine" className='me-4 lead text-decoration-none link-danger'>Looking for a cat?</Link>
        
        </Nav>
      </Container>
    </Navbar>

  );
}; export default Navigation; 