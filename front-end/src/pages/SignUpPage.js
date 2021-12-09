import React, { useState } from "react";
import {
  Button,
  Loader,
  Form,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";
import UserService from "../services/userService";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pendingApiCall, setPendingApiCall] = useState(false);

  let onChange = (event) => {
    //inputlardan bilgileri statelere alan fonksiyon
    const { name, value } = event.target; //destructuring**
    switch (name) {
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
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
    console.log(pendingApiCall)
    try{
      let response = await userService.createUser(requestBody); 
      
    }catch(error){

    }
    setPendingApiCall(false)
   
  };

  
  return (
    <div>
      <Grid textAlign="center">
        <GridColumn width="4" className="centered">
          <GridRow>
            <h1>Sign Up</h1>
          </GridRow>
          <GridRow>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input name="name" placeholder="Name" onChange={onChange} />
              </Form.Field>
              <Form.Field>
                <label>Surname</label>
                <input
                  name="surname"
                  placeholder="Surname"
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input name="email" placeholder="Email" onChange={onChange} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Phone Number</label>
                <input
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={onChange}
                />
              </Form.Field>
              <Button
                onClick={onClickSignUp}
                disabled={pendingApiCall}
                type="submit"
              >
                <Loader active={pendingApiCall} inline size="mini" />
                Sign Up
              </Button>
            </Form>
          </GridRow>
        </GridColumn>
      </Grid>
    </div>
  );
}
