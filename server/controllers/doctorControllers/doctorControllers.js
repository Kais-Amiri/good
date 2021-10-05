const mongoose = require("mongoose");
const doctor = require("../../models/doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//-------------------- signup doctor --------------------------------------------
const signupDoctor = async (req, res) => {
  try {
    const newDoctor = await new doctor({ ...req.body });
    const isExist = await doctor.findOne({ email: newDoctor.email });
    if (!isExist) {
      await newDoctor.save();
      res.status(200).json({ message: "Your are signup successfully ...!!!" });
    } else {
      res.status(400).json({
        message: "E-mail already exist, please try an other e-mail ...!!!",
      });
    }
  } catch (error) {
    res.status(400).json(error._message);
  }
};

//------------------ signin doctor -------------------------------------
const signinDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctorInfo = await doctor.findOne(
      { email },
      "firstname lastname email password"
    );
    if (!doctorInfo)
      return res.status(400).json({ message: "bad credentials" });
    const isMatchPassword = await bcrypt.compare(password, doctorInfo.password);
    if (!isMatchPassword)
      return res.status(400).json({ message: "bad credentials" });

    const payload = {
      id: doctorInfo._id,
      firstname: doctorInfo.firstname,
      lastname: doctorInfo.lastname,
    };

    const token = await jwt.sign(payload, process.env.secretOrPrivateKey);
    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    res.status(400).json(error._message);
  }
};

//--------------------- update doctor profile -----------------------------------------
const updateProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (isValid) {
      const infoUpdated = await doctor.findByIdAndUpdate(
        id,
        { $set: { ...req.body } },
        { new: true }
      );
      res.status(200).json(infoUpdated);
    } else {
      res.status(400).json({ message: "You can't update your profile" });
    }
  } catch (error) {
    res.status(400).json(error._message);
  }
};

module.exports = { signupDoctor, signinDoctor, updateProfile };
