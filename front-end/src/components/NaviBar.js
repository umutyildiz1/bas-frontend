import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function Navibar() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark" className="shadow-lg" >
        <Container>
            <Navbar.Brand ><Link to="/">Bid A Second</Link></Navbar.Brand>
            <Nav className="ms-auto">
                <Nav.Item className="me-2"><Link to="/login">sign in</Link></Nav.Item>
                <Nav.Item><Link to="/signup">sign up</Link></Nav.Item>
                
            </Nav>
            
            
            
        </Container>
      </Navbar>
    </div>
  );
}
