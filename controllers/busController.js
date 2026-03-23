
const db = require("../utils/connection_db")

const postBusData = (req, res) => {
    const { busNumber, availableSeats, totalSeats } = req.body
    const insertQuery = `INSERT INTO buses (busNumber,totalSeats,availableSeats) VALUES ('${busNumber}','${totalSeats}','${availableSeats}')`
    db.execute(insertQuery, [busNumber, totalSeats, availableSeats], (err) => {
        if (err) {
            console.log("Error when insert into buses", err.message)
            res.send(500).send("error when insert into bus")
            db.end();
            return;
        }
    
res.status(200).send("bus posted successfully")
    })
}


const getBusData = (req, res) => {
    const getBusDataQuery = `SELECT * FROM buses WHERE availableSeats > 10`
    db.execute(getBusDataQuery, (err,result) => {
        if (err) {
            console.log("Error when get bus data", err.message)
            res.status(500).send("error when get bus data")
            db.end()
            return;
        }
        console.log("All bus data", result)
     
        
        res.status(200).json(result)
        
    })
}

module.exports = {postBusData,getBusData}