const express = require("express");
const {
  signupDoctor,
  signinDoctor,
  updateProfile,
} = require("../../controllers/doctorControllers/doctorControllers");

const Router = express.Router();

Router.post("/signup", signupDoctor);
Router.post("/signin", signinDoctor);
Router.put("/updateProfile/:id", updateProfile);

module.exports = Router;
