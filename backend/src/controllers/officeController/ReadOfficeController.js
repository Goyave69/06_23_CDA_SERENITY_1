const OfficeManager = require('../../models/OfficeManager');
const qs = require('qs')

async function readUserController(req, res) {
    const {status, message} = Object.keys(req.query).length === 0 ? await OfficeManager.fetchOffice() : await OfficeManager.fetchOfficeBy(qs.parse(req.query));
    
    return res.status(status).json(message)
}

module.exports = readUserController;