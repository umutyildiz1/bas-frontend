import React, { useState } from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import ButtonWithProgress from "../components/ButtonWithProgress";
import Input from '../components/Input'
import UserService from "../services/userService";

export default function SignUpPage(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({})
  const {userFName,userSurname,userPassword,userEmail,userPhoneNumber} = errors;//name error

  const {spinnerCall} = props;

  
  let onChange = (event) => {
    //inputlardan bilgileri statelere alan fonksiyon
    const { name, value } = event.target; //destructuring**
    const error = {...errors}
    switch (name) {
      case "name":
        setName(value);
        error.userFName = undefined
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
      userFName : name, //key ve valuelar aynı ise tek birini yazmamız yeterli
      userSurname : surname,
      userEmail : email,
      userPassword : password,
      userPhoneNumber : phoneNumber
    };

    try{
      
      let response = await userService.createUser(requestBody); 
      
    }catch(error){
      if(error.response.data.validationErrors){
        setErrors(error.response.data["validationErrors"])
      }
      
    }
   
  };

  
  return (
    <Container className="w-25" >
      
        <Col className="text-center">
          <Row className="text-center">
            <h1>Sign Up</h1>
          </Row>
          </Col>
            <Form>
              <Input name="name" error={userFName} label="Name" onChange={onChange} />
              <Input name="surname" error={userSurname} label="Surname" onChange={onChange} />
              <Input name="email" error={userEmail} label="Email" onChange={onChange} />
              <Input name="password" error={userPassword} label="Password" onChange={onChange} type="password" />
              <Input name="phoneNumber" error={userPhoneNumber} label="Phone Number" onChange={onChange} />
              
              <Form.Group className="text-center mt-3">
                <ButtonWithProgress onClick={onClickSignUp} disabled={spinnerCall} spinnerCall={spinnerCall} text="Sign Up"/>
              
              </Form.Group>
              
            </Form>
          
        
      </Container>
  );
}
