const InterventionManager = require('../../models/InterventionManager');

async function deleteInterventionController(req, res) {
    const {status, message} = await InterventionManager.deleteIntervention(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = deleteInterventionController;