const AppointmentManager = require('../../models/AppointmentManager');
const qs = require('qs')

async function readAppointmentController(req, res) {
    const {status, message} = Object.keys(req.query).length === 0 ? await AppointmentManager.fetchAppointment() : await AppointmentManager.fetchAppointmentBy(qs.parse(req.query));
    
    return res.status(status).json(message)
}

module.exports = readAppointmentController;