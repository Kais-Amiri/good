const express = require("express");
const {
  getAllAppointments,
  addAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../../controllers/appointmentControllers/appointmentControllers");

const Router = express.Router();

Router.get("/allAppointments", getAllAppointments);
Router.post("/addAppointment", addAppointment);
Router.put("/updateAppointment/:id", updateAppointment);
Router.delete("/deleteAppointment/:id", deleteAppointment);

module.exports = Router;
