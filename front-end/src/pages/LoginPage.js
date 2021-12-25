import React , {useState} from "react";
import { Form, Container, Col, Row, Alert } from "react-bootstrap";
import Input from "../components/Input";
import UserService from "../services/userService";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { connect } from "react-redux";
import { authActionLogin } from "../redux/authActionCreator";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function LoginPage(props) {
    const userService = new UserService();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errors,setErrors] = useState(null)
    
    const {spinnerCall,loginSuccess} = props
    const history = useHistory()
    const buttonEnabled = email && password;


    const onChange = (event) =>{
        const {name, value} = event.target
        if(name === "email"){
            setEmail(value)
        }else if(name === "password"){
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
          const response = await userService.logIn(token)
          const userData = response.data
          history.push('/') 
          loginSuccess(userData)

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
          <ButtonWithProgress onClick={onClickLogIn} disabled={!buttonEnabled || spinnerCall} spinnerCall={spinnerCall}  text="Sign In"/>
        </Form.Group> 
        {errors?<Alert className = "mt-3 text-center" variant="danger" >{errors}</Alert>:""}
      </Form>
    </Container>
  );
}

const putStateToProps = state => {
  return {
    state 
  }
}

const putDispatchToProps = (dispatch) =>{
  return {
    loginSuccess : (payload) => {
      return dispatch(authActionLogin(payload))
    }
  }
}

export default connect(putStateToProps,putDispatchToProps)(LoginPage)
