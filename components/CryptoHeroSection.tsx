"use client";
import React, { useState } from "react";

// ✅ Define Props Type for Signup Form
interface SignupFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

// ✅ Signup Form Component
const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-96 space-y-4">
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-600 
                   transition duration-150"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-600 
                   transition duration-150"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white 
                   font-semibold py-4 rounded-lg transition duration-200 
                   shadow-md hover:shadow-lg focus:outline-none focus:ring-4 
                   focus:ring-indigo-500 focus:ring-opacity-70"
      >
        GET STARTED
      </button>
    </form>
  );
};




// ✅ Crypto Hero Section Component
const CryptoHeroSection: React.FC = () => {
  const handleFormSubmit = (data: { email: string; password: string }) => {
    console.log("Form Submission Attempted:", data);
    alert(`Signing up with: ${data.email}`);
  };



  return (
    <section className=" bg-[#1A183C] flex items-center justify-center p-6 sm:p-10">
      <div className="container mx-auto p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="text-white lg:w-1/2 space-y-6">
          <p className="text-xs font-bold tracking-widest uppercase text-indigo-400">
            WHY CHOOSE US
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Track your crypto portfolio the best way possible
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-lg">
            Stay on top of your assets with real-time analytics, secure tracking,
            and smart insights — all in one place.
          </p>
          {/* Features List */}
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start mt-[70px]">
          <SignupForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </section>
  );
};

export default CryptoHeroSection;
