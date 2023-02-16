import { useState, React } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Table, Form, FormGroup, Label, Input, Col, Button, FormText, FormFeedback, Navbar, NavbarBrand } from 'reactstrap'
import IncedoLogo from './incedo-logo.png'
import axios from 'axios'

const home = '';
const RegistrationForm = () => {
    const Navigate = useNavigate();
    const [memberCount, setTable] = useState("");
    const [teamName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [domain, setDomain] = useState("");
    const [projectTitle, setProjectTitle] = useState("");

    const handleSubmit = () => {
        axios.post("http://localhost:8080/api/register/", {
            teamName,
            password,
            domain,
            memberCount,
            projectTitle
        })
            .then(function (response) {
                console.log(response);
                Navigate('/login');
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const fourthRow = (table) => {
        if (table === "3")
            return <></>
        else
            return (
                <>
                    <tr>
                        <th scope="row">
                            4
                        </th>
                        <td>
                            <Input placeholder='name' />
                        </td>
                        <td>
                            <Input placeholder='email' type='email' />
                        </td>
                    </tr>
                </>
            )
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
            <div style={{ "width": "60%", "margin-top": "3%", "padding": "1%", "border": "2px solid #281E5D" }} className="mx-auto">
                <Form>
                    <FormGroup row>
                        <Label
                            for="exampleEmail"
                            sm={2}
                        >
                            Team Name
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleEmail"
                                name="team-name"
                                placeholder="Enter your Team name"
                                onChange={(e) => { setUsername(e.target.value) }}
                                valid
                            />
                            <FormFeedback valid>
                                Sweet! that name is available
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="examplePassword"
                            sm={2}
                        >
                            Password
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password"
                                // type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="examplePassword"
                            sm={2}
                        >
                            Confirm Password
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="confirm password"
                                type="password"
                            />
                        </Col>
                        <FormFeedback valid>
                            Password Matched
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            sm={2}
                        >
                            Project Title
                        </Label>
                        <Col sm={10}>
                            <Input  placeholder="project title" onChange={(e) => setProjectTitle(e.target.value)} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleSelect"
                            sm={2}
                        >
                            Domain
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                onChange={(e) => (setDomain(e.target.value))}
                            >
                                <option>
                                    None
                                </option>
                                <option>
                                    Web
                                </option>
                                <option>
                                    Artificial
                                </option>
                                <option>
                                    Blockchain
                                </option>
                                <option>
                                    Cybersecurity
                                </option>
                                <option>
                                    Hardware
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="exampleSelect"
                            sm={2}
                        >
                            Number of Members
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                onChange={(e) => { setTable(e.target.value) }}
                            >
                                <option>
                                    None
                                </option>
                                <option>
                                    3
                                </option>
                                <option>
                                    4
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label>Member Details</Label>
                        <Table>
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        1
                                    </th>
                                    <td>
                                        <Input placeholder='name' />
                                    </td>
                                    <td>
                                        <Input placeholder='email' type='email' />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        2
                                    </th>
                                    <td>
                                        <Input placeholder='name' />
                                    </td>
                                    <td>
                                        <Input placeholder='email' type='email' />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        3
                                    </th>
                                    <td>
                                        <Input placeholder='name' />
                                    </td>
                                    <td>
                                        <Input placeholder='email' type='email' />
                                    </td>
                                </tr>
                                {fourthRow(memberCount)}
                            </tbody>


                        </Table>
                    </FormGroup>
                    <FormGroup row>
                        <Col className='text-start'>
                            <Link to='/' className="btn btn-warning">Back</Link>
                        </Col>
                        <Col className='text-end'>
                            <Button color='success' onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}

export default RegistrationForm;
