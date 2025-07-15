import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error("Error fetching doctors:", err.message));
  }, []);

  const handleSpecialtyClick = (spec) => {
    navigate(`/doctors/${encodeURIComponent(spec)}`);
  };

  return (
    <div className="font-sans">

      <section className="bg-blue-500 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Book Appointment <br /> With Trusted Doctors
          </h1>
          <p className="mt-4 text-sm">
            Browse our verified list of doctors & book your consultation in minutes.
          </p>
          <Link to="/doctors">
            <button className="cursor-pointer mt-6 bg-white text-blue-600 font-semibold px-4 py-2 rounded shadow">
              Book Appointment
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Doctors"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Find by Specialty</h2>
        <div className="flex flex-wrap justify-center gap-6 ">
          {[
            { name: "General Physician", icon: "🩺" },
            { name: "Gynecologist", icon: "👩‍⚕️" },
            { name: "Dermatologist", icon: "💊" },
            { name: "Pediatrician", icon: "👶" },
            { name: "Neurologist", icon: "🧠" },
            { name: "Gastroenterologist", icon: "🍽️" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handleSpecialtyClick(item.name)}
              className="cursor-pointer w-40 p-4 bg-gray-100 rounded shadow hover:shadow-lg text-center"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-sm font-semibold">{item.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Top Doctors Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Top Doctors to Book</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {doctors.map((doc) => (
            <Link
              to={`/appointment/${doc._id}`}
              key={doc._id}
              className="bg-white w-60 p-4 rounded shadow hover:shadow-lg text-center transform transition hover:scale-105"
            >
              <img
                src={doc.image || "https://via.placeholder.com/100"}
                alt={doc.name || "Doctor"}
                className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-md font-semibold">{doc.name}</h3>
              <p className="text-sm text-gray-500">{doc.specialization}</p>
              {doc.available && (
                <span className="inline-block mt-2 text-green-500 text-xs">● Available</span>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        &copy; 2025 Prescripto. All rights reserved.
      </footer>
    </div>
  );
}
