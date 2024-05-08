import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import CategoryItems from './CategoryItems/CategoryItems'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Navbar/>} />
      <Route exact path="/Home" element={<Home/>} />
      <Route exact path='/Category' element={<CategoryItems/>} />
     </Routes>
    </Router>
  )
}

export default App

