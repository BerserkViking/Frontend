import React, { useEffect, useState, toggle, modal } from 'react'
import { ModalFooter, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Navbar, NavbarBrand, ListGroup, ListGroupItem, NavbarText, Row, Col, Modal, ModalHeader, ModalBody, Input, InputGroup } from 'reactstrap'
import IncedoLogo from './incedo-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style.css'

export const PanelistView = () => {
  const teamName = localStorage.getItem('teamName');
  const [ideas, setIdeas] = useState(null);
  const [modal, setModal] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [status, setStatus] = useState(null);
  const [retur, setReturn] = useState(false)
  const Navigate = useNavigate()

  const toggle = (status) => {
    setModal(!modal);
  }
  useEffect(() => {
    console.log("abcd");
    axios.get(`http://15.206.136.106:443/api/panelist/${teamName}`)
      .then(function (response) {
        // console.log(response.data);
        setIdeas(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);


  const handleSubmit = (s, x) => {
    console.log(s);
    console.log(x);
    console.log(feedback);
    axios.post('http://15.206.136.106:443/api/idea-submission/update-status', {
      status: s,
      ideaSubmissionId: x,
      feedback
    })
      .then(function (response) {
        console.log(response.data);
        toggle();
        Navigate(0)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (ideas)
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
              width="50%"
            />
          
          </NavbarBrand>
          <Row md={2}>
          <Col>
            <Link onClick={() => setReturn(!retur)} className="text-decoration-none font-monospace fs-5" style={{ color: "tomato" }}>Unseen</Link>
          </Col>
          <Col className='text-start'>
            <Link onClick={() => setReturn(!retur)} className="text-decoration-none font-monospace fs-5" style={{ color: "tomato" }}>Reverted</Link>
          </Col>
          </Row>
          <Col className='text-end'>
            <Link to="/" className="btn" style={{ "background-color": "tomato", "color": "white" }}>
              Log Out
            </Link>
          </Col>
        </Navbar>


        {!retur && ideas && ideas.length > 0 && ideas.map((post, idx) => {
          console.log(post.registration.teamName)
          if (post.status === null || post.status === "")
            return (
              <>
                <Card
                  className="my-2 mx-auto col-6 mt-4" 

                >
                  <CardHeader className='myborder'>
                    <Row><Col>Team Name : {post.registration.teamName}</Col></Row>
                    <Row>
                      <Col>Domain : {post.registration.domain}</Col>
                      <Col>Project Title : {post.registration.projectTitle}</Col>
                    </Row>
                  </CardHeader>
                  <CardBody className='border border-dark border-2'>
                    <CardText>
                      Problem Statement
                      <br />
                      <Input value={post.problemStatement} />
                    </CardText>
                    <CardText>
                      Problem Solution
                      <br />
                      <Input value={post.problemSolution}></Input>
                    </CardText>
                  </CardBody>
                  <CardFooter className='text-center myborder'>
                    <Button className='mybackc' onClick={toggle} style={{ backgroundColor: "#281E5D" }}>
                      Feedback
                    </Button>
                  </CardFooter>
                  <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Provide Feedback</ModalHeader>
                    <ModalBody>
                      <Row>

                        <Input
                          type="select"
                          defaultValue=" "
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option>  </option>
                          <option>
                            Accept
                          </option>
                          <option>
                            Revert
                          </option>
                          <option>
                            Reject
                          </option>
                        </Input>
                      </Row>
                      <br />
                      <Row>
                        <Input
                          name="problem statement"
                          placeholder="feedback for participants"
                          style={{ "height": "30vh" }}
                          type="textarea"
                          onChange={(e) => setFeedback(e.target.value)}
                          className={post.id}
                          required
                        />
                      </Row>
                    </ModalBody>
                    <ModalFooter >

                      <Button className="col-3 mx-auto" color="success" onClick={() => handleSubmit(status, ideas[idx].id)} >
                        Submit
                      </Button>{' '}

                    </ModalFooter>
                  </Modal>
                </Card>
              </>
            )
        })}

        {retur && ideas && ideas.length > 0 && ideas.map((post, idx) => {
          console.log(post.registration.teamName)
          if (post.status === "Review")
            return (
              <>
                <Card
                  className="my-2 mx-auto col-6"

                >
                  <CardHeader className='myborder'>
                    <Row><Col>Team Name : {post.registration.teamName}</Col></Row>
                    <Row>
                      <Col>Domain : {post.registration.domain}</Col>
                      <Col>Project Title : {post.registration.projectTitle}</Col>
                    </Row>
                  </CardHeader>
                  <CardBody className='border border-dark border-2'>
                    <CardText>
                      Problem Statement
                      <br />
                      <Input value={post.problemStatement} />
                    </CardText>
                    <CardText>
                      Problem Solution
                      <br />
                      <Input value={post.problemSolution}></Input>
                    </CardText>
                  </CardBody>
                  <CardFooter className='text-center myborder'>
                    <Button className='mybackc' onClick={toggle} style={{ backgroundColor: "#281E5D" }}>
                      Feedback
                    </Button>
                  </CardFooter>
                  <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Provide Feedback</ModalHeader>
                    <ModalBody>
                      <Row>

                        <Input
                          type="select"
                          defaultValue=" "
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option>  </option>
                          <option>
                            Accept
                          </option>
                          <option>
                            Revert
                          </option>
                          <option>
                            Reject
                          </option>
                        </Input>
                      </Row>
                      <br />
                      <Row>
                        <Input
                          name="problem statement"
                          placeholder="feedback for participants"
                          style={{ "height": "30vh" }}
                          type="textarea"
                          onChange={(e) => setFeedback(e.target.value)}
                          className={post.id}
                          required
                        />
                      </Row>
                    </ModalBody>
                    <ModalFooter >

                      <Button className="col-3 mx-auto" color="success" onClick={() => handleSubmit(status, ideas[idx].id)} >
                        Submit
                      </Button>{' '}

                    </ModalFooter>
                  </Modal>
                </Card>
              </>
            )
        })}

      </>
    )
}
