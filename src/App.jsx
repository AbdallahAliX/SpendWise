import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Components/Content/Home/Home';
import Settings from '../Components/Content/Settings/Settings';
import AddExpense from '../Components/Content/Add Expense/AddExpense';
import './App.css';
import Navbar from '../Components/Header/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='content-body'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addExpense" element={<AddExpense />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;