import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import Dashboard from './components/Dashboard';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" component={Dashboard} />
      <Route path="/homepage" component={HomePage} />
    </Routes>
  </Router>
);

export default App;
