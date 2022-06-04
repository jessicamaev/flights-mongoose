const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//destinationSchema

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]
    },
    arrival: {
        type: Date,
    }
})

//Flight Model

const FlightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"]
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,

    },
    departs: {
        type: Date,
        //One year from date created
        default: new Date().getFullYear() + 1
    },

    destinations: [destinationSchema]

})


module.exports = mongoose.model('Flights', FlightSchema)