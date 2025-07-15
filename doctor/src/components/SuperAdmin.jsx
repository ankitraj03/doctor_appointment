import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SuperAdmin() {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    specialization: "",
    qualification: "",
    description: "",
    appointmentFee: "",
  });

  const fetchDoctors = async () => {
    try {
      const res = await axios.get("https://doctor-appointment-qn6q.onrender.com/api/doctors");
      setDoctors(res.data);
    } catch (err) {
      console.error("Error fetching doctors:", err);
      alert("Failed to fetch doctors");
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://doctor-appointment-qn6q.onrender.com/api/doctors", formData);
      setFormData({
        name: "",
        email: "",
        image: "",
        specialization: "",
        qualification: "",
        description: "",
        appointmentFee: "",
      });
      fetchDoctors();
      alert("Doctor added successfully");
    } catch (err) {
      console.error("Error adding doctor:", err);
      alert("Failed to add doctor");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this doctor?")) return;
    try {
      await axios.delete(`https://doctor-appointment-qn6q.onrender.com/api/doctors/${id}`);
      fetchDoctors();
    } catch (err) {
      console.error("Error deleting doctor:", err);
      alert("Failed to delete doctor");
    }
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Super Admin Panel</h2>


      <form
        onSubmit={handleAddDoctor}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto"
      >
        <input name="name" placeholder="Doctor Name" value={formData.name} onChange={handleChange} required className="border p-2 rounded" />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="border p-2 rounded" />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required className="border p-2 rounded" />
        <input name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} required className="border p-2 rounded" />
        <input name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} required className="border p-2 rounded" />
        <input name="appointmentFee" placeholder="Appointment Fee" type="number" value={formData.appointmentFee} onChange={handleChange} required className="border p-2 rounded" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required className="border p-2 rounded col-span-1 md:col-span-2" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded col-span-1 md:col-span-2">
          ➕ Add Doctor
        </button>
      </form>


      <h3 className="text-2xl font-semibold mb-6 text-center">All Registered Doctors</h3>
      {doctors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div key={doc._id} className="border rounded-lg p-5 bg-white shadow-md flex flex-col items-center text-center">
              <img src={doc.image} alt={doc.name} className="w-24 h-24 rounded-full object-cover mb-3 border" />
              <h4 className="font-bold text-lg text-blue-700">{doc.name}</h4>
              <p className="text-sm text-gray-600">{doc.specialization}</p>
              <p className="text-sm text-gray-500">{doc.qualification}</p>
              <p className="text-sm text-gray-500 mt-1">{doc.email}</p>
              <p className="text-sm font-semibold mt-2 text-black">₹{doc.appointmentFee}</p>
              <p className="text-xs text-gray-500 mt-1 px-2">{doc.description}</p>
              <button
                onClick={() => handleDelete(doc._id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                🗑 Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">No doctors found.</p>
      )}
    </div>
  );
}
