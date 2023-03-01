import {React,useState}from 'react'
import {Table,Button,Navbar,NavbarBrand,Form,FormGroup,Input,Label,Col} from 'reactstrap'
import IncedoLogo from './incedo-logo.png'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export const RegisterMember = () => {
    const [memberCount, setTable] = useState("none");
    const Navigate = useNavigate();
    const handleSubmit = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts/", {
            memberCount
        })
            .then(function (response) {
                console.log(response)
                Navigate('/register-feedback')
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const fourthRow = (table) => {
        
        if (table === "3")
            return (
                <>
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
                                    <Input placeholder='name' required />
                                </td>
                                <td>
                                    <Input placeholder='email' type='email' required />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2
                                </th>
                                <td>
                                    <Input placeholder='name' required />
                                </td>
                                <td>
                                    <Input placeholder='email' type='email' required />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                    <Input placeholder='name' required />
                                </td>
                                <td>
                                    <Input placeholder='email' type='email' required />
                                </td>
                            </tr>

                        </tbody>


                    </Table>
                </>
            )
        if (memberCount === '4') {
            return (
                <>
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
                                    <Input placeholder='name' required />
                                </td>
                                <td>
                                    <Input placeholder='email' type='email' required />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2
                                </th>
                                <td>
                                    <Input placeholder='name' required />
                                </td>
                                <td>
                                    <Input placeholder='email' type='email' required />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                    <Input placeholder='name' required />
                                </td>
                                <td>
                                    <Input placeholder='email' type='email' required />
                                </td>
                            </tr>
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
            <div className='col-6 mx-auto border border-3' style={{"border-color":"#281E5D","padding":'3%'}}>
            <Form>
                <FormGroup row>
                    <Label
                        for="exampleSelect"
                        sm={3}
                    >
                        Member Count
                    </Label>
                    <Col sm={9}>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            onChange={(e) => { setTable(e.target.value) }}
                            required
                        >
                            <option>
                                none
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
                    {fourthRow(memberCount)}

                </FormGroup>
                <Button  className="mx-auto btn-success" onClick={{handleSubmit}}>Submit</Button>
            </Form>
            </div>
        </>
    )
}
