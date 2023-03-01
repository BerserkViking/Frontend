import { useState, React } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Form, FormGroup, Label, Input, Col, Button, FormFeedback, Navbar, NavbarBrand, Container } from 'reactstrap'
import IncedoLogo from './incedo-logo.png'
import axios from 'axios'

const RegistrationForm = () => {
    const Navigate = useNavigate();
    const [memberCount, setTable] = useState("");
    const [teamName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [domain, setDomain] = useState("");
    const [cpassword, setCnfPassword] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    let [members, setmembers] = useState([{
        name: "",
        email: ""
    }, { name: "", email: "" }, { name: "", email: "" }, { name: "", email: "" }]);

    const handleChange = (e, idx) => {
        const field = e.target.name;
        const value = e.target.value;
        let tempMembers = members;
        tempMembers[idx] = {
            ...tempMembers[idx],
            [field]: value
        };
        setmembers(tempMembers);

    }

    const handleSubmit = () => {
        localStorage.setItem('teamName', teamName);
        console.log(teamName);
        if (memberCount === "3") {
            members.pop();
        }

        axios.post("http://15.206.136.106:443/api/register/", {
            teamName,
            password,
            domain,
            memberCount,
            projectTitle
        })
            .then(function (response) {
                console.log(response.data)
                axios.post("http://15.206.136.106:443/api/members/", {
                    teamName,
                    members
                })
                    .then(function (response) {


                        console.log(response)
                        Navigate('/idea-submission')
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            })
            .catch(function (error) {
                console.log(error);
            });


    }



    const fourthRow = (table) => {
        if (table === "3")
            return (
                <>
                    <Table bordered className='border border-dark border-1 '>
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
                                    <Input placeholder='name' name="name" onChange={(e) => handleChange(e, 0)} required />
                                </td>
                                <td>
                                    <Input placeholder='email' name="email" type='email' onChange={(e) => handleChange(e, 0)} required />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2
                                </th>
                                <td>
                                    <Input placeholder='name' name="name" onChange={(e) => handleChange(e, 1)} required />
                                </td>
                                <td>
                                    <Input placeholder='email' name="email" type='email' onChange={(e) => handleChange(e, 1)} required />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                    <Input placeholder='name' name="name" onChange={(e) => handleChange(e, 2)} required />
                                </td>
                                <td>
                                    <Input placeholder='email' name="email" type='email' onChange={(e) => handleChange(e, 2)} required />
                                </td>
                            </tr>


                        </tbody>


                    </Table>
                </>
            )
        if (memberCount === '4') {
            return (
                <>
                    <Table bordered className='border border-dark'>
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
                                    <Input placeholder='name' name="name" onChange={(e) => handleChange(e, 0)} required />
                                </td>
                                <td>
                                    <Input placeholder='email' name="email" type='email' onChange={(e) => handleChange(e, 0)} required />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2
                                </th>
                                <td>
                                    <Input placeholder='name' name="name" onChange={(e) => handleChange(e, 1)} required />
                                </td>
                                <td>
                                    <Input placeholder='email' name="email" type='email' onChange={(e) => handleChange(e, 1)} required />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                    <Input placeholder='name' name="name" onChange={(e) => handleChange(e, 2)} required />
                                </td>
                                <td>
                                    <Input placeholder='email' name="email" type='email' onChange={(e) => handleChange(e, 2)} required />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    4
                                </th>
                                <td>
                                    <Input placeholder='name' name="name" onChange={(e) => handleChange(e, 3)} required />
                                </td>
                                <td>
                                    <Input placeholder='email' name="email" type='email' onChange={(e) => handleChange(e, 3)} required />
                                </td>
                            </tr>


                        </tbody>



                    </Table>
                </>
            )
        }
        if (memberCount === "none")
            return (<></>)
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
            <div className='text-center mt-3'>
            <h4 className='fw-bold font-monospace'>Registration Form</h4>
            </div>
            <div style={{ "width": "60%", "marginTop": "3%", "padding": "1%", "border": "2px solid #281E5D" }} className="mx-auto">
                <Form >
                    <FormGroup row >
                        <Label
                            for="exampleEmail"
                            sm={2}  
                        >
                            Team Name
                        </Label>
                        <Col sm={10}>
                            <Input
                                placeholder="Enter your Team name"
                                onChange={(e) => { setUsername(e.target.value) }}

                                required
                            />
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
                                onChange={(e) => setPassword(e.target.value)}
                                required
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
                                required="true"
                                onChange={(e) => setCnfPassword(e.target.value)}
                                valid={((password === cpassword) && (password !== ""))}
                                invalid={((password !== cpassword) && (password !== ""))}
                            />
                            <FormFeedback valid>
                                passwords are matched
                            </FormFeedback>
                            <FormFeedback invalid>
                                passwords are not matched
                            </FormFeedback>
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
                            <Input
                                placeholder="project title"
                                onChange={(e) => setProjectTitle(e.target.value)}
                                required
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
                                onChange={(e) => (setDomain(e.target.value))}
                                required
                            >
                                <option >
                                    None
                                </option>
                                <option >
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
                            Member Count
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                onChange={(e) => { setTable(e.target.value) }}
                                required
                            >   <option>

                                </option>
                                <option>
                                    3
                                </option>
                                <option>
                                    4
                                </option>
                            </Input>
                        </Col>

                        <FormGroup row>
                            <Label>Member Details</Label>
                        
                            <div className='text-center ' style={{marginLeft:"2%"}} >

                            {fourthRow(memberCount)}
                            </div>
                    
                            
                        </FormGroup>
                        <FormGroup row>
                            <Col className='text-center'>
                                <Button className='col-4' style={{ "backgroundColor": "#281E5D" }} onClick={handleSubmit} >
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>

                    </FormGroup>


                </Form>
            </div>
        </>
    )




}

export default RegistrationForm;