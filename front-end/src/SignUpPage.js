import React, {useState} from "react";
import {
  Button,
  Checkbox,
  Form,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";

export default function SignUpPage() {
    const [name,setName] = useState("")
    const [surname, setSurname] = useState("")

    function onChange(event){
      const {name,value} = event.target //destructuring**
      switch(name){
        case "name":
          setName(value)
          break
        case "surname":
          setSurname(value)
          break
      }
      
    }
  return (
    <div>
      <Grid textAlign="center">
        <GridColumn width="4" className="centered">
          <GridRow>
            <h1 >Sign Up</h1>
          </GridRow>
          <GridRow>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input name="name" placeholder="Name" onChange = {onChange} />
              </Form.Field>
              <Form.Field>
                <label>Surname</label>
                <input name="surname" placeholder="Surname" onChange = {onChange}/>
              </Form.Field>
              <Button type="submit">
                Sign Up
              </Button>
            </Form>
          </GridRow>
        </GridColumn>
      </Grid>
    </div>
  );
}
