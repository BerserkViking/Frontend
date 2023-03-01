import { React, toggle, modal, useState, useEffect } from 'react'
import {
    Alert, Form, Label, Table, Navbar, NavbarBrand, Button, Card, CardHeader, ListGroup, ListGroupItem, CardFooter,
    Modal, ModalHeader, ModalBody, ModalFooter, Input, Popover, PopoverHeader, PopoverBody, FormGroup, Col, Row, Container
} from 'reactstrap'
import '../style.css'
import { useNavigate } from 'react-router-dom'
import IncedoLogo from './incedo-logo.png'
import axios from 'axios'

import Clock from '../clock';
import Example from '../Example'


// var member1 = "Dhruv";
// var member2 = "Utkarsh";
// var member3 = "Hardeep";
var possible_status = ["Approved", "Assigned", "Reverted", "Rejected"];
var panelist_assigned = "Shreeram Pokle"
let team_name = "Vikram Sarabhai"

export const ParticipantView = () => {
    const [modal, setModal] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [problemStatement, setStatement] = useState("");
    const [problemSolution, setSolution] = useState("");
    const teamName = localStorage.getItem('teamName');
    const [details, setDetails] = useState(null);
    const [otherdetails, setOtherdetails] = useState(null);

    const Navigate = useNavigate();
    const toggle = () => setModal(!modal);


    useEffect(() => {
        console.log(teamName);
        axios.get(`http://15.206.136.106:443/api/members/teamName/${teamName}`)
            .then(function (response) {
                console.log(response.data);
                setDetails(response.data);
            })
            .catch(function (error) {
                console.log(error);

            });
        axios.get(`http://15.206.136.106:443/api/idea-submission/teamName/${teamName}`)
            .then(function (response) {
                console.log(response.data);
                setOtherdetails(response.data);

            })
            .catch(function (error) {
                console.log(error);

            });
    }, []);
    let formdata = new FormData();
    const fileUpload = (e) => {
        console.log(e.target.files[0]);
        if (e && e.target && e.target.files[0])
            formdata.append('file', e.target.files[0])
        formdata.append('teamName', otherdetails.registration.teamName)
        console.log(formdata);
    }
    const handleFileSubmit = () => {
        axios.post("http://15.206.136.106:443/upload-file",
            formdata)
            .then(function (response) {
                console.log(response)
                alert("files submitted")
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    const renderFileUpload = () => {
        if (status === "Accept")
            return (
                <>
                    <FormGroup>
                        <Label for="exampleFile">
                            Submit Your Project Working Demo
                        </Label>
                        <Input
                            id="exampleFile"
                            name="file"
                            type="file"
                            accept=".mp4"
                            onChange={fileUpload}
                        />
                    </FormGroup>
                    <div className='text-center'>
                        <Button className='col-4 btn-success' onClick={handleFileSubmit}> Submit</Button>
                    </div>
                </>
            )
    }
    const handleEdit = () => {
        otherdetails.problemSolution = problemSolution;
        otherdetails.problemStatement = problemStatement;

        console.log(otherdetails)
        axios.put("http://15.206.136.106:443/api/idea-submission/idea/teamName",
            otherdetails
        )
            .then(function (response) {
                console.log(response)
                alert("Details Updated your application is under review")

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const enableEdit = () => {
        if (status === "Revert")
            return (
                <>
                    <FormGroup className='text-center'>
                        <Button style={{ "backgroundColor": "#0B3B6C" }} className='col-3' onClick={toggle}>
                            Edit
                        </Button>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Edit Project Details</ModalHeader>
                            <ModalBody>
                                <Input
                                    name="problem statement"
                                    placeholder="Problem Statement"
                                    type="textarea"
                                    defaultValue={otherdetails.problemStatement}
                                    onChange={(e) => setStatement(e.target.value)}
                                />
                                <Input
                                    name="problem solution"
                                    placeholder="Problem Solution"
                                    type="textarea"
                                    defaultValue={otherdetails.problemSolution}
                                    onChange={(e) => setSolution(e.target.value)}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" onClick={handleEdit}>
                                    Submit
                                </Button>{' '}
                            </ModalFooter>
                        </Modal>
                    </FormGroup>
                </>
            )
    }

    const displayFeedback = () => {
        if (status === "Revert")
            return (
                <>
                    <Alert color="primary" isOpen={(otherdetails && (otherdetails.feedback !== null || otherdetails.feedback !== ""))}>
                        <h6 className="font-monospace fw-bold">Feedback from Panelist</h6>
                        {otherdetails && otherdetails.feedback}
                    </Alert>
                </>
            )
        if (status === "Reject")
            return (
                <>
                    <Alert color="danger" isOpen={(otherdetails && (otherdetails.feedback !== null || otherdetails.feedback !== ""))}>
                        <h6 className="font-monospace fw-bold">Feedback from Panelist</h6>
                        {otherdetails && otherdetails.feedback}
                    </Alert>
                </>
            )
    }
    // const handleSubmit = () => {
    //     toggle();
    //     const teamName = localStorage.getItem('teamName');
    //     console.log(problemSolution);
    //     console.log(problemStatement);
    //     console.log(teamName);
    //     axios.post("http://15.206.136.106:443/api/idea-submission/", {

    //         ideaSubmission: {
    //             problemStatement,
    //             problemSolution
    //         },
    //         teamName
    //     })
    //         .then(function (response) {
    //             console.log(response)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }
    let status = "Under review"
    if (otherdetails && otherdetails.status !== null)
        status = otherdetails.status;
    if (details && otherdetails)
        return (
            <>

                <Navbar
                    className="my-2 fs-4"
                    style={{ "backgroundColor": "#0B3B6C" }}
                >
                    <NavbarBrand href="/" style={{ "color": "tomato" }} className="font-monospace">
                        <img
                            alt="logo"
                            src={IncedoLogo}
                            width="50%"
                        />

                    </NavbarBrand>

                    <Col className='text-end'>
                        <Button style={{ backgroundColor: "tomato" }} onClick={() => Navigate('/leaderboard')}>Leaderboard</Button>
                    </Col>
                    <Col className='text-end' md={1}>
                        <Button style={{ backgroundColor: "tomato" }} onClick={() => Navigate('/')}>Logout</Button>
                    </Col>
                </Navbar>
                <Container className='col-6 mx-auto myborder' style={{ "padding": "2%" }}>
                    <Row>
                        <Col className='text-center'>
                            Team Name : {otherdetails.registration.teamName}
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-start'>Panelist Assigned : {otherdetails.panelistAssign.userName} </Col>
                        <Col className='text-end'>Status : {status}</Col>
                    </Row>
                    <Row>
                        {details && <Example details={details}></Example>}
                    </Row>
                </Container>
                <Form className='mx-auto col-6 myborder' style={{ "marginTop": "5%", "padding": "2%" }}>
                    <FormGroup>
                        <Label>Problem Statement</Label>

                        <Input placeholder='enter your problem statement' value={otherdetails.problemStatement} type="textarea"
                            onChange={(e) =>
                                setStatement(e.target.value)} required />

                    </FormGroup>
                    <FormGroup>
                        <Label>Problem solution</Label>

                        <Input placeholder='enter your problem solution' value={otherdetails.problemSolution} type="textarea"
                            onChange={(e) => setSolution(e.target.value)}
                            required></Input>
                    </FormGroup>
                    {displayFeedback()}
                    {enableEdit()}
                    {renderFileUpload()}
                </Form>


            </>
        )
}
