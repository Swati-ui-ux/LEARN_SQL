import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewSeats = () => {
  const { id } = useParams(); // 👈 busId

    console.log("Bus id ",id)
  const [bus, setBus] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/buses/${id}`);
        
        setBus(res.data.bus);
        setBookedSeats(res.data.bookedSeats);

      } catch (error) {
        console.log(error);
      }
    };

    fetchSeats();
  }, [id]);

  if (!bus) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Bus {bus.busNumber} Seats
      </h2>

      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {[...Array(bus.totalSeats)].map((_, index) => {
          const seatNo = index + 1;

          const isBooked = bookedSeats.includes(seatNo);

          return (
            <div
              key={seatNo}
              className={`p-4 text-center rounded-lg text-white ${
                isBooked ? "bg-blue-500" : "bg-green-500"
              }`}
            >
              {seatNo}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewSeats;