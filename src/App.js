import { useNavigate, Route,Routes} from 'react-router-dom';
import { HackathonPage } from './components/HackathonPage';
import { RegistrationFinal } from './components/RegistrationFinal';
import RegistrationForm from './components/RegistrationForm';
import { TeamMembers } from './components/TeamMembers';

function App() {
 const Navigate=useNavigate();
  return (
    <>
    <HackathonPage/>
    <Routes>
      <Route path='/registration-form' element={<RegistrationForm/>}></Route>
      <Route path='/team-members' element={<TeamMembers/>}></Route>
      <Route path='/register-final' element={<RegistrationFinal/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
{/* <div className="App">
      Incedo-Hackathon
      <button type='submit'  onClick={()=>Navigate('/registration-form')}>
        Register
      </button>
    </div>
     */}