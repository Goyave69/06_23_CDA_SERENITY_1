const AdminFormManager = require('../../models/AdminFormManager');
const qs = require('qs')

async function readAdminFormController(req, res) {
    const {status, message} = Object.keys(req.query).length === 0 ? await AdminFormManager.fetchAdminForm() : await AdminFormManager.fetchAdminFormBy(qs.parse(req.query));
    
    return res.status(status).json(message)
}

module.exports = readAdminFormController;