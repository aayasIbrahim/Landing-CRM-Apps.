"use client";

import Image from "next/image";
import React from "react";

const PhraseDisplay = () => {
  const mainPhrase = "Among leave law built now.";
  const options = [
    { text: "Village did remov enjoyed", icon: "/Frame/Frame.png" },
    { text: "Nay likely length sooner", icon: "/Frame/Framee.png" },
    { text: "Expense windows adapted", icon: "/Frame/Frameee.png" },
  ];

  return (
    <section className="px-4 py-10 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto max-w-5xl border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-10">
        {/* Header and Options Wrapper */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Main Text */}
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold leading-snug text-gray-900 text-center md:text-left">
            {mainPhrase}
          </h2>

          {/* Options Section */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {options.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-black 
                           border border-gray-200 rounded-lg cursor-pointer 
                           transition-all duration-150 hover:bg-gray-100 shadow-sm"
              >
                <Image
                  src={option.icon}
                  alt={option.text}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                  {option.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhraseDisplay;
