import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import Nav from './components/Nav.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Vans from './pages/Vans.jsx'
import VanDetails from './pages/VanDetails'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
      <Nav />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/vans' element={<Vans />}/>
    <Route path='/vans/:id' element={<VanDetails />}/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
)
