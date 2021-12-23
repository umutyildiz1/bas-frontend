import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function Navibar() {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState("umut")
  let linksNav = (<div className="d-flex"><Nav.Item className="me-2"><Link to="/login">sign in</Link></Nav.Item>
  <Nav.Item><Link to="/signup">sign up</Link></Nav.Item></div>)
  if(isLogin){
    linksNav = (
      <Container className="d-flex">
      <Nav.Item className="me-2"><Link to={`/users/${username}`}>{username}</Link></Nav.Item>
      <Nav.Item><Link>Logout</Link></Nav.Item></Container>)
    
  }
  return (
    
    <div>
      <Navbar expand="lg" variant="dark" bg="dark" className="shadow-lg" >
        <Container>
            <Navbar.Brand ><Link to="/">Bid A Second</Link></Navbar.Brand>
            <Nav className="ms-auto">
                {linksNav}
            </Nav>
            
            
            
        </Container>
      </Navbar>
    </div>
  );
}
