const AppointmentManager = require('../../models/AppointmentManager');

async function createAppointmentController(req, res) {
    const {status, message} = await AppointmentManager.insertAppointment(req.body);
    
    return res.status(status).json(message)
}

module.exports = createAppointmentController;