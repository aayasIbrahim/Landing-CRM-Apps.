"use client";
import React from "react";
import FeatureCard from "../components/features/FeatureCard";

const features = [
  {
    iconSrc: "/icon/icon.png",
    title: "Award-winning team",
    description:
      "Access to world-class talent and industry experts to drive innovation and results.",
  },
  {
    iconSrc: "/icon/iicon.png",
    title: "Data-driven strategy",
    description:
      "Leverage big data and analytics to make informed decisions and optimize growth.",
  },
  {
    iconSrc: "/icon/iacon.png",
    title: "Global reach",
    description:
      "Expand your market presence with our international network and partnership program.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black text-center mt-7 mb-12">
          We help your business grow faster
        </h2>
        <p className="text-3xl md:text-xl font-extrabold text-[20px] mt-7 mb-12">
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-1 mb-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className="flex justify-center justify-center mt-[50px]">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition  text-center"
          >
            More About Platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
