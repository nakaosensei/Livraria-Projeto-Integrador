import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Autor from './pages/Autor/Autor.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
	  <Route path="/" element={<Home/>} />
	  <Route path="/about" element={<About/>} />
	  <Route path="/autor" element={<Autor/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
