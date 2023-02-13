import { useNavigate, Route,Routes} from 'react-router-dom';
import { HackathonPage } from './components/HackathonPage';
import { LoginPage } from './components/LoginPage';
import { RegistrationFinal } from './components/RegistrationFinal';
import RegistrationForm from './components/RegistrationForm';
import { TeamMembers } from './components/TeamMembers';
import { EvaluationView } from './components/views/EvaluationView';
import { Leaderboard } from './components/views/Leaderboard';
import { PanelistView } from './components/views/PanelistView';
import { ParticipantView } from './components/views/ParticipantView';

function App() {
 const Navigate=useNavigate();
  return (
    <>
    {/* <ParticipantView/> */}
    {/* <LoginPage/> */}
    {/* <PanelistView/> */}
     {/* <RegistrationForm/>  */}
     {/* <Leaderboard/> */}
     <EvaluationView/>
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