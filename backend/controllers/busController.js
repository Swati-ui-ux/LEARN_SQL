
const db = require("../utils/connection_db")
const Buses = require("../models/buses")
const Booking = require("../models/booking")
const postBusData = async (req, res) => {
    try {
        const { busNumber, totalSeats } = req.body

        // ✅ calculate available seats automatically
        const availableSeats = totalSeats

        const busDetail = await Buses.create({
            busNumber,
            totalSeats,
            availableSeats
        })

        if (!busDetail) {
            return res.status(404).send("Bus detail not added")
        }

        res.status(201).json({
            message: "Bus detail added",
            busDetail
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Error when add bus detail",
            error: error.message
        })
    }
}

const getBusData = async(req, res) => {
    try {
        const busDetail = await Buses.findAll({})
        res.status(200).json(busDetail)
    } catch (error) {
        res.send("bus not found")
    }
}

const getBusWithId = async (req, res) => {
  const { id } = req.params;

  const bus = await Buses.findByPk(id);

  const bookings = await Booking.findAll({
    where: { busId: id }
  });

  const bookedSeats = bookings.map(b => b.seatNumber);

  res.json({
    bus,
    bookedSeats
  });
}
module.exports = {postBusData,getBusData,getBusWithId}