import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [filter, setFilter] = useState("");
  const { specialty } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        if (specialty) setFilter(decodeURIComponent(specialty));
      })
      .catch((err) => console.error("Failed to fetch doctors:", err));
  }, [specialty]);

  const specialities = [...new Set(doctors.map((d) => d.specialization))];
  const filteredDoctors = filter
    ? doctors.filter((d) => d.specialization === filter)
    : doctors;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Browse through the doctors specialist</h2>
        <div className="flex flex-wrap gap-2">
          {specialities.map((spec) => (
            <button
              key={spec}
              onClick={() => setFilter(spec)}
              className={`px-4 py-1 border rounded text-sm ${
                filter === spec ? "bg-blue-600 text-white" : "bg-white text-blue-600 border-blue-600"
              }`}
            >
              {spec}
            </button>
          ))}
          {filter && (
            <button
              onClick={() => setFilter("")}
              className="px-4 py-1 text-sm bg-gray-200 rounded"
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctors.map((doc) => (
          <div key={doc._id} className="bg-white border p-4 rounded shadow hover:shadow-lg text-center">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-md font-semibold">{doc.name}</h3>
            <p className="text-sm text-gray-500">{doc.specialization}</p>
            {doc.available && (
              <span className="inline-block mt-2 text-green-500 text-xs">● Available</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
