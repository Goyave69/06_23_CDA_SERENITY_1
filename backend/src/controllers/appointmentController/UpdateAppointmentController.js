const AppointmentManager = require('../../models/AppointmentManager');

async function updateAppointmentController(req, res) {
    const {status, message} = await AppointmentManager.updateAppointment(req.params.id, req.body);
    
    return res.status(status).json(message)
}

module.exports = updateAppointmentController; 