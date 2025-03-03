import React from 'react';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import Login from './Pages/Auth/Login.js';
// import Register from './Pages/Auth/Register.js';
// import Home from './Pages/Home/Home.js';

import Login from './pages/Auth/Login'; 
import Register from './pages/Auth/Register'; 
import Home from './pages/Home/Home'; // Remove "pages" in the path

import 'bootstrap/dist/css/bootstrap.min.css';
import SetAvatar from './pages/avatar/SetAvatar.js';


const App = () => {
  return (
    
      <div className="App" style={{backgroundColor:'grey'}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App