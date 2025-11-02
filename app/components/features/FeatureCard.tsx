"use client";
import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
  link?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  title,
  description,
  link = "#",
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center md:text-left flex flex-col items-center md:items-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Optimized Next.js Image */}
      <div className="mb-4">
        <Image
          src={iconSrc}
          alt={title}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>

      <p className="text-black text-sm md:text-base mb-4 flex-grow">
        {description}
      </p>

      <a
        href={link}
        className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center group"
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
};

export default FeatureCard;
