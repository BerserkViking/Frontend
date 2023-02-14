import IncedoLogo from './views/incedo-logo.png'
import {FormGroup, Navbar,NavbarBrand,Label,Input,Form,Button} from 'reactstrap'
import {Link} from 'react-router-dom'

let target="";
const LoginPage = () => {
    const view_toggler = (event) =>{
        console.log(event.target.value);
        if(event.target.value==="Participant")
        target="/participant-view";
        else
        target="/panelist-view"
    }
    return (
       <>
       <Navbar
        className="my-2 fs-4"
        style={{ "background-color": "#281E5D" }}
        Row
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
        <Form className='col-2  mx-auto '>
            <FormGroup>
                <Label>
                    Team-Name/Username
                </Label>
                <Input placeholder='Username'/>
            </FormGroup>
            <FormGroup>
                <Label>
                    Password
                </Label>
                <Input placeholder='Password'/>
            </FormGroup>
            <FormGroup>
                <Label className='text-start'>Participant</Label>
                <Input name="radio1"type="radio" value='Participant' onChange={view_toggler}/>
                <Label style={{"margin-left":"15%"}}>Organizer</Label>
                <Input name="radio1" type="radio" value='Organizer' onChange={view_toggler}/>
            </FormGroup>
            <Link to={target} class="btn btn-success mx-auto">Login</Link>
        </Form>
        
       </>
    )
}
export default LoginPage;