import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, 
          createBrowserRouter, 
          RouterProvider, 
          createRoutesFromElements, 
        } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Vans, { Loader } from './pages/Vans.jsx'
import NotFound from './pages/NotFound'
import VanDetails from './pages/VanDetails'
import Layout from './components/Layout'
import Error from './components/Error'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import Dashboard from './pages/Host/Dashboard'
import Hostlayout from './components/Hostlayout'
import HostVans from './pages/Host/HostVans'
import HostVanDetails from './pages/Host/HostVanDetails'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanInfo from './pages/Host/HostVanInfo'




const router = createBrowserRouter(createRoutesFromElements(
      
  <Route path='/' element={<Layout />}>
  <Route index element={<Home />}/>
  <Route path='about' element={<About />}/>
  <Route path='vans' 
  element={<Vans />} 
  loader={Loader}
  errorElement={<Error />}
  />
  <Route path='vans/:id' element={<VanDetails />}/>
  
      <Route path='host' element={<Hostlayout />}>
        <Route index element={<Dashboard />}/>
        <Route path='reviews' element={<Reviews />}/>
        <Route path='income' element={<Income />}/>
        <Route path='vans' element={<HostVans />}/>
        <Route path='vans/:id' element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />}/> 
          <Route path='pricing' element={<HostVanPricing />}/>
          <Route path='photos' element={<HostVanPhotos />}/>
        </Route>
      </Route>
      <Route path='*' element={<NotFound />}/>
</Route>

))


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
      <RouterProvider router={router} />
    
  </React.StrictMode>
  ,
)
