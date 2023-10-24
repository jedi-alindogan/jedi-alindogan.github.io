import React from 'react'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Home from './components/home/Home'
import Project from './components/projects/src/project/Project';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/linc" element={<Project/>} />
        <Route path="/me169-search-and-rescue-robot" element={<Project/>} />
        <Route path="/me72-engineering-design-competition" element={<Project/>} />
        <Route path="/nasa-2021-big-idea-challenge-lattice" element={<Project/>} />
        <Route path="/data-driven-discovery-of-differentially-flat-coordinates" element={<Project/>} />
        <Route path="/prm-for-high-dof-arms" element={<Project/>} />
        <Route path="/stewart-platform-catching-simulation" element={<Project/>} />
        {/* <Route path="/template-path" element={<Component/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
