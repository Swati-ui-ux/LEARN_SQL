import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <section className="flex flex-col items-center justify-center text-center flex-1  px-4">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Travel{" "}
          <span className="text-red-600">
            <Typewriter
              words={["Safe", "Comfortable", "Affordable", "Fast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-gray-600 max-w-xl mb-6">
          Book bus tickets and travel across cities with comfort,
          safety, and reliability.
        </p>

        <Link className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition" to="/buses">
          Book Now 🚍
        </Link>
      </section>

    
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-8 text-red-600">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2 text-red-500">
              Easy Booking
            </h3>
            <p className="text-gray-600">
              Book your tickets in just a few clicks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2 text-red-500">
              Live Seats
            </h3>
            <p className="text-gray-600">
              Check real-time seat availability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2 text-red-500">
              Secure Payment
            </h3>
            <p className="text-gray-600">
              Fast and safe payment options.
            </p>
          </div>

        </div>
      </section>

      <footer className="bg-red-500 text-white text-center py-4">
        © 2026 BusBooking. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;