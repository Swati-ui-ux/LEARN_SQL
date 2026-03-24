
const db = require("../utils/connection_db")
const Buses = require("../model/buses")
const postBusData = async(req, res) => {
    try {
        const { busNumber, availableSeats, totalSeats } = req.body
        console.log(totalSeats)
        const busDetail = await Buses.create({ busNumber, totalSeats, availableSeats })
        if (!busDetail) {
        resstatus(404).send("Bus detail not added")
        }
        res.status(200).json({message:"bus detail added",busDetail})
    } catch (error) {
        res.status(500).send("Error when add bus detail",error.message)
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

module.exports = {postBusData,getBusData}