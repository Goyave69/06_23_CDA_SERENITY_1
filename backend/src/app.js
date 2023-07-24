const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const userRouter = require("./routes/users");
const appointmentRouter = require("./routes/appointments");
const officeRouter = require("./routes/offices");
const doctorRouter = require("./routes/doctors");
const interventionRouter = require("./routes/interventions");
const adminformRouter = require("./routes/adminform");
const documentsRouter = require("./routes/documents");
const patientsRouter = require("./routes/patient");

const authRouter = require("./routes/auth");

const uploads = "public/uploads/";

const upload = multer({ dest: uploads });

const app = express();
app.use("/static", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));


const isLogin = (req, res) => {
  if (
    req.body.email === "melbel@wcs.fr" &&
    req.body.password === "123456"
  ) {
    res.send("Credentials are valid");
  } else {
    res.sendStatus(401);
  }
};

// API routes
app.use("/users", userRouter);
app.use("/appointments", appointmentRouter);
app.use("/offices", officeRouter);
app.use("/doctors", doctorRouter);
app.use("/interventions", interventionRouter);
app.use("/adminforms", adminformRouter);
app.use("/documents", documentsRouter);
app.use("/patients", patientsRouter);
app.post("/upload_files", upload.single("files"), uploadFiles);
app.post("/login", isLogin);

app.get("/list_uploads", listUploads);

app.use("/authentication", authRouter);

function uploadFiles(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully uploaded files" });
}

function listUploads(req, res) {
  fs.readdir(uploads, (err, files) => {
    let response = { files: files };
    return res.status(201).json(response);

    /*files.forEach(file => {
      console.log(file);
    });*/
  });
}

// Redirect all requests to the REACT app
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;
