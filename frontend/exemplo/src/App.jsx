import { useState } from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <Router>
	  <Route path="/" element={<Home/>} />
	  <Route path="/about" element={<About/>} />
      </Router>
    </BrowserRouter>
  )
}

export default App
