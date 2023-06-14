const DocumentsManager = require("../../models/DocumentsManager");

async function createDocumentsController(req, res) {
  const { status, message } = await DocumentsManager.insertDocument(req.body);

  return res.status(status).json(message);
}

module.exports = createDocumentsController;
