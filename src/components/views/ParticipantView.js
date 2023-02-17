import { React, toggle, modal, useState } from 'react'
import {
    Navbar, NavbarBrand, Button, Card, CardHeader, ListGroup, ListGroupItem, CardFooter,
    Modal, ModalHeader, ModalBody, ModalFooter, Input,Popover,PopoverHeader,PopoverBody
} from 'reactstrap'
import { Link } from 'react-router-dom'
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
    const [trigger, setTrigger] = useState(false);
    
    const toggle = () => setModal(!modal);

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
                
                <div className='col-3'>
                
            <Button
                id="Popover1"
                type="button"
                className='btn'
                style= {{"backgroundColor":"tomato","marginLeft":'0%'}}
                onClick={() => setTrigger(!trigger)}
            >
                Team Info
            </Button>
            <Popover
                flip
                isOpen={trigger}
                target="Popover1"
                toggle={trigger}
                placement="bottom"
                trigger='click'
            >
                <PopoverBody className='text-center'>
                    <h3>{team_name}</h3>
                    <div> status : {possible_status[0]}</div>
                     <div>Panelist_Assigned : {panelist_assigned}</div>
                     <div>
                     <ul>
                        <ul>Team Members</ul>
                        <ul>Dhruv Kumar Sharma</ul>
                        <ul>Dhruv Kumar Sharma</ul>
                        <ul>Dhruv Kumar Sharma</ul>
                        <ul>Dhruv Kumar Sharma</ul>
                     </ul>
                     </div>
               
                </PopoverBody>
            </Popover>
                <Link to="/" className="btn " style={{ "background-color": "tomato", "color": "white" ,"margin-left":"40%"}}>
                    Log Out
                </Link>
            </div>
        
                               
            </Navbar>
            
            <Card className="col-5 mx-auto" style={{ "marginTop": "5%" }}>
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
