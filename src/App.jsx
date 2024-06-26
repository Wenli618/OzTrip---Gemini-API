
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'


import Home from './pages/Home'
import Destinations from './pages/Destinations'
import MyTrips from './pages/MyTrips'
import NotFound from './pages/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css'
import TripPlan from './pages/TripPlan'



function App() {
 
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className='mainContainer'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/destinations' element={<Destinations />} />
            <Route path='/trip-plan' element={<TripPlan />} />
            <Route path='/mytrips' element={<MyTrips />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        
        <Footer />
      </div> 
    </BrowserRouter>
  )
}

export default App
