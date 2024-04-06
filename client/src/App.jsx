import { useState } from 'react'
import './App.css'
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './pages/home'
import  Game  from './pages/page1.jsx'
import  Page2 from './pages/page2.jsx'
import { Page3 } from './pages/page3'
import  Layout  from './pages/layout.jsx'


export function App(){
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="Game" element={<Game/>}/> 
        <Route path="Page2" element={<Page2/>}/> 
      </Route>
    </Routes>
  );

}

export default App;
