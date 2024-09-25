import React,{ useref } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import homepage from './pages/HomePage';

function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Routes>
    
      <Route path="/" element={<homepage/>} />
    </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
