const express = require('express');
const router = express.Router();
const createAppointmentController = require('../controllers/AppointmentController/CreateAppointmentController')
const readAppointmentController = require('../controllers/AppointmentController/ReadAppointmentController')
const readOneAppointmentController = require('../controllers/AppointmentController/ReadOneAppointment')
const updateAppointmentController = require('../controllers/AppointmentController/UpdateAppointmentController')
const deleteAppointmentController = require('../controllers/AppointmentController/DeleteAppointment');

/* POST : create a new Appointment. */
router.post('/', createAppointmentController)

/* GET : fetch all Appointments . */
router.get('/', readAppointmentController)

/* GET : fetch one Appointment . */
router.get('/:id', readOneAppointmentController)

/* PUT : update one Appointment . */
router.put('/:id', updateAppointmentController)

/* DELETE : delete one Appointment . */
router.delete('/:id', deleteAppointmentController)

module.exports = router;