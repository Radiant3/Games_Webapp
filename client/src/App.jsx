import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import './pages.css'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './pages/home'
import  Game  from './pages/page1.jsx'
import  Page2 from './pages/page2.jsx'
import { Page3 } from './pages/page3'
import  Layout  from './pages/layout.jsx'


// import {
//     HasRouter, Routes, Route
// } from "react-router-dom";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

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
  // <Router>
  //     <Routes>
  //       <Route path="/" element={<Home/>}/>
  //     </Routes>
  // </Router>
}

export default App;
