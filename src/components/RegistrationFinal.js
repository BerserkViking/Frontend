import { Navbar, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'
import IncedoLogo from './incedo-logo.png'
export const RegistrationFinal = () => {
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
      <div className="text-center mx-auto col-6 border border-3 border dark" style={{ "marginTop": "15%" }}>
        Success You Have Successfully Registered<br />
        Head to the <Link to="/login" className='link-success'>login Page</Link>
      </div>
    </>
  )
}
