import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Navbar, NavbarBrand, ListGroup, ListGroupItem, NavbarText } from 'reactstrap'
import IncedoLogo from './incedo-logo.png'
import {Link} from 'react-router-dom'
export const PanelistView = () => {
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
        <Link to="/" className="btn" style={{ "background-color": "tomato", "color": "white" }}>
          Log Out
        </Link>
      </Navbar>

      <Card
        className="my-2 mx-auto col-6"

      >
        <CardHeader>
          Assigned Idea 1
        </CardHeader>
        <CardBody>
          <CardText>
            Problem Statement
          </CardText>
          <CardText>
            Problem Solution
          </CardText>
        </CardBody>
        <CardFooter>
          <Button color="success">
            Accept
          </Button>
          <Button color="primary">
            Revert
          </Button>
          <Button color="danger">
            Reject
          </Button>
        </CardFooter>
      </Card>
      <Card className='mx-auto col-6'>
        <CardHeader>
          Assigned Idea 2
        </CardHeader>
        <CardBody>
          <CardText>
            Problem Statement
          </CardText>
          <CardText>
            Problem Solution
          </CardText>
        </CardBody>
        <CardFooter>
          <Button color="success">
            Accept
          </Button>
          <Button color="primary">
            Revert
          </Button>
          <Button color="danger">
            Reject
          </Button>
        </CardFooter>
      </Card>

    </>
  )
}
