import React from "react";

const AboutBus = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="bg-gray-100 flex flex-col items-center justify-center text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Your Journey, Our Responsibility 🚍
        </h2>
        <p className="text-gray-600 max-w-xl">
          We provide safe, comfortable, and affordable bus travel across cities.
          Book your tickets easily and travel hassle-free.
        </p>
      </section>

     
      <section className="py-12 px-6 md:px-20">
        <h3 className="text-2xl font-bold text-center mb-6">About Us</h3>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Our Bus Booking system is designed to simplify your travel experience.
          We connect passengers with reliable bus operators, offering real-time
          seat availability, easy booking, and secure payments.
        </p>
      </section>

      
      <section className="bg-gray-50 py-12 px-6 md:px-20">
        <h3 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h3>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">Easy Booking</h4>
            <p className="text-gray-600">
              Book your bus tickets in just a few clicks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">Real-Time Seats</h4>
            <p className="text-gray-600">
              Check live seat availability instantly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-lg mb-2">Secure Payments</h4>
            <p className="text-gray-600">
              Safe and fast payment options for users.
            </p>
          </div>

        </div>
      </section>

     
      <footer className="bg-red-600 text-white text-center py-4 mt-auto">
        <p>© 2026 BusBooking. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default AboutBus;