const mongoose = require("mongoose");
const patient = require("../../models/patient");
const doctor = require("../../models/doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//--------------------------patient signup --------------------------------------
const signupPatient = async (req, res) => {
  try {
    const newPatient = await new patient({ ...req.body });
    const isExist = await patient.findOne({ email: newPatient.email });
    if (!isExist) {
      await newPatient.save();
      res
        .status(200)
        .json({ message: "your account created successfully ...!!!" });
    } else {
      res
        .status(400)
        .json({ message: "E-mail already exist, please try an other e-mail" });
    }
  } catch (error) {
    res.status(400).json({ error: error._message });
  }
};

//----------------- patient signin ---------------------------------------------

const signinPatient = async (req, res) => {
  try {
    const { email, password } = req.body;
    const patientInfo = await patient.findOne(
      { email },
      "firstname lastname email password"
    );

    if (!patientInfo)
      return res.status(400).json({ message: "bad credentials" });
    const isMatchPassword = await bcrypt.compare(
      password,
      patientInfo.password
    );

    if (!isMatchPassword)
      return res.status(400).json({ message: "bad credentials" });

    const payload = {
      id: patientInfo._id,
      firstname: patientInfo.firstname,
      lastname: patientInfo.lastname,
    };

    const token = await jwt.sign(payload, process.env.secretOrPrivateKey);
    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    res.status(400).json(error._message);
  }
};

//------------------------patient update informations ----------------------------

const updateProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const infoUpdated = { ...req.body };
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (isValid) {
      const response = await patient.findByIdAndUpdate(
        { _id: id },
        { $set: infoUpdated },
        { new: true }
      );
      res.status(200).json(response);
    } else {
      res
        .status(400)
        .json({ message: "You can't update your informations ...!!!" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "You can't update your informations ...!!!" });
  }
};

//------------------- get all doctors ---------------------------------

const getAllDoctors = async (req, res) => {
  try {
    const allDoctors = await doctor
      .find()
      .select(" firstname lastname specialty hospital");
    res.status(200).json(allDoctors);
  } catch (error) {
    res.status(400).json(error._message);
  }
};

//---------------------- get one doctors informations -------------------

const getOneDoctorInfo = async (req, res) => {
  try {
    const id = req.params.id;
    const isValid = mongoose.Types.ObjectId.isValid(id);

    if (isValid) {
      const doctorInfo = await doctor.findById({ _id: id }).select("-password");
      res.status(200).json(doctorInfo);
    } else {
      res.status(400).json({
        message: "you can not get the profile of this doctor ... !!!",
      });
    }
  } catch (error) {
    res.status(400).json(error._message);
  }
};
//------------------- get doctor by specialty ---------------------------------
const getDoctorsBySpecialty = async (req, res) => {
  try {
    const searchingKey = { ...req.body }.key;
    const wordSearching = { ...req.body }.searchingWord;
    const query = {
      [`${searchingKey}`]: { $regex: `${wordSearching}`, $options: "i" },
    };

    const searchResult = await doctor.find(query);
    res.status(200).json(searchResult);
  } catch (error) {
    res.status(400).json(error._message);
  }
};

module.exports = {
  signupPatient,
  signinPatient,
  updateProfile,
  getAllDoctors,
  getOneDoctorInfo,
  getDoctorsBySpecialty,
};
