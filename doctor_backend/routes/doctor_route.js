const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor_model");

router.get("/", async (req, res) => {
  console.log("GET /api/doctors hit");
  try {
    const doctors = await Doctor.find();
    console.log("Doctors fetched:", doctors.length);
    res.json(doctors);
  } catch (err) {
    console.error("Error fetching doctors:", err);
    res.status(500).json({ error: "Server Error" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});


router.post("/", async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) {
    console.error("Error adding doctor:", err);
    res.status(400).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Doctor.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Doctor not found" });
    res.json({ message: "Doctor deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
