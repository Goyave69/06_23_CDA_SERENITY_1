const OfficeManager = require('../../models/OfficeManager');

async function createOfficeController(req, res) {
    const {status, message} = await OfficeManager.insertOffice(req.body);
    
    return res.status(status).json(message)
}

module.exports = createOfficeController;