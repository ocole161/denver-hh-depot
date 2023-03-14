import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
    <Routes>
          <Route path="/testing" element={<h1>Test Route</h1> } />
          <Route path="/" element={<h1>Page Count: {count}</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
    </Routes>
    </div>
  );
}

export default App;