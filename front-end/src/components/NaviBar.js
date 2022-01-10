import React, { useState ,useEffect} from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {authActionLogout} from "../redux/authActionCreator";
import { FaPlusCircle } from "react-icons/fa";

 function Navibar(props) {
  const [login, setLogin] = useState()
  const [name, setName] = useState()
  const [surname,setSurname] = useState()
  const {isLogin, username, logoutSuccess,userSurname,userId} = props

  
  useEffect(() => {
    setLogin(isLogin)
    setName(username)
    setSurname(userSurname)
  }, [props])

  
  let linksNav = (<div className="d-flex"><Nav.Item className="me-2"><Link to="/login">sign in</Link></Nav.Item>
  <Nav.Item><Link to="/signup">sign up</Link></Nav.Item></div>)
  if(isLogin){
    linksNav = (
      <Container className="d-flex">
        <Nav.Item className="me-2"><Link to = "/createAuction"><FaPlusCircle size={25}/></Link></Nav.Item>
      <Nav.Item className="me-2"><Link to={`/users/${userId}`}>{username+" "+userSurname}</Link></Nav.Item>
      <Nav.Item><Link to="/" onClick={logoutSuccess}>Logout</Link></Nav.Item>
      
      </Container>)
    
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
const putStatesToProps =(storeStates) =>{
  return {
    isLogin : storeStates.isLogin,
    username : storeStates.username,
    userSurname : storeStates.userSurname,
    userId : storeStates.userId
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    logoutSuccess : ()=>{
      return dispatch(authActionLogout())}
  }
}

export default connect(putStatesToProps, putDispatchToProps)(Navibar);
