import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import TestPage from './pages/TestPages/TestPage';
import HomePage from './pages/BoardPages/HomePage';
import RecentPage from './pages/BoardPages/RecentPage';
import HotPage from './pages/BoardPages/HotPage';
import DetailPage from './pages/BoardPages/DetailPage';
import WritePage from './pages/BoardPages/WritePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>

        <Route path='/test' element={<TestPage/>}/>

        <Route path='/home' element={<HomePage/>}/>
        <Route path='/recent' element={<RecentPage/>}/>
        <Route path='/hot' element={<HotPage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/write' element={<WritePage/>}/>
        
      </Routes>
    </>
  );
}

export default App;
