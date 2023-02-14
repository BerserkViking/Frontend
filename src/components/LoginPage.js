import React from 'react'
import IncedoLogo from './views/incedo-logo.png'
import { FormGroup, Navbar, NavbarBrand, Label, Input, Form, Button } from 'reactstrap'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'

const LoginPage = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [target,setTarget] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = () => {
    axios.post('https://localhost:8080/user',{
       userName,password
    })
      .then(function (response) {
        console.log(response);
        Navigate(target);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <>
      <Navbar
        className="my-2 fs-4"
        style={{ "background-color": "#281E5D" }}
        Row
      >

        <NavbarBrand href="/" style={{ "color": "tomato" }} className="font-monospace">
          <img
            alt="logo"
            src={IncedoLogo}
            style={{
              "width": "50%"
            }}
          />
        </NavbarBrand>
      </Navbar>
      <Form className='col-2  mx-auto '>
        <FormGroup>
          <Label>
            Team-Name/Username
          </Label>
          <Input placeholder='Username' onChange={(e) => setUserName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>
            Password
          </Label>
          <Input placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label className='text-start'>Participant</Label>
          <Input name="radio1" type="radio" value='/participant-view' onChange={(e) => setTarget(e.target.value)} />
          <Label style={{ "margin-left": "15%" }}>Organizer</Label>
          <Input name="radio1" type="radio" value='/panelist-view' onChange={(e)=> setTarget(e.target.value)} />
        </FormGroup>
        <Button class="btn btn-success mx-auto" onClick={handleSubmit}>Login</Button>
      </Form>

    </>
  )
}
export default LoginPage;