import React from 'react'
import Navbar from './pages/Navbar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='m-0 p-0'>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App