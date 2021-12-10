import React, { useState } from "react";
import { Container, Form, Col, Row, Spinner, Button } from "react-bootstrap";
import Input from '../components/Input'
import UserService from "../services/userService";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pendingApiCall, setPendingApiCall] = useState(false);
  const [errors, setErrors] = useState({})
  const {userName,userSurname,userPassword,userEmail,userPhoneNumber} = errors;//name error
  
  let onChange = (event) => {
    //inputlardan bilgileri statelere alan fonksiyon
    const { name, value } = event.target; //destructuring**
    const error = {...errors}
    switch (name) {
      case "name":
        setName(value);
        error.userName = undefined
        setErrors(error)
        break;
      case "surname":
        setSurname(value);
        error.userSurname = undefined
        setErrors(error)
        break;
      case "email":
        setEmail(value);
        error.userEmail = undefined
        setErrors(error)
        break;
      case "password":
        setPassword(value);
        error.userPassword = undefined
        setErrors(error)
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        error.userPhoneNumber = undefined
        setErrors(error)
        break;
    }
  };
  let onClickSignUp = async (event) => {
    event.preventDefault();
    let userService = new UserService();
    let requestBody = {
      name, //key ve valuelar aynı ise tek birini yazmamız yeterli
      surname,
      email,
      password,
      phoneNumber
    };

    setPendingApiCall(true)

    try{
      
      let response = await userService.createUser(requestBody); 
      
    }catch(error){
      if(error.response.data.validationErrors){
        setErrors(error.response.data["validationErrors"])
      }
      
    }
    setPendingApiCall(false)
   
  };

  
  return (
    <Container className="w-25" >
      
        <Col className="text-center">
          <Row className="text-center">
            <h1>Sign Up</h1>
          </Row>
          </Col>
            <Form>
              <Input name="name" error={userName} label="Name" onChange={onChange} />
              <Input name="surname" error={userSurname} label="Surname" onChange={onChange} />
              <Input name="email" error={userEmail} label="Email" onChange={onChange} />
              <Input name="password" error={userPassword} label="Password" onChange={onChange} />
              <Input name="phoneNumber" error={userPhoneNumber} label="Phone Number" onChange={onChange} />
              
              <Form.Group className="text-center mt-3">
              <Button
                onClick={onClickSignUp}
                disabled={pendingApiCall}
                type="submit"
              >
                {pendingApiCall?<Spinner animation="border" size="sm"/>:''}
                
                Sign Up
              </Button>
              </Form.Group>
              
            </Form>
          
        
      </Container>
  );
}
