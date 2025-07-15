import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("doctor");
  const navigate = useNavigate();

  const handleLogin = () => {
    const trimmedName = name.trim();


    if (
      role === "admin" &&
      trimmedName.toLowerCase() === "super admin" &&
      password === "Admin123"
    ) {
      navigate("/admin/dashboard");


    } else if (role === "doctor" && password === "doc123") {
      const encodedName = encodeURIComponent(trimmedName);
      navigate(`/doctor-panel/${encodedName}`);


    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin Login</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="mb-3 p-2 border w-full"
      >
        <option value="doctor">Doctor</option>
        <option value="admin">Super Admin</option>
      </select>

      <input
        type="text"
        placeholder={role === "admin" ? "Super Admin" : "Doctor Name"}
        className="mb-3 p-2 border w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-3 p-2 border w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white w-full p-2 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
