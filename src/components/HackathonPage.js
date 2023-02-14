import React from 'react'
import IncedoLogo from './views/incedo-logo.png'
import { NavbarText, Navbar, Clock, NavbarBrand, Card, CardHeader, CardBody, CardText, Button, CardFooter, CardTitle } from 'reactstrap'
import {  useNavigate } from 'react-router-dom'

export const HackathonPage = () => {
  const Navigate=useNavigate();

  return (
    <>
      <Navbar
        className="my-2 fs-4"
        style={{ "background-color": "#281E5D" }}
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
        {/* for spacing */}
        <div className='col-7'></div> 
        <Button onClick={() => Navigate('/login')} className="btn" style={{ "background-color": "tomato", "color": "#281E5D" }}>Login</Button>
        <Button onClick={() => Navigate('/registration-form')} className="btn" style={{ "background-color": "tomato", "color": "#281E5D" }}>Register</Button>
      </Navbar>
      <Card className="col-6 mx-auto">
        <CardBody>
          <CardTitle>
            Overview
          </CardTitle>
          <CardText>
            A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested
            people together to improve upon or build a new software program. The word hackathon is a portmanteau of the words hac
            ker, which means clever programmer, and marathon, an event marked by endurance.The concept of the hackathon, also call
          </CardText>
        </CardBody>
      </Card>
    </>
  )
}
