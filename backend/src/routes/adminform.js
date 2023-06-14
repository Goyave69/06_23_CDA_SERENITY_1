const express = require("express");
const router = express.Router();
const createAdminFormController = require("../controllers/adminfromController/CreateAdminFormController");
const readAdminFormController = require("../controllers/adminfromController/ReadAdminFormController");
const readOneAdminFormController = require("../controllers/adminfromController/ReadOneAdminFormController");
const updateAdminFormController = require("../controllers/adminfromController/UpdateAdmainFormController");
const deleteAdminFormController = require("../controllers/adminfromController/DeleteAdminFormController");

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