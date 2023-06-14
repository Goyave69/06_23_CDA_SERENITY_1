const express = require("express");
const doctorRouter = express.Router();
const createDoctorController = require("../controllers/doctorController/CreateDoctorController");
const readDoctorController = require("../controllers/doctorController/ReadDoctorController");
const readOneDoctorController = require("../controllers/doctorController/ReadOneDoctorController");
const updateDoctorController = require("../controllers/doctorController/UpdateDoctorController");
const deleteDoctorController = require("../controllers/doctorController/DeleteDoctorController");

//dont forget to check the sentences

/* POST : create a new Doctor. */
doctorRouter.post("/", createDoctorController);

/* GET : fetch all Doctors . */
doctorRouter.get("/", readDoctorController);

/* GET : fetch one Doctor . */
doctorRouter.get("/:id", readOneDoctorController);

/* PUT : update one Doctor . */
doctorRouter.put("/:id", updateDoctorController);

/* DELETE : delete one Doctor . */
doctorRouter.delete("/:id", deleteDoctorController);

module.exports = doctorRouter;
