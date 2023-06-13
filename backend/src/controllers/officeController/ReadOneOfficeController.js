const OfficeManager = require('../../models/OfficeManager');

async function readOneOfficeController(req, res) {
    const {status, message} = await OfficeManager.fetchOneOffice(req.params.id);
    return res.status(status).json(message)
}

module.exports = readOneOfficeController;