const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const doctorSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  specialty: { type: String, required: true, trim: true },
  university: { type: String, required: true, trim: true },
  // officeAdress: {
  //   street: { type: String, required: true, trim: true },
  //   city: { type: String, required: true, trim: true },
  //   country: { type: String, required: true, trim: true },
  // },
  hospital: { type: String, trim: true },
  department: { type: String, trim: true },
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

doctorSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const doctor = mongoose.model("doctors", doctorSchema);

module.exports = doctor;
