import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Nav from './components/Nav.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
      <Nav />
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/about' element={<About />}/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
)
