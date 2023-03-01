import { useNavigate, Route, Routes } from 'react-router-dom';

import { CustomRouter } from './components/CustomRouter.js'


function App() {
  const Navigate = useNavigate();
  return (
    <>
      <CustomRouter />   
    </>
  );
}

export default App;
