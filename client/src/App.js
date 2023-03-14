import './App.css';
// import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;