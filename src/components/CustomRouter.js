import {Routes,Route} from 'react-router-dom'
import  {HackathonPage}  from './HackathonPage'
import  LoginPage  from './LoginPage'
import { RegistrationFinal } from './RegistrationFinal'
import RegistrationForm from './RegistrationForm'
import { PanelistView } from './views/PanelistView'
import { ParticipantView } from './views/ParticipantView'
import { ViewAdmin } from './views/ViewAdmin'
import { RegisterMember } from './MemberRegistration'
export const CustomRouter = () => {
  return (
    <Routes>
    <Route path='/registration-form' element={<RegistrationForm/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='' element={<HackathonPage/>}></Route>
    <Route path='/participant-view' element={<ParticipantView/>}></Route>
    <Route path='/panelist-view' element={<PanelistView/>}></Route>
    <Route path='/admin' element={<ViewAdmin/>}></Route>
    <Route path='/register-feedback' element={<RegistrationFinal/>}></Route>
    <Route path='/register-member' element={<RegisterMember/>}></Route>
  </Routes>
  )
}
