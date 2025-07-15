import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Appointment() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("04:30 pm");

  const [showModal, setShowModal] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientIssue, setPatientIssue] = useState("");
  const [patientPhone, setPatientPhone] = useState("");

  useEffect(() => {
    axios.get(`https://doctor-appointment-qn6q.onrender.com/api/doctors/${id}`)
      .then((res) => setDoctor(res.data))
      .catch((err) => console.error("Failed to fetch doctor:", err));
  }, [id]);

  const times = ["04:30 pm", "07:00 pm", "03:30 pm", "08:00 pm", "06:00 pm", "03:00 pm"];

  const getWeekDates = () => {
    const today = new Date();
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      weekDates.push({
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate(),
        full: date
      });
    }
    return weekDates;
  };

  const weekDates = getWeekDates();

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      patientName,
      patientPhone,
      patientIssue,
      doctorId: doctor._id,
      doctorName: doctor.name, 
      date: selectedDate,
      time: selectedTime
    };

    try {
      await axios.post("https://doctor-appointment-qn6q.onrender.com/api/appointments", payload);
      alert("Appointment booked successfully!");
      setShowModal(false);
      setPatientName("");
      setPatientPhone("");
      setPatientIssue("");
    } catch (err) {
      console.error("Error booking appointment:", err);
      alert("Failed to book appointment.");
    }
  };

  if (!doctor) return <div className="p-6">Loading doctor information...</div>;

  return (
    <div className="px-6 md:px-20 py-10 font-sans">
      {/* Doctor Info */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 object-cover rounded-md"
        />
        <div>
          <h2 className="text-xl font-bold">
            {doctor.name} <span className="text-blue-600">✔</span>
          </h2>
          <p className="text-sm text-gray-600">{doctor.qualification} - {doctor.specialization}</p>
          <p className="mt-2 text-sm text-gray-700">{doctor.description}</p>
          <p className="mt-2 text-sm font-semibold">
            Appointment Fee: <span className="text-black">₹{doctor.appointmentFee}</span>
          </p>
        </div>
      </div>

      {/* Booking slots */}
      <div className="mt-10">
        <h3 className="font-semibold mb-4">Booking slots</h3>

        <div className="flex flex-wrap gap-3 mb-4">
          {weekDates.map(({ day, date, full }, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full border ${selectedDate === full.toDateString() ? "bg-blue-600 text-white" : "bg-white text-black"}`}
              onClick={() => setSelectedDate(full.toDateString())}
            >
              {day} <br /> {date}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {times.map((time, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full border ${selectedTime === time ? "bg-blue-600 text-white" : "bg-white text-black"}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            if (!selectedDate) return alert("Please select a date.");
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Book an appointment
        </button>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Enter Patient Details</h2>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Patient Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                className="w-full border px-4 py-2 rounded"
                required
              />
              <textarea
                placeholder="Describe your issue"
                value={patientIssue}
                onChange={(e) => setPatientIssue(e.target.value)}
                className="w-full border px-4 py-2 rounded"
                rows={3}
                required
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
