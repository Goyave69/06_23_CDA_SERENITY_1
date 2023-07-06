const PatientManager = require('../../models/PatientManager');

async function deletePatientController(req, res) {
    const {status, message} = await PatientManager.deletePatient(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = deletePatientController;