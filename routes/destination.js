var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controller/destination.controller');


router.get('/flights/:id/destinations/addnew', destinationsCtrl.addNewDestinationForm);

router.post('/flights/:id/destinations', destinationsCtrl.newDestination);

module.exports = router;