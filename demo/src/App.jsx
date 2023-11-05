import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { Dashboard } from './components/Dashboard';

function App() {
  return(
    <>
      <header>
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
      </header>
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App;

