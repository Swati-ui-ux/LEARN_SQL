import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const Buses = () => {
  const [allBuses, setAllBuses] = useState([])

  useEffect(() => {
    const getBuses = async () => {
      const buses = await axios.get("http://localhost:3000/buses")
      setAllBuses(buses.data)
    }
    getBuses()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
          <div className="flex justify-center mt-4 mb-6">
  <Link
    to="/addbus"
    className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600 transition duration-200"
  >
    Add Bus
  </Link>
</div>
          
    
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        🚌 Available Buses
      </h1>

    
      {allBuses.length === 0 ? (
        <p className="text-center text-gray-500">No buses available</p>
      ) : (
        
       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {allBuses.map((bus) => (
              
            <div
              key={bus.id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                Bus #{bus.busNumber}
              </h2>

              <p className="text-gray-700">
                🚪 Total Seats: <span className="font-medium">{bus.totalSeats}</span>
              </p>

              <p className="text-gray-700">
                🟢 Available:{" "}
                <span className="font-medium text-green-600">
                  {bus.availableSeats}
                </span>
              </p>

              <p className="text-gray-700">
                🔴 Booked:{" "}
                <span className="font-medium text-red-500">
                  {bus.totalSeats - bus.availableSeats}
                </span>
                              </p>
                              <div className='flex justify-between'>
                              <Link to='/book' className=" mt-4  bg-green-500 text-white py-2  px-4 rounded-lg hover:bg-green-600 transition ">Book seat</Link>
                              
                  <Link
                    to={`${bus.id}/seats`}
                    className=" mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-center"
                  >
                    View Seats
                  </Link>
                              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Buses