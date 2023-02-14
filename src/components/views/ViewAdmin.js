import React from 'react'
import {Navbar,NavbarBrand,Button} from 'reactstrap'
export const ViewAdmin = () => {
  return (
    <>
    <Navbar
        className="my-2 fs-4"
        style={{ "background-color": "#281E5D" }}
      >
        <NavbarBrand href="/" style={{ "color": "tomato" }} className="font-monospace">
          Incedo Hack-a-thon
        </NavbarBrand>
        <Button
    
          style={{"background-color":"tomato"}}
        >
          Log Out
        </Button>
      </Navbar>
    </>
  )
}
