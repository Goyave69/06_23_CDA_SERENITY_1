const PatientManager = require('../../models/PatientManager');

async function updatePatientController(req, res) {
    const {status, message} = await PatientManager.updatePatient(req.params.id, req.body);
    
    return res.status(status).json(message)
}

module.exports = updatePatientController; 