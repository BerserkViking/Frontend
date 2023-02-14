import { useNavigate } from 'react-router-dom'
import { Table, Form, FormGroup, Label, Input, Col, Button, FormText, FormFeedback, Navbar, NavbarBrand } from 'reactstrap'
import IncedoLogo from './incedo-logo.png'
const RegistrationForm = () => {
    const Navigate = useNavigate();
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
          "width":"50%"
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
                                type="password"
                            />
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
                            >
                                <option>

                                </option>
                                <option>
                                    Web Development
                                </option>
                                <option>
                                    Artificial Intellingence/Machine Learning
                                </option>
                                <option>
                                    Blockchain
                                </option>
                                <option>
                                    Cybersecurity
                                </option>
                                <option>
                                    Hardware and Networking
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
                            >
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
                                        <Input placeholder='name'/>
                                    </td>
                                    <td>
                                       <Input placeholder='email' type='email'/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        2
                                    </th>
                                    <td>
                                        <Input placeholder='name'/>
                                    </td>
                                    <td>
                                       <Input placeholder='email' type='email'/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        3
                                    </th>
                                    <td>
                                        <Input placeholder='name'/>
                                    </td>
                                    <td>
                                       <Input placeholder='email' type='email'/>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </FormGroup>
                    <FormGroup row>
                        <Col className='text-start'>
                            <Button color='warning' onClick={()=>Navigate('/login')}>
                                Back
                            </Button>
                        </Col>
                        <Col className='text-end'>
                            <Button color='success' onClick={()=>Navigate('/login')}>
                                Next
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
                </div>
        </>
    )
}

export default RegistrationForm;
