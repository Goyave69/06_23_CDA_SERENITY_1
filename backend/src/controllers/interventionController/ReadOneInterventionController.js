const InterventionManager = require('../../models/InterventionManager');

async function readOneInterventionController(req, res) {
    const {status, message} = await InterventionManager.fetchOneIntervention(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = readOneInterventionController;