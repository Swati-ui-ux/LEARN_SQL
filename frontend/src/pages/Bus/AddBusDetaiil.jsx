import React, { useState } from 'react'
import axios from "axios"
import { toast ,ToastContainer} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddBusDetaiil = () => {
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    busNumber: "",
    totalSeats: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
   try {
     e.preventDefault()
    console.log("Bus Data:", formData)
    axios.post("http://localhost:3000/buses/add", formData)
    toast.success("Bus added successfully🚍")
    navigate("/")
   } catch (error) {
    console.log("Error when post bus detail",error)
   }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Add Bus Details
        </h2>

       
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Bus Number
          </label>
          <input
                      type="text"
                      required
            name="busNumber"
            placeholder="Enter bus number"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Total Seats
          </label>
                  <input
                      required
            type="number"
            name="totalSeats"
            placeholder="Enter total seats"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

    

        <button
          type="submit"
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Bus
        </button>

          </form>
          <ToastContainer/>
    </div>
  )
}

export default AddBusDetaiil