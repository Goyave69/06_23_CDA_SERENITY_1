const DocumentsManager = require("../../models/DocumentsManager");

async function updateDocumentsController(req, res) {
  const { status, message } = await DocumentsManager.updateDocument(
    req.params.id,
    req.body
  );

  return res.status(status).json(message);
}

module.exports = updateDocumentsController;
