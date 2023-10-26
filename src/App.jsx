import React from 'react'
import {
  HashRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Home from './components/home/Home'
import Linc from './components/projects/src/project/Linc';
import Me169 from './components/projects/src/project/Me169';
import Me72 from './components/projects/src/project/Me72';
import Lattice from './components/projects/src/project/Lattice';
import DataDriven from './components/projects/src/project/DataDriven';


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/linc" element={<Linc/>} />
        <Route path="/me169-hide-and-seek-mobile-robot" element={<Me169/>} />
        <Route path="/me72-engineering-design-competition" element={<Me72/>} />
        <Route path="/nasa-2021-big-idea-challenge-lattice" element={<Lattice/>} />
        <Route path="/data-driven-discovery-of-differentially-flat-coordinates" element={<DataDriven/>} />
        {/* <Route path="/template-path" element={<Component/>}/> */}
      </Routes>
    </HashRouter>
  )
}

export default App
