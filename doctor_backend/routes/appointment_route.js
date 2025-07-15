const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment_model");
const Doctor = require("../models/doctor_model");


router.post("/", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (err) {
    res.status(500).json({
      message: "Error saving appointment",
      error: err.message,
    });
  }
});


router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("doctorId");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({
      message: "Failed to get appointments",
      error: err.message,
    });
  }
});


router.get("/by-doctor-name/:name", async (req, res) => {
  try {
    const doctorName = decodeURIComponent(req.params.name).trim();
    const doctor = await Doctor.findOne({ name: doctorName });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const appointments = await Appointment.find({ doctorId: doctor._id }).populate("doctorId");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch appointments for doctor",
      error: err.message,
    });
  }
});

module.exports = router;
