import { React, useState, useEffect } from 'react'
import { Navbar, NavbarBrand, Button, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Container, ButtonGroup, NavItem, NavLink, Row, Col, Nav, Table } from 'reactstrap'
import IncedoLogo from './incedo-logo.png'
import '../style.css'
import AdminComponent from './AdminComponent.js'
import { Link } from 'react-router-dom'
import axios from 'axios'
export const ViewAdmin = () => {
  const [showpanelist, setShowpanelist] = useState(false)
  const [showparticipant, setShowParticpant] = useState(false)
  const [showjudge, setShowJudge] = useState(false);
  const [panelists, setPanelists] = useState(null);
  const [teams, setTeams] = useState(null);
  const [judges, setJudges] = useState(null);

  const handleEvaluation = () => {
    axios.post("http://15.206.136.106:443/api/scheduler/startHackathon")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);

      });
  }
  const handleSevaluation = () => {
    axios.post("http://15.206.136.106:443/api/schedule/taskdef")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  useEffect(() => {
    axios.get('http://15.206.136.106:443/api/admin/ShowPanelistDetails')
      .then(function (response) {
        console.log(response.data);
        setPanelists(response.data);
      })
      .catch(function (error) {
        console.log(error);

      })
    axios.get('http://15.206.136.106:443/api/admin/ShowPartcipantDetails')
      .then(function (response) {
        console.log(response.data);
        setTeams(response.data);
      })
      .catch(function (error) {
        console.log(error);

      })
    axios.get('http://15.206.136.106:443/api/admin/ShowJudgeDetails')
      .then(function (response) {
        console.log(response.data);
        setJudges(response.data);
      })
      .catch(function (error) {
        console.log(error);

      })
  }, []);

  const displayJudge = () => {
    setShowJudge(true);
    setShowParticpant(false);
    setShowpanelist(false);
  }
  const displayPanelist = () => {
    setShowJudge(false);
    setShowParticpant(false);
    setShowpanelist(true);
  }
  const displayParticipant = () => {
    setShowJudge(false);
    setShowParticpant(true);
    setShowpanelist(false);
  }

  // let props1={
  //   details:panelists,
  //   url:"http://15.206.136.106:443/api/admin/AddPanelistDetails"   
  // }
  // let props2={
  //   details:judges,
  //   url:"http://15.206.136.106:443/api/admin/AddJudgeDetails"  
  // }
  // let prop3={

  // }

  const forPanelist = () => {
    if (showpanelist)
      return (
        <>
          <AdminComponent details={panelists} url="http://15.206.136.106:443/api/admin/AddPanelistDetails" />
        </>
      )
  }
  const forJudges = () => {
    if (showjudge)
      return (
        <>
          <AdminComponent details={judges} url="http://15.206.136.106:443/api/admin/AddJudgeDetails" />
        </>
      )
  }

  const forParticipant = () => {
    if (showparticipant)
      return (
        <>
        <Container className='mx-auto col-10 mt-3'>

          <Table bordered striped className='border border-dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>teamname</th>
                <th>password</th>
                <th>domain</th> 
                <th>status</th>
                <th>project title</th> 
              </tr>
            </thead>
            <tbody>
            {teams && teams.map((post, idx) => {
              return (
                <>
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{post.registration.teamName}</td>
                    <td>{post.registration.password}</td>
                    <td>{post.registration.domain}</td>
                    <td>{post.status}</td>
                    <td>{post.registration.projectTitle}</td>
                  </tr>
                </>
              )
            })}
            </tbody>

          </Table>
        </Container>
        </>
      )
  }

  return (
    <>
      <Navbar
        className="my-2 fs-4"
        style={{ "background-color": "#281E5D" }}
      >
        <NavbarBrand href="/" style={{ "color": "tomato" }}>
          <img
            alt="logo"
            src={IncedoLogo}
            style={{
              "width": "50%"
            }}
          />
        </NavbarBrand>
        <Row className='me-auto font-monospace  '>
          <Col ><Link className="text-decoration-none fs-6" style={{ "color": "tomato" }} onClick={() => { displayParticipant() }}>Teams</Link></Col>
          <Col ><Link className="text-decoration-none fs-6" style={{ "color": "tomato" }} onClick={() => { displayPanelist() }}>Panelist</Link></Col>
          <Col ><Link className="text-decoration-none fs-6" style={{ "color": "tomato" }} onClick={() => { displayJudge() }}>Judges</Link></Col>
           
        </Row>
        
        <Col className='text-end'>
              <Button style={{ backgroundColor: "tomato" }}>LogOut</Button>
            </Col>
      </Navbar>
      <Container className='mx-auto col-10'>
        <Row className='text-center'>
        <Col>
        <Button style={{ backgroundColor: "#281E5D" }} onClick={handleSevaluation}>Scheduleprojects</Button>
        </Col>
        <Col>
        <Button style={{ backgroundColor: "#281E5D" }} onClick={handleEvaluation}>Start Evaluation</Button>
        </Col>
        </Row>
        {forPanelist()} 
        {forParticipant()}
        {forJudges()}
      </Container>
    </>
  )
}



