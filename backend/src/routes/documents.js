const express = require("express");
const router = express.Router();
const createDocumentsController = require("../controllers/documentsController/CreateDocumentsController");
const readDocumentsController = require("../controllers/documentsController/ReadDocumentsController");
const readOneDocumentsController = require("../controllers/documentsController/ReadOneDocumentsController");
const updateDocumentsController = require("../controllers/documentsController/UpdateDocumentsController");
const deleteDocumentsController = require("../controllers/documentsController/DeleteDocumentsController");


/* POST : create a new Doctor. */
router.post("/", createDocumentsController);

/* GET : fetch all Documents . */
router.get("/", readDocumentsController);

/* GET : fetch one Documents . */
router.get("/:id", readOneDocumentsController);

/* PUT : update one Documents . */
router.put("/:id", updateDocumentsController);

/* DELETE : delete one Documents . */
router.delete("/:id", deleteDocumentsController);

module.exports = router;
