import React from "react";

export default function About() {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold text-center mb-12 text-blue-700">
        ABOUT <span className="text-black">US</span>
      </h1>


      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="md:w-1/2 w-full">
          <img
            src="https://images.unsplash.com/photo-1580281657525-6d4b27f36c42?auto=format&fit=crop&w=800&q=80"
            alt="Doctors working"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            <strong>Prescripto</strong> is a modern healthcare appointment platform that simplifies the process of connecting patients with doctors. We aim to empower users to take control of their health by providing a seamless, transparent, and user-friendly booking experience.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            From primary care to specialists, Prescripto offers access to a wide network of qualified professionals. Our platform is secure, fast, and designed to save you time and effort by eliminating the hassle of traditional appointment booking methods.
          </p>
          <h3 className="text-md font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            To revolutionize healthcare accessibility by providing a digital bridge between patients and providers. We believe healthcare should be simple, timely, and accessible to all.
          </p>
        </div>
      </div>


      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">WHY CHOOSE US</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h4 className="text-lg font-semibold mb-2 text-blue-700">EFFICIENCY</h4>
          <p className="text-sm text-gray-700">
            Quick and seamless booking in just a few clicks — spend less time waiting and more time healing.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h4 className="text-lg font-semibold mb-2 text-blue-700">CONVENIENCE</h4>
          <p className="text-sm text-gray-700">
            Book appointments anytime, from anywhere, with 24/7 access to top-rated doctors.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h4 className="text-lg font-semibold mb-2 text-blue-700">PERSONALIZATION</h4>
          <p className="text-sm text-gray-700">
            Get custom appointment reminders and smart suggestions tailored to your health history.
          </p>
        </div>
      </div>


      <div className="mt-16 text-center">
        <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
          At Prescripto, we're committed to transforming healthcare through technology. Whether you're a first-time visitor or a returning patient, our goal is to make every interaction effortless, efficient, and effective.
        </p>
      </div>
    </div>
  );
}
