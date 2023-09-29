import { Route, Routes } from 'react-router-dom';
import './App.css';
import Box from '@mui/material/Box';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import AuthPage from './components/AuthPage';
import Captured from './components/Captured';


function App() {
  return (
    <Box sx={{}}>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='captured' element={<Captured/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='authpage' element={<AuthPage/>} />
        {/* <Route path='/' element={<Homepage/>} /> */}

      </Routes>
      
    </Box>
  );
}

export default App;
