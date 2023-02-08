import { useNavigate, Route,Routes} from 'react-router-dom';
import { RegistrationFinal } from './components/RegistrationFinal';
import RegistrationForm from './RegistrationForm';
import { TeamMembers } from './TeamMembers';

function App() {
 const Navigate=useNavigate();
  return (
    <>
    <div className="App">
      Incedo-Hackathon
      <button onClick={()=>Navigate('/registration-form')}>Register</button>
    </div>

    <Routes>
      <Route path='/registration-form' element={<RegistrationForm/>}>form</Route>
      <Route path='/team-members' element={<TeamMembers/>}></Route>
      <Route path='/register-final' element={<RegistrationFinal/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
