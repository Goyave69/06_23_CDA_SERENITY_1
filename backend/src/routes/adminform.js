const express = require("express");
const router = express.Router();
const createAdminFormController = require("../controllers/adminformController/CreateAdminFormController");
const readAdminFormController = require("../controllers/adminformController/ReadAdminFormController");
const readOneAdminFormController = require("../controllers/adminformController/ReadOneAdminFormController");
const updateAdminFormController = require("../controllers/adminformController/UpdateAdmainFormController");
const deleteAdminFormController = require("../controllers/adminformController/DeleteAdminFormController");

/* POST : create a new user. */
router.post("/", createAdminFormController);

/* GET : fetch all users . */
router.get("/", readAdminFormController);

/* GET : fetch one user . */
router.get("/:id", readOneAdminFormController);

/* PUT : update one user . */
router.put("/:id", updateAdminFormController);

/* DELETE : delete one user . */
router.delete("/:id", deleteAdminFormController);

module.exports = router