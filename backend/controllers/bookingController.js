const Booking = require("../models/booking")
const Buses = require("../models/buses")


const postBookingData = async (req, res) => {
  try {
    const { busId, seatNumber } = req.body;

    const userId = req.user.id; // 🔐 token se

    const bus = await Buses.findByPk(busId);

    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // ✅ seat limit check
    if (seatNumber > bus.totalSeats) {
      return res.status(400).json({ message: "Seat exceeds limit" });
    }

    // ❌ available seats check (IMPORTANT)
    if (bus.availableSeats <= 0) {
      return res.status(400).json({ message: "No seats available" });
    }

    // ✅ duplicate seat check
    const existingSeat = await Booking.findOne({
      where: { busId, seatNumber }
    });

    if (existingSeat) {
      return res.status(400).json({ message: "Seat already booked" });
    }

    // ✅ create booking
    const booking = await Booking.create({
      seatNumber,
      busId,
      UserId: userId
    });

    // 🔻 update available seats
    await bus.update({
      availableSeats: bus.availableSeats - 1
    });

    return res.status(201).json({
      message: "Seat booked successfully",
      booking
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in booking" });
  }
};


module.exports = postBookingData