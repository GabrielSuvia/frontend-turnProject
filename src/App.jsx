//import { useState } from 'react'
import React from 'react';
import './App.css';
import Register from './views/Register';
import Login from './views/Login';
import { Routes,Route } from 'react-router-dom';
import Home from './views/home.jsx';
import Navbar from './components/Navbar.jsx';
import MisTurno from './views/misTurnos.jsx';
import  CreateTurnForm  from './components/CreateTurnForm.jsx';
import styles from './components/Navbar.module.css';
//import { Counters } from './counterRedux/Counter.jsx';
import Footer from './views/footer.jsx';

function App() {
  
  return ( <div className={styles.containerMain}>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/MisTurnos" element={<MisTurno/>}/>
    <Route path="/createTurn" element={<CreateTurnForm/>}/>
  </Routes>
  <Footer/>
    </div>)
}

export default App
