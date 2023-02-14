import { React, toggle, modal, useState } from 'react'
import {
    Navbar, NavbarBrand,Button, Card, CardHeader, ListGroup, ListGroupItem, CardFooter,
    Modal, ModalHeader, ModalBody, ModalFooter, Input
} from 'reactstrap'
import {Link} from 'react-router-dom'
import IncedoLogo from './incedo-logo.png'

import Clock from '../clock';

var member1 = "Dhruv";
var member2 = "Utkarsh";
var member3 = "Hardeep";
var possible_status = ["Approved", "Assigned", "Reverted", "Rejected"];
var panelist_assigned = "Shreeram Pokle"
let team_name = "Vikram Sarabhai"

export const ParticipantView = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>

            <Navbar
                className="my-2 fs-4"
                style={{ "background-color": "#281E5D" }}
            >  
            <Clock/>
                <NavbarBrand href="/" style={{ "color": "tomato" }} className="font-monospace">
                    <img
                        alt="logo"
                        src={IncedoLogo}
                        style={{
                            "width": "50%"
                        }}
                    />
                </NavbarBrand>
                <Link to="/" className="btn" style={{"background-color":"tomato","color":"white"}}>
                    Log Out
                </Link>
            </Navbar>   
            <div className='container text-center'>
                <div class='row'>
                    <div class='col border border-secondary'>
                        Team - {team_name}
                        <ul>
                            <ul> {member1}</ul>
                            <ul> {member2}</ul>
                            <ul> {member3}</ul>
                        </ul>
                    </div>
                    <div className='col border border-secondary'>
                        <ul>
                            <ul>Status :{possible_status[0]}</ul>
                            <ul>Panelist Assigned : {panelist_assigned}</ul>
                        </ul>
                    </div>
                </div>
            </div>
            <Card style={{ "margin-left": "28%", "width": "40%", "margin-top": "10%" }}>
                <CardHeader>
                    Project Details
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem>
                        Problem Statement
                    </ListGroupItem>
                    <ListGroupItem>
                        Problem Solution Idea
                    </ListGroupItem>
                </ListGroup>
            </Card>
            <CardFooter className="text-center">
                <Button color="secondary" onClick={toggle}>
                    Edit
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Edit Project Details</ModalHeader>
                    <ModalBody>
                        <Input
                            name="problem statement"
                            placeholder="Problem Statement"
                        />
                        <Input
                            name="problem solution"
                            placeholder="Problem Solution"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                            save
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </CardFooter>
        </>
    )
}
