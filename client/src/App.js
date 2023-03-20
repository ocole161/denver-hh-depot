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
import SpecialEdit from './components/SpecialEdit';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { logout } from './features/userSlice';
import { setSpecials } from './features/specialsSlice';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from "react-redux"
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null)
  const specials = useSelector((state) => state.specials);
  const user = useSelector((state) => state.user);
  
  const neighborhoods = [
    "Arvada", 
    "Aurora", 
    "Broomfield", 
    "Cap Hill", 
    "Central Downtown", 
    "Cherry Creek", 
    "DTC", 
    "East Colfax", 
    "Five Points", 
    "Golden", 
    "Hilands", 
    "Lakewood", 
    "Littleton", 
    "LoDo", 
    "LoHi", 
    "North Denver", 
    "Northfield", 
    "Parker",
    "RiNo",
    "Santa Fe", 
    "South Broadway", 
    "Thornton", 
    "University", 
    "Uptown", 
    "Wash Park", 
    "West Denver", 
    "Westminster", 
    "Wheat Ridge"
  ]
  const times = [ '12:30 AM', '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM',  '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM',  '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM',  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',  '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM', '12:00 AM']


  useEffect(() => {
    fetch("/specials")
    .then(res => res.json())
    .then(data => {
        dispatch(setSpecials(data))
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
              id: user.id,
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

  function updateSpecial(updatedSpecial) {
    const updatedSpecials = specials.map((special) => {
      if (special.id === updatedSpecial.id) {
        return updatedSpecial }
      else {
        return special }
    })
    dispatch(setSpecials(updatedSpecials))
  }

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
            <Route path="/admin" element={<Admin onUpdateSpecial={updateSpecial}/>} />
            <Route path="/specials/:id" element={<SpecialView />} />
            <Route path="/specials/create" element={<CreateNewSpecial neighborhoods={neighborhoods} times={times} />} />
            <Route path="/specials/edit/:id" element={<SpecialEdit neighborhoods={neighborhoods} times={times} onUpdateSpecial={updateSpecial} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;