import {React , useState} from 'react'
import IncedoLogo from './views/incedo-logo.png'
import { FormGroup, Navbar, NavbarBrand, Label, Input, Form, Button ,Col } from 'reactstrap'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'

const LoginPage = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [target,setTarget] = useState("");
  const Navigate = useNavigate();


  const handleSubmit = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts",{
      userName,
      password
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
      <Form className='col-3  mx-auto' data-toggle="validator">
        <FormGroup>
          <Label>
            Team-Name/Username
          </Label>
          <Input placeholder='Username' onChange={(e) => setUserName(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label>
            Password
          </Label>
          <Col>
          <Input placeholder='Password' type='Password'onChange={(e) => setPassword(e.target.value)} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label className='text-start'>Participant</Label>
          <Input style={{"marginLeft":"2%"}} name="radio1" type="radio" value='/participant-view' onChange={(e) => setTarget(e.target.value)} />
          <Label style={{ "margin-left": "11%" }}>Organizer</Label>
          <Input style={{"marginLeft":"2%"}} name="radio1" type="radio" value='/panelist-view' onChange={(e)=> setTarget(e.target.value)} />
        </FormGroup>
        <Button class="btn btn-success mx-auto" onClick={handleSubmit}>Login</Button>
      </Form>
     
    </>
  )
}
export default LoginPage;