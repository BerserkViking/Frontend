import { React, useState } from 'react'
import IncedoLogo from './views/incedo-logo.png'
import { FormGroup, Navbar, NavbarBrand, Label, Input, Form, Button, Col, FormFeedback, Row, Alert } from 'reactstrap'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [teamName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [target, setTarget] = useState("");
  const [alertt, setALert] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = () => {

    localStorage.setItem('teamName', teamName);
    if (teamName === 'admin' && password === 'admin') {
      Navigate('/admin');
    }
    else {
      if (target === '/participant-view') {
    
        axios.post("http://15.206.136.106:443/login/", {
          teamName,
          password
        })
          .then(function (response) {
            console.log(response);
            Navigate(target);
          })
          .catch(function (error) {
            console.log(error);
            
            setALert(true);
          }); 
      }
      else {
        console.log(teamName[0]);
        if (teamName[0] === 'J')
          axios.post("http://15.206.136.106:443/api/judgeinfo/", {
            userName: teamName,
            password
          })
            .then(function (response) {
              console.log(response);
              Navigate('/judge');
            })
            .catch(function (error) {
              console.log(error);
              alert("you have entered wrong credentials")

              console.log(alert);
              setALert(true);
              console.log(alert)
            });
        else
          axios.post("http://15.206.136.106:443/Panelist/", {
            userName: teamName,
            password
          })
            .then(function (response) {
              console.log(response);

              Navigate(target);
            })
            .catch(function (error) {
              console.log(error);
              setALert(true)
            });
      }
    }

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
      <div className='text-center'>
      <h4 className='fw-bold font-monospace mx-auto'>Login Page</h4>
      </div>
      <Form className='col-4  mx-auto myborder' style={{ "padding": "3%" }} data-toggle="validator">
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
          <Col>
            <Input placeholder='Password' type='Password' onChange={(e) => setPassword(e.target.value)}
              invalid={alertt} />
            <FormFeedback invalid>
              You have entered wrong credentials
            </FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col className='text-start'>
              <Label className='text-start'>Participant</Label>
              <Input style={{ "marginLeft": "2%" }} name="radio1" type="radio" value='/participant-view' onChange={(e) => setTarget(e.target.value)} />
            </Col>
            <Col className='text-end'>
              <Label style={{ "marginLeft": "11%" }}>Organizer</Label>
              <Input style={{ "marginLeft": "2%" }} name="radio1" type="radio" value='/panelist-view' onChange={(e) => setTarget(e.target.value)} />
            </Col>
          </Row>
          <br />
          <Row >
            <Button className="btn btn-success mx-auto" onClick={handleSubmit}>Login</Button>
          </Row>
        </FormGroup>
      </Form>
    </>
  )
}
export default LoginPage;