import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Navbar, NavbarBrand, ListGroup, ListGroupItem, NavbarText } from 'reactstrap'

export const PanelistView = () => {
  return (
    <>
      <Navbar
        className="my-2"
        color="warning"
      >
        
        <NavbarText className="font-monospace fs-4">
          Panelist
        </NavbarText>
        <Button
        color="danger"
      >
        Log Out
      </Button>
      </Navbar>
     
      <Card
        className="my-2"

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
      <Card>
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
