const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient_Id: { type: String, required: true },
  doctor_Id: { type: String, required: true },
  timeAndDate: { type: String },
  confirmation: {
    patientConfirmation: { type: Boolean, required: true },
    doctorConfirmation: { type: Boolean, required: true },
  },
});

const appointment = new mongoose.model("appointments", appointmentSchema);

module.exports = appointment;
