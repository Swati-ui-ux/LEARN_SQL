import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const BookSeat = () => {
  const [formData, setFormData] = useState({
    busId: "",
    seatNumber: ""
  });
let navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:3000/book",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

        alert("Booking Successful 🚍");
        navigate("/buses")
      console.log(res.data);

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Booking Failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">
          Book Seat 🎟️
        </h2>

        {/* bus id */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Bus ID</label>
          <input
            type="number"
            name="busId"
            value={formData.busId}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

       {/* seat number */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Seat Number</label>
          <input
            type="number"
            name="seatNumber"
            value={formData.seatNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Book Now 🚍
        </button>
      </form>

    </div>
  );
};

export default BookSeat;