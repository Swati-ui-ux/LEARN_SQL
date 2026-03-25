const Booking = require("../models/booking")


const postBookingData = async (req, res) => {
   
    try {
        const booking = await Booking.create(req.seatNumber)
        
        if(!booking) res.status(404).json({message:"error when add seat number"})
        res.status(201).json({message:"bus number add",booking})
    } catch (error) {
        res.send(error)
    }
}
module.exports = postBookingData