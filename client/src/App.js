import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Admin from './components/Admin';
import SpecialView from './components/SpecialView';
import CreateNewSpecial from './components/CreateNewSpecial';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { logout } from './features/userSlice';
import { createSpecials } from './features/specialsSlice';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from "react-redux"
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null)
  const specials = useSelector((state) => state.specials);
  const user = useSelector((state) => state.user);
  
  useEffect(() => {
    fetch("/specials")
    .then(res => res.json())
    .then(data => {
        dispatch(createSpecials(data))
    })
}, [dispatch])

  useEffect(() => {
    fetch('/authorized')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          if(user){
            dispatch(login({
              username: user.username,
              user_type: user.user_type,
            }))
          }else {
            dispatch(logout());
          }
      })
      } else {
        res.json().then(json => setErrors(json.error))
      }
    })
  },[dispatch])

  if (specials[0] === undefined || user.username === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } 

  return (
    <BrowserRouter>
      <NavBar />
      {errors ? <Alert variant="warning" >{errors}</Alert> : null}
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/specials/:id" element={<SpecialView />} />
            <Route path="/specials/create" element={<CreateNewSpecial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;