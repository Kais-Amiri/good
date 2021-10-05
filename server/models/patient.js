const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const patientSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  age: { type: Number, required: true, trim: true },
  // adress: {
  //   houseNumber: { type: Number, trim: true },
  //   street: { type: String, required: true, trim: true },
  //   city: { type: String, required: true, trim: true },
  //   country: { type: String, required: true, trim: true },
  // },
  email: {
    type: String,
    validate: [isEmail],
    required: true,
    trim: true,
    lowercase: true,
  },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true, trim: true },
  appointment: [],
});

patientSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const patient = mongoose.model("patients", patientSchema);

module.exports = patient;
