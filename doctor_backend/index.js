const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const doctorRoutes = require("./routes/doctor_route");
const appointmentRoutes = require("./routes/appointment_route")

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

const MONGO_URL = "mongodb+srv://arsinha1406:rO3uUBYb8kKfMdRb@cluster0.vquufad.mongodb.net/doctor?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);


app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});
