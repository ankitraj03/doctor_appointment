const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  qualification: String,
  description: String,
  appointmentFee: Number,
  available: Boolean,
});

module.exports = mongoose.model("Doctor", doctorSchema, "doctor_list");
