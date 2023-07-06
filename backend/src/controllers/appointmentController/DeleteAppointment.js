const AppointmentManager = require('../../models/AppointmentManager');

async function deleteAppointmentController(req, res) {
    const {status, message} = await AppointmentManager.deleteAppointment(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = deleteAppointmentController;