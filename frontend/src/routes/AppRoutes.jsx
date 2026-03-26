import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import SignUp from '../pages/auth/SignUp'
import AboutBus from '../pages/About/About'
import Buses from '../pages/Bus/Buses'
import Login from '../pages/auth/Login'
import Profile from '../pages/Profile/Profile'
import AddBusDetaiil from '../pages/Bus/AddBusDetaiil'
import BookSeat from '../pages/Bus/BookSeat'
import ViewSeats from '../pages/Bus/ViewSeats'

const AppRoutes = () => {
  return (
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
         <Route path="/about" element={<AboutBus />} />
        
        <Route path="/buses" element={<Buses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addbus" element={<AddBusDetaiil />} />
          <Route path="/book" element={<BookSeat/>} />
        <Route path="/buses/:id/seats" element={<ViewSeats />} />
      </Routes>

      
     
  )
}

export default AppRoutes