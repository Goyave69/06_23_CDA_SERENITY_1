const InterventionManager = require('../../models/InterventionManager');

async function updateInterventionController(req, res) {
    const {status, message} = await InterventionManager.updateIntervention(req.params.id, req.body);
    
    return res.status(status).json(message)
}

module.exports = updateInterventionController; 