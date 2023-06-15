const DocumentsManager = require("../../models/DocumentsManager");
const qs = require("qs");

async function readDocumentsController(req, res) {
  const { status, message } =
    Object.keys(req.query).length === 0
      ? await DocumentsManager.fetchDocument()
      : await DocumentsManager.fetchDocumentsBy(qs.parse(req.query));

  return res.status(status).json(message);
}

module.exports = readDocumentsController;
