import React , {useState, useEffect} from "react";
import { Spinner, Form, Button, Container, Col, Row, Alert } from "react-bootstrap";
import Input from "../components/Input";
import UserService from "../services/userService";
import axios from "axios";
import ButtonWithProgress from "../components/ButtonWithProgress";

export default function LoginPage() {
    const userService = new UserService();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errors,setErrors] = useState(null)
    const [pendingApiCall, setPendingApiCall] = useState(false)

    const buttonEnabled = email && password;

    useEffect(() => {//componentDidMount
      axios.interceptors.request.use((request) => {
        setPendingApiCall(true)
        return request;
      })

      axios.interceptors.response.use((response)=>{//1st parameter => success case , 2nd parameter => error case
        setPendingApiCall(false);
        return response
      },(error)=>{
        setPendingApiCall(false);
        throw error
      })
    }, [])

    const onChange = (event) =>{
        const {name, value} = event.target
        if(name == "email"){
            setEmail(value)
        }else if(name =="password"){
            setPassword(value)
        }
        setErrors(null)
    }

    const onClickLogIn = async (event) => {
    
        event.preventDefault()
        const token = {
            username : email,
            password
        }
        try{
          setErrors(null)
          await userService.logIn(token)
        }catch(apiError){
          setErrors(apiError.response.data.message)
        }
        
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
          <ButtonWithProgress onClick={onClickLogIn} disabled={!buttonEnabled || pendingApiCall} pendingApiCall={pendingApiCall}  text="Sign In"/>
        </Form.Group> 
        {errors?<Alert className = "mt-3" variant="danger" >{errors}</Alert>:""}
      </Form>
    </Container>
  );
}
