import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/BoardPages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
