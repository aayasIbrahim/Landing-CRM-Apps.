import React from "react";

// === Type Definitions ===
interface RegisterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Sample country list (you can expand)
const countries = ["United States", "Canada", "United Kingdom", "Australia", "Bangladesh"];

const RegisterDrawer: React.FC<RegisterDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* === Drawer Panel === */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Register Now</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 space-y-6">
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name */}
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Full Name
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Email */}
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Email Address
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Mobile Number */}
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Mobile Number
              <input
                type="tel"
                placeholder="+880 1234 567890"
                className="mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Country Dropdown */}
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Country
              <select
                className="mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-3 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
            >
              Register
            </button>
          </form>

          {/* Optional Info List */}
          <ul className="text-xs text-gray-500 mt-4 space-y-1">
            <li>✅ Get updates about new Data</li>
            <li>✅ Exclusive offers for members</li>
            <li>✅ Access to premium content</li>
          </ul>
        </div>
      </div>

      {/* === Overlay (Click to Close) === */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0  bg-opacity-30 backdrop-blur-sm z-40"
        ></div>
      )}
    </>
  );
};

export default RegisterDrawer;
