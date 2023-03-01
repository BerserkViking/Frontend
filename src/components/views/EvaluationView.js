import { React, useEffect, useState } from 'react'
import { render } from "react-dom";
import ReactStars from "react-rating-stars-component";
import IncedoLogo from './incedo-logo.png'
import { useNavigate } from 'react-router-dom'
import '../style.css'
import { Navbar, NavbarBrand, Button, Container, Row, Card, CardHeader, CardBody, Col, Spinner } from 'reactstrap'
import axios from 'axios'


let problem_statement = "This is the problem statement";
let problem_solution = "The Voyager program is an American scientific program that employs two robotic interstellar probes, Voyager 1 and Voyager 2. They were launched in 1977 to take advantage of a favorable alignment of Jupiter and Saturn, to fly near them while collecting data for transmission back to Earth. After launch the decision was taken to send Voyager 2 near Uranus and Neptune to collect data for transmission back to Earth.";
export const EvaluationView = () => {

  const Navigate = useNavigate();
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [details, setDetails] = useState(null);
  const [codeQuality, setCodeQuality] = useState(null);
  const [userInterface, setUserInterface] = useState(null);
  const [speed, setSpeed] = useState(null);
  const [usability, setUsability] = useState(null);
  const [button, setButton] = useState(false);
  useEffect(() => {
    axios.get(`http://15.206.136.106:443/api/scheduler/getProjectEvaluationSchedule`)
      .then(function (response) {
        setDetails(response.data);
        console.log(new Date(response.data.endTime).getTime() - new Date().getTime())
        if (new Date(response.data.endTime).getTime() - new Date().getTime() > 0)
          setTimeout(() => { Navigate(0) }, new Date(response.data.endTime).getTime() - new Date().getTime());
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSubmit = (teamName) => {
    setButton(!button);
    let average = ((codeQuality + speed + userInterface + usability) / 4);
    console.log(codeQuality);
    console.log(speed);
    console.log(userInterface);
    console.log(usability);
    console.log(average);
    axios.post(`http://15.206.136.106:443/api/judge/`, {
      teamName,
      codeQuality: codeQuality,
      speed: speed,
      userInterface: userInterface,
      usability: usability,
      average: average
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  let videoname, x;
  if (details && details.ideaSubmission.finalSubmission !== null) {
    videoname = details.ideaSubmission.finalSubmission
    x = details.ideaSubmission.registration.teamName
  }

  const src = `/Videos/${x}/${videoname}`

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
        <div className='col text-end'>
          <Button style={{ backgroundColor: "tomato" }} onClick={() => Navigate('/')}>Logout</Button>
        </div>
      </Navbar>
      {
        !details &&
        (<>
         <div className='text-center text-decoration-underline' style={{marginTop:"15%"}}>

          <h3 className='font-monospace fw-bold'>Evaluation Phase will begin Soon....  
            <Spinner
            color="dark"
            size="lg"
          >
            Loading...
          </Spinner></h3>
         </div>

        </>)
      }
      {details && (<><Container className='mx-auto col-7 mt-4 myborder mb-3' >
        <Container>
          <span className='text-center'>
            <h5 className='mt-3'>Team Details</h5>
          </span>
          <Row><Col>Team Name :{details && details.ideaSubmission.registration.teamName}</Col></Row>
          <Row>
            <Col>
              Project Title : {details && details.ideaSubmission.registration.projectTitle}
            </Col>
            <Col>Domain : {details && details.ideaSubmission.registration.domain}</Col>
          </Row>
        </Container>
        <br></br>
        <Card>
          <CardHeader>Problem Statement</CardHeader>
          <CardBody>
            {details && details.ideaSubmission.problemStatement}
          </CardBody>
        </Card>
        <br></br>
        <Card>
          <CardHeader>Problem Solution</CardHeader>
          <CardBody>
            {details && details.ideaSubmission.problemSolution}
          </CardBody>
        </Card>
        <video style={{ width: "70%", height: "45%", marginTop: "5%", marginLeft: "15%" }} controls>
          <source src={src} />
          Your browser does not support the video tag.
        </video>
        <div>
          <div className=' text-center ' style={{ marginTop: "5%" }} >
            <h3 className='font-monospace'>Ratings</h3>
            <div className='row '>
              <div className='col text-end'>
                Code Quality
              </div>
              <div className='col'></div>
              <div className='col'>
                <ReactStars
                  count={5}
                  onChange={setCodeQuality}
                  size={24}
                  activeColor="#ffd700">

                </ReactStars>
              </div>
            </div>
            <div className='row'>
              <div className='col text-end'>
                UI/UX
              </div>
              <div className='col'></div>
              <div className='col'>
                <ReactStars
                  count={5}
                  onChange={setUserInterface}
                  size={24}
                  activeColor="#ffd700">
                </ReactStars>
              </div>
            </div>
            <div className='row'>
              <div className='col text-end'>
                Speed
              </div>
              <div className='col'></div>
              <div className='col'>
                <ReactStars
                  count={5}
                  onChange={setSpeed}
                  size={24}
                  activeColor="#ffd700">
                </ReactStars>
              </div>
            </div>
            <div className='row'>
              <div className='col text-end'>
                Usability
              </div>
              <div className='col'></div>
              <div className='col'>
                <ReactStars
                  count={5}
                  onChange={setUsability}
                  size={24}
                  activeColor="#ffd700">
                </ReactStars>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center pb-3' style={{ marginTop: "5%" }}>
          <Button className='col-4'
            color="success"
            disabled={button}
            onClick={() => handleSubmit(details.ideaSubmission.registration.teamName)}
          >
            Submit
          </Button>
        </div>
      </Container></>)}
    </>
  )
}
