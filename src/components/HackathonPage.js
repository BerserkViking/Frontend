import {React,useState} from 'react'
import IncedoLogo from './views/incedo-logo.png'
import { Popover,PopoverBody,NavbarText, Navbar, Clock, NavbarBrand, Card, CardHeader, CardBody, CardText, Button, CardFooter, CardTitle } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import Car from './carousel'
import { EventPanel } from './eventPanel'
import { DomainCard } from './DomainCard'
import './style.css'
import logone from './Images/AI_ML_icon.png'

var member1 = "Dhruv";
var member2 = "Utkarsh";
var member3 = "Hardeep";
var possible_status = ["Approved", "Assigned", "Reverted", "Rejected"];
var panelist_assigned = "Shreeram Pokle"
let team_name = "Vikram Sarabhai"
export const HackathonPage = () => {
  const Navigate = useNavigate();
  const [trigger, setTrigger] = useState(false);

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
        <Button
          id="Popover1"
          type="button"
          className='btn'
          style={{ "backgroundColor": "#281E5D", "marginLeft": '0%' }}
          onMouseOver={() => setTrigger(true)}
          onMouseLeave={() => setTrigger(false)}
        >
          Domains
        </Button>
        <Popover
          flip
          isOpen={trigger}
          target="Popover1"
          toggle={trigger}
          placement="bottom"
        >
          <PopoverBody>
            <div className='container'>
           <div className='row'>
            <div className='col'>
             <img src={logone} alt="aiml-icon" className='img-fluid'/>
            </div>
            <div className='col'>
            Artificial Intelligence/Machine Learning
            </div>
           </div>
           </div>
          </PopoverBody>
        </Popover>
        {/* <div className="col-2">
        <iframe src="http://free.timeanddate.com/countdown/i8q978et/n1038/cf12/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cacfff/cpc000/pc281e5d/tcfff/fn3/fs100/szw320/szh135/tatRegistration%20Ends%20In/tacff6347/mpc000/iso2023-03-01T00:00:00" allowtransparency="true" frameborder="0" width="190" height="65"></iframe>

        </div> */}
        {/* for spacing */}
        <div className='col-3'></div>
        <Button onClick={() => Navigate('/login')} className="btn" style={{ "background-color": "tomato", "color": "#281E5D" }}>Login</Button>
        <Button onClick={() => Navigate('/registration-form')} className="btn" style={{ "background-color": "tomato", "color": "#281E5D" }}>Register</Button>
      </Navbar>




    </>
  )
}
