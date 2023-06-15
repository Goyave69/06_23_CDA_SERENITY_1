const AdminFormManager = require('../../models/AdminFormManager');

async function createAdminFormController(req, res) {
    const {status, message} = await AdminFormManager.insertAdminForm(req.body);
    
    return res.status(status).json(message)
}

module.exports = createAdminFormController;