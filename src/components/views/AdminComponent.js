import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Table,
} from 'reactstrap';

function AdminComponent({details,url}) {
    console.log(details);
    console.log(url);
    const Navigate = useNavigate();
    const [userName,setUsername]=useState(null);
    const [password,setPassword]=useState(null);
    // setInterval(Navigate(0),1000);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleAdd = () => {
        axios.post(url, {
            userName,
            password
        })
            .then(function (response) {
                console.log(response.data);
                toggle();
                Navigate(0);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <Container className='text-center mt-3'>
            <h4 className="font-monospace fs-4 fw-bold "></h4>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add a panelist</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label>Username</Label>
                            <Input placeholder='enter username' onChange={(e)=>{setUsername(e.target.value)}}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input placeholder='enter password' onChange={(e)=>{setPassword(e.target.value)}}></Input>
                        </FormGroup>
                        <FormGroup className='text-center'>
                            <Button color="success" className="btn-sm" onClick={handleAdd}>Submit</Button>{' '}
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            <Table bordered striped className='border border-dark'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>username</th>
                        <th>password</th>
                        <th><Button style={{ "backgroundColor": "#0B3B6C" }} onClick={toggle}>
                            Add
                        </Button></th>
                    </tr>
                </thead>
                <tbody>

                {details && details.map((post, idx) => {
                    return (
                        <>
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{post.userName}</td>
                                <td>{post.password}</td>
                                <td><Button className="col-3" style={{ backgroundColor: "tomato" }}>Edit</Button></td>
                            </tr>
                        </>
                    )
                })}
                </tbody>

            </Table>

        </Container>
    );
}

export default AdminComponent;

