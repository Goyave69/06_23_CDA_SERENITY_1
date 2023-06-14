const AppointmentManager = require('../../models/AppointmentManager');

async function readOneAppointmentController(req, res) {
    const {status, message} = await AppointmentManager.fetchOneAppointment(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = readOneAppointmentController;