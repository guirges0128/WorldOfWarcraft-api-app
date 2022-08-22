import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Class from './Class';
import Talents from './Talents';
import SharedLayout from './SharedLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/class/' element={<Class/>}/>
          <Route path='/talents/' element={<Talents/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
