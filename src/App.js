import logo from './logo.svg';
import './App.css';
import Addition from './components/Addition';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Subtraction from './components/Subtraction';
import Multiplication from './components/Multiplication';
import Division from './components/Division';
import VotingEligibility from './components/VotingEligibility';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addition />} />
        <Route path='/subtract' element={<Subtraction />} />
        <Route path='/mul' element={<Multiplication />} />
        <Route path='/div' element={<Division />} />
        <Route path='/el' element={<VotingEligibility />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
