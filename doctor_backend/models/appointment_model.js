const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  patientPhone: {
    type: String,
    required: true,
  },
  patientIssue: {
    type: String,
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  doctorName: {              
    type: String,
    required: true,
  },
  date: {
    type: String,           
    required: true,
  },
  time: {
    type: String,            
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Appointment", appointmentSchema, "appointment");
