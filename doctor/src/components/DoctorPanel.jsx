import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DoctorPanel() {
  const { name } = useParams(); // Get doctor name from URL
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/api/appointments");
        const filtered = res.data.filter(
          (appt) =>
            appt.doctorId?.name?.toLowerCase().trim() ===
            decodeURIComponent(name).toLowerCase().trim()
        );
        setAppointments(filtered);
      } catch (err) {
        console.error("Error fetching appointments:", err);
        alert("Failed to fetch appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [name]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Appointments for Dr. {decodeURIComponent(name)}
      </h2>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading appointments...</p>
      ) : appointments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appt) => (
            <div
              key={appt._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {appt.patientName}
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium text-gray-800">Phone:</span> {appt.patientPhone}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium text-gray-800">Issue:</span> {appt.patientIssue}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium text-gray-800">Date:</span> {appt.date}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium text-gray-800">Time:</span> {appt.time}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No appointments found.</p>
      )}
    </div>
  );
}
