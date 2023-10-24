import React from 'react'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Home from './components/home/Home'
import Example from './components/projects/src/example/Example';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/example" element={<Example/>} />
        {/* <Route path="/template-path" element={<Component/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
