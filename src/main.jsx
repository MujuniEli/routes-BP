import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Vans from './pages/Vans.jsx'
import VanDetails from './pages/VanDetails'
import Layout from './components/Layout'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import Dashboard from './pages/Host/Dashboard'
import Hostlayout from './components/Hostlayout'
import HostVans from './pages/Host/HostVans'
import HostVanDetails from './pages/Host/HostVanDetails'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans />}/>
          <Route path='vans/:id' element={<VanDetails />}/>
          
              <Route path='host' element={<Hostlayout />}>
                <Route index element={<Dashboard />}/>
                <Route path='reviews' element={<Reviews />}/>
                <Route path='income' element={<Income />}/>
                <Route path='vans' element={<HostVans />}/>
                <Route path='vans/:id' element={<HostVanDetails />}> 
                  <Route path='pricing' element={<HostVanPricing />}/>
                  <Route path='photos' element={<HostVanPhotos />}/>
                </Route>
              </Route>
      </Route>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
)
