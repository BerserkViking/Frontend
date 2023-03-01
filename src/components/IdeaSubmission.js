import { React, useState } from 'react'
import { Form, FormGroup, Input, Label, Navbar, NavbarBrand,Button } from 'reactstrap'
import IncedoLogo from './views/incedo-logo.png'
import './style.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const IdeaSubmission = () => {
    const Navigate = useNavigate();
     const teamName = localStorage.getItem('teamName');
    
    const [problemStatement, setStatement] = useState("");
    const [problemSolution, setSolution] = useState("");
    const handleSubmit = () => {
        axios.post("http://15.206.136.106:443/api/idea-submission/", {

            ideaSubmission: {
                problemStatement,
                problemSolution
            },
            teamName
        })
            .then(function (response) {
                console.log(response)
                Navigate('/register-feedback')
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
            <h4 className='font-monospace fw-bold text-center'>Submit Your Problem Statement</h4>
            <Form className='mx-auto col-6 myborder' style={{ marginTop: "5%", "padding": "2%" }}>
                <FormGroup>
                    <Label>Problem Statement</Label>

                    <Input placeholder='enter your problem statement' type="textarea"
                        onChange={(e) =>
                            setStatement(e.target.value)} required 
                        style={{"height":"5vh"}}/>

                </FormGroup>
                <FormGroup>
                    <Label>Problem solution</Label>

                    <Input placeholder='enter your problem solution' type="textarea"
                        onChange={(e) => setSolution(e.target.value)} style={{"height":"20vh"}}
                        required></Input>
                </FormGroup>
                <FormGroup className='text-center'>
                    <Button className="col-4 btn btn-success" onClick={handleSubmit}>
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </>
    )
}
