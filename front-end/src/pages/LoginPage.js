import React , {useState} from "react";
import { Spinner, Form, Button, Container, Col, Row } from "react-bootstrap";
import Input from "../components/Input";
import UserService from "../services/userService";
export default function LoginPage() {
    const userService = new UserService();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChange = (event) =>{
        const {name, value} = event.target
        if(name == "email"){
            setEmail(value)
        }else if(name =="password"){
            setPassword(value)
        }
    }

    const onClickLogIn = (event) => {
        event.preventDefault()
        const token = {
            username : email,
            password
        }
        userService.logIn(token)
    }

  return (
    <Container className="w-25">
      <Col className="text-center ">
        <Row className="text-center mt-3">
          <h1>Sign In</h1>
        </Row>
      </Col>
      <Form>
        <Input label="Email" onChange={onChange} name="email" />
        <Input label="Password" onChange={onChange} name="password" type="password" />
        <Form.Group className="text-center mt-3">
          <Button
            onClick={onClickLogIn}
            type="submit"
          >
            Sign Up
          </Button>
        </Form.Group> 
      </Form>
    </Container>
  );
}
