var express = require('express');
var router = express.Router();

const flightCtrl = require('../controller/flight.controller')

/* GET home page. */

router.get('/', flightCtrl.index);
router.get('/new', flightCtrl.newFlight);
router.post('/new', flightCtrl.create);
router.get('/:id', flightCtrl.show);
router.put('/view/:id', flightCtrl.update);
router.delete('/:id', flightCtrl.deleteFlight)



module.exports = router;

// module.exports = {
//   index,
//   newFlight,
//   create,
//   show,
//   update,
//   deleteFlight
// }