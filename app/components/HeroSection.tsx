"use client"; // if using Next 13 app directory

import React, { useState } from "react";
import Image from "next/image";
// import dashboardImage from "@/public/dashboard.png"; // replace with your image path

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: send email to backend or API
  };

  return (
    <section className="bg-black py-16 ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-4 md:px-8">
        {/* === Text Content === */}
        <div className="flex-1 space-y-6">
          <p className="text-white font-semibold">Product Growth Solution in Single Platform</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-500">
            Managing business payments has never been easier
          </h1>
          <p className="text-gray-300 text-lg">
            Never at water me might. On formed merits hunted unable merely by mr whence or. Possession
            the unpleasing simplicity her uncommonly.
          </p>

          {/* === Email Signup Form === */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Register using email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-gray-300 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>

          {/* === Features List === */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <span className="text-green-500 text-xl">✔️</span> Free Register
            </div>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <span className="text-green-500 text-xl">✔️</span> Great Service
            </div>
          </div>
        </div>

        {/* === Image === */}
        <div className="flex-1 relative w-full h-80 md:h-[600px]">
          <Image
            src="/Group 1000000795.png"
            alt="Dashboard with charts and data"
            className="object-contain"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
