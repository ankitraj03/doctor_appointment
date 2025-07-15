import React from "react";

export default function Contact() {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold text-center mb-12">
        CONTACT <span className="text-blue-600">US</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-12">

        <div className="md:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1588776814546-ec7aa5fa0f09?auto=format&fit=crop&w=800&q=80"
            alt="Contact Us"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>


        <div className="md:w-1/2 w-full space-y-8 text-sm text-gray-700">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-md font-semibold mb-2 text-blue-600">OUR OFFICE</h2>
            <p className="mb-1">Prescripto Headquarters</p>
            <p>1001 White Station Blvd<br />Suite 301, Washington, USA</p>
            <p className="mt-3">📞 <strong>Phone:</strong> +1 (555) 123-4567</p>
            <p>✉️ <strong>Email:</strong> prescripto.team@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-md font-semibold mb-2 text-blue-600">CAREERS AT PRESCRIPTO</h2>
            <p className="mb-3">
              We're on a mission to make healthcare accessible and seamless. Join our growing team and help us shape the future of digital health.
            </p>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
              Explore Job Openings
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-md font-semibold mb-2 text-blue-600">SUPPORT</h2>
            <p>Need help or have questions? Our support team is here to assist you 24/7.</p>
            <p className="mt-2">📧 <strong>Support Email:</strong> support@prescripto.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
