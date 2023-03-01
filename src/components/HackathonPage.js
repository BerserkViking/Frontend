import { React, useState } from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Popover,
  PopoverBody,
  Row,
} from "reactstrap";
import Countdown from 'react-countdown';

import { EventPanel } from "./eventPanel";
// import Footer from "./Footer.js";
import logone from "./Images/AI_ML_icon.png";
import logfour from "./Images/blockchain.png";
import logthree from "./Images/cybersecurity.png";
import logtwo from "./Images/web_development.png";
import image from "./Images/hackathon-image.png";
import firstprize from "./Images/first-prize.png";
import secondprize from "./Images/second-prize.png";
import thirdprize from "./Images/third-prize.png";
import rewards from './Images/rewards.jpg';

import IncedoLogo from "./views/incedo-logo.png";
import Car from "./car";

// var member1 = "Dhruv";
// var member2 = "Utkarsh";
// var member3 = "Hardeep";
// var possible_status = ["Approved", "Assigned", "Reverted", "Rejected"];
// var panelist_assigned = "Shreeram Pokle"
// let team_name = "Vikram Sarabhai"
export const HackathonPage = () => {
  const Navigate = useNavigate();
  const [trigger, setTrigger] = useState(false);
  const d = new Date("March 01, 2023 15:50:00");

  return (
    <>
      <Navbar className="my-2 fs-4 mybackgroundcolor" style={{ "margin": "0" }}>
        <div className="col-3">
          <NavbarBrand
            href="/"
            style={{ color: "tomato" }}
            className="font-monospace"
          >
            <img
              alt="logo"
              src={IncedoLogo}
              style={{
                width: "40%",
              }}
            />
          </NavbarBrand>
        </div>

        <div className="col-2">
          <Row>
            <Col>
              <Button
                onClick={() => Navigate("/login")}
                className="btn"
                style={{ "background-color": "tomato", color: "#281E5D" }}
              >
                Login
              </Button></Col>
            <Col>
              <Button
                onClick={() => Navigate("/registration-form")}
                className="btn"
                style={{ "background-color": "tomato", color: "#281E5D" }}
              >
                Register
              </Button>
            </Col>
          </Row>
        </div>
      </Navbar>
      
      <Container className="col-8 mx-auto myborder container fluid">
        <div className=" mx-auto" style={{ "padding": "3%" }}>
          <Car />
        </div>
        <Container>
          <Row>
            <Col>
              <div style={{ "padding": "4%" }}>
                <h4 className="font-monospace fw-bold">Overview</h4>

                A hackathon, also known as a codefest, is a social coding event
                that brings computer programmers and other interested people
                together to improve upon or build a new software program. The
                word hackathon is a portmanteau of the words hacker together to improve upon or build a new software program. The
                word hackathon is a portmanteau of the words hacker
              </div>
            </Col>
            <Col>
              <img src={image} alt="image" className="img-fluid" style={{ "padding": "2% 0% 2% 2%", marginLeft: "5%" }} />
            </Col>
          </Row>
          <Row className="text-center " style={{ padding: "4%" }}>
            <Button className="fs-5 btn btn-danger font-monospace" onClick={() => Navigate
              ('/registration-form')} >
              Registration Ends In :  <Countdown date={d} />
            </Button>
          </Row>
        </Container>
        <Container >
          <h4 className="font-monospace fw-bold"> Prizes</h4>
          <Row>
            {/* <img src={rewards}  alt="hackathon-prizes" style={{"padding":"0% 2% 2% 2%"}}/> */}
            <Col>

              <Card
              style={{border:"0px"}}
              >
                <img
                  alt="first Prize"
                  src={firstprize}
                  className="img-fluid col-4 mx-auto"
                />
                <CardBody className="text-center">
                  <CardTitle tag="h6">
                    <span className="font-monospace font-decoration-underline">1000$</span>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col>
            <Card
              style={{border:"0px"}}
              >
                <img
                  alt="first Prize"
                  src={secondprize}
                  className="img-fluid col-4 mx-auto"
                />
                <CardBody className="text-center">
                  <CardTitle tag="h6">
                    <span className="font-monospace font-decoration-underline">500$</span>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col>
            <Card
              style={{border:"0px"}}
              >
                <img
                  alt="first Prize"
                  src={thirdprize}
                  className="img-fluid col-4 mx-auto"
                />
                <CardBody className="text-center">
                  <CardTitle tag="h6">
                    <span className="font-monospace font-decoration-underline">250$</span>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <h4 className="font-monospace fw-bold"> Domains</h4>
          <Row>
            <Col >
              <img src={logone} alt="ai-ml-log" className="img-fluid col-2"></img>
              <span className="fst-italic">Artificial Intelligence and Machine Learning</span>
            </Col>
            <Col>
              <img src={logtwo} alt="ai-ml-log" className="img-fluid col-2"></img>
              <span className="fst-italic">Web Development</span>
            </Col>
          </Row>
          <Row>
            <Col >
              <img src={logthree} alt="ai-ml-log" className="img-fluid col-2"></img>
              <span className="fst-italic">Cybersecurity</span>
            </Col>
            <Col>
              <img src={logfour} alt="ai-ml-log" className="img-fluid col-2"></img>
              <span className="fst-italic">Blockchain</span>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Container style={{margin:"0% 0% 0% 0%"}}>
    <Footer />
      </Container> */}
    </>
  );
};
