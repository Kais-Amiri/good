const mongoose = require("mongoose");
const appointment = require("../../models/appointment");

//----------------------- get all appointments ------------------------------

const getAllAppointments = async (req, res) => {
  const mySearchingKey = req.query.mySearchingKey;
  try {
    const allAppointments = await appointment.find({
      $or: [{ patient_Id: mySearchingKey }, { doctor_Id: mySearchingKey }],
    });
    res.status(200).json(allAppointments);
  } catch (error) {
    res.status(400).json(error_message);
  }
};

//------------------------ take an appointment ------------------------------

const addAppointment = async (req, res) => {
  try {
    const newAppointment = await new appointment({ ...req.body });
    await newAppointment.save();
    res.status(200).json({ message: "Appointment token with success !!!" });
  } catch (error) {
    res.status(400).json(error._message);
  }
};

//----------------------- update an appointement ----------------------------

const updateAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    const isValid = mongoose.Types.ObjectId.isValid(id);
    console.log(id, isValid);
    if (isValid) {
      const updatedAppointment = await appointment.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      );
      res.status(200).json(updatedAppointment);
    } else {
      res.status(400).json({ message: "you can't update this appointment" });
    }
  } catch (error) {
    res.status(400).json(error._message);
  }
};

//----------------------- delete an appointment -----------------------------

const deleteAppointment = async (req, res) => {
  try {
    const id = req.params.id;
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (isValid) {
      await appointment.findByIdAndDelete(id);
      res.status(200).json({ message: "Appointment deleted successfully !!!" });
    } else {
      res.status(400).json({ message: "You can't delete this appointment" });
    }
  } catch (error) {
    res.status(400).json(error._message);
  }
};

module.exports = {
  getAllAppointments,
  addAppointment,
  updateAppointment,
  deleteAppointment,
};
