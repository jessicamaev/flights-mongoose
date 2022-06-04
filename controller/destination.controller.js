const Destination = require('../model/ticket.model')

function addNewDestinationForm(req, res) {
    Flightdestination.findById(req.params.id, function (err, flight) {
        res.render('flights/destinations', {
            title: 'add new destination',
            flight: flight
        });
    });
};

function newDestination(req, res) {
    Flightdestination.findById(req.params.id, function (err, flight) {
        flight.destinations.push(req.body);
        flight.save(function (err) {
            if (err)
                res.send(err);
            res.redirect('/flights/' + flight._id)
        });
    })

}

module.exports = {
    addNewDestinationForm,
    newDestination
}

