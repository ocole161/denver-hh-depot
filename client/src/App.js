import './App.css';
// import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if(res.ok){
        res.json().then(user => 
          dispatch(login({
            username: user.username,
            user_type: "user"
          }))
        )
      } else {
        dispatch(logout())
      }
    })
  })

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