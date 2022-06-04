const Ticket = require('../model/ticket.model')


async function createNewTicket(req, res) {
    console.log(req.body)
    const flight = new Ticket(req.body)
    await flight.save()
    res.redirect('/flights/:id')
}

async function newTicketForm(req, res) {
    const flightId = req.params.id
    await res.render('tickets/new', { title: 'New Ticket', flightId })
}


module.exports = {
    newTicketForm,
    createNewTicket
}