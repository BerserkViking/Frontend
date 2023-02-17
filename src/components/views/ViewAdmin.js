import React from 'react'
import { Navbar, NavbarBrand, Button ,DropdownToggle,DropdownMenu,DropdownItem,UncontrolledDropdown} from 'reactstrap'
import IncedoLogo from './incedo-logo.png'
export const ViewAdmin = () => {
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
        
        <UncontrolledDropdown >
          <DropdownToggle>
            <div style={{color:"white", marginLeft:"0%"}}>Teams</div>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Team Details</DropdownItem>
            <DropdownItem>Problem Idea</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
       
        <Button>Panelists</Button>
        <Button>Judges</Button> 
      </Navbar>
    </>
  )
}



