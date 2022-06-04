const Flight = require('../model/flight.model');
const Ticket = require('../model/ticket.model');

async function index(req, res, next) {
    const allFlights = await Flight.find({})
    res.render('flights/index', { title: 'All Flights', flights: allFlights })
}

async function newFlight(req, res, next) {
    await res.render("flights/new", { title: 'Add Flights' });
}

async function create(req, res) {
    console.log(req.body)
    const flight = new Flight(req.body)
    await flight.save()
    res.redirect('/flights')
}

async function show(req, res) {
    console.log(req.params.id)
    const flight = await Flight.findById(req.params.id)
    res.render('flights/show', { title: 'Flight Details', flight })
}

async function update(req, res) {
    console.log(req.body)
    console.log(req.params)
    await Flight.updateOne({ _id: req.params.id }, { ...req.body })
    res.redirect(`flights/show/${req.params.id}`)
}

async function deleteFlight(req, res) {
    console.log(req.params.id)
    await Flight.deleteOne({ _id: req.params.id })
    res.redirect('/flights')
}


module.exports = {
    index,
    newFlight,
    create,
    show,
    update,
    deleteFlight
}