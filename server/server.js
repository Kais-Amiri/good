const express = require("express");
const connectToDb = require("./config/connectToDb");
require("dotenv").config({ path: "./config/.env" });
const patientRoutes = require("./routes/patientRoutes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes/appointmentRoutes");

const app = express();
const port = process.env.port || 8080;

app.use(express.json());

//-------------patient routes ----------------------------------
app.use("/patient", patientRoutes);

//--------------- doctor routes ---------------------------------
app.use("/doctor", doctorRoutes);

//----------------appointment routes --------------------------
app.use("/appointment", appointmentRoutes);

//---------------- connection to mongoDb ------------------------
connectToDb();
//-------------- listening to the app ---------------------------
app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`app listening on port ${port}`);
  }
});
