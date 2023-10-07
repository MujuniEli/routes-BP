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
import Vans, { Loader as vansLoader } from './pages/Vans.jsx'
import Login, { Loader as logInLoader} from './pages/Login.jsx'
import NotFound from './pages/NotFound'
import VanDetails, { Loader as vanDetailLoader } from './pages/VanDetails'
import Layout from './components/Layout'
import Error from './components/Error'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import Dashboard from './pages/Host/Dashboard'
import HostLayout from './components/Hostlayout'
import HostVans, { Loader as hostVansLoader} from './pages/Host/HostVans'
import HostVanDetails, {Loader as hostVanDetailLoader} from './pages/Host/HostVanDetails'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanInfo from './pages/Host/HostVanInfo'
import {requireAuth}  from './utils'



const router = createBrowserRouter(createRoutesFromElements(
      
  <Route path='/' element={<Layout />}>
  <Route index element={<Home />}/>
  <Route path='about' element={<About />}/>
  <Route 
  path='vans' 
  element={<Vans />} 
  loader={vansLoader}
  errorElement={<Error />}
  />
  <Route 
  path='login' 
  element={<Login />}
  loader={logInLoader}
  />
  <Route path='vans/:id' loader={vanDetailLoader} element={<VanDetails />}/>
  
      <Route path="host" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
        loader={async () => {
          return await requireAuth()
        }}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetails />}
        loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          loader={async () => {
            return null
          }}
        />
      </Route>
    </Route>
      <Route path='*' element={<NotFound />}/>
</Route>

))


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
      <RouterProvider router={router} />
    
  </React.StrictMode>
  
)
