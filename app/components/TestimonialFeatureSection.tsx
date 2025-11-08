import React, { FC } from "react";

// ----------------------------
// Type Definitions
// ----------------------------
interface Feature {
  title: string;
  description: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
}

// ----------------------------
// Main Component
// ----------------------------
const TestimonialFeatureSection: FC = () => {
  // Data
  const features: Feature[] = [
    {
      title: "Offend belong promote provision",
      description:
        "Wise busy past both park when on ye no. Nay likely her length sooner thrown sex lively income.",
    },
    {
      title: "Consulted ourselves it blessing welcome",
      description:
        "The expense windows adapted sir. Wrong widen drown ample eat off doors money.",
    },
  ];

  // Nested Reusable Card Component
  const FeatureCard: FC<FeatureCardProps> = ({ title, description }) => (
    <div
      className="
        bg-white rounded-xl p-10 md:p-12 shadow-lg 
        hover:shadow-xl transition-shadow duration-300
        flex-1 min-w-[300px] max-w-lg
      "
    >
      <h3
        className="
          text-2xl md:text-3xl font-bold 
          text-gray-900 mb-5 leading-tight text-center
        "
      >
        {title}
      </h3>

      <p
        className="
          text-sm md:text-base text-gray-600 
          mb-8 leading-relaxed text-center
        "
      >
        {description}
      </p>

      <div className="text-center">
        <button
          className="
            bg-indigo-600 hover:bg-indigo-700 
            text-white font-semibold 
            py-3 px-8 rounded-lg 
            transition-colors duration-200
          "
        >
          Read More
        </button>
      </div>
    </div>
  );

  // Return
  return (
    <section
      className="
        bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 
        flex flex-col items-center
      "
    >
      {/* Card Container */}
      <div
        className="
          flex flex-col lg:flex-row 
          justify-center items-stretch 
          gap-8 w-full max-w-6xl
        "
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

   
    </section>
  );
};

export default TestimonialFeatureSection;
