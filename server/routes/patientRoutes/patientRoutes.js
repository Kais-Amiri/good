const express = require("express");
const {
  signupPatient,
  signinPatient,
  updateProfile,
  getAllDoctors,
  getOneDoctorInfo,
  getDoctorsBySpecialty,
} = require("../../controllers/patientControllers/patientControllers");
const isAuth = require("../../middlewares/passportSetup");
const patient = require("../../models/patient");

const Router = express.Router();

Router.post("/signup", signupPatient);
Router.post("/signin", signinPatient);
Router.put("/updateProfile/:id", updateProfile);
Router.get("/allDoctors", getAllDoctors);
Router.get("/oneDoctor/:id", getOneDoctorInfo);
Router.get("/doctorBySpecialty", getDoctorsBySpecialty);
Router.get("/currentUser", isAuth(), (req, res) => {
  res.send("good");
});

module.exports = Router;
