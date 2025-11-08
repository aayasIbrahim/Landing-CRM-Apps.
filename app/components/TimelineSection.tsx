import React from "react";

// --- Type Definitions ---
interface TimelineStepData {
  number: number;
  title: string;
  description: string;
  positionClass: string;
}

// --- Component ---
const TimelineSection: React.FC = () => {
  // --- Timeline Steps Data ---
  const timelineSteps: TimelineStepData[] = [
    {
      number: 1,
      title: "Project Discovery Call",
      description:
        "Party we years to order allow asked of. We so opinion friends me message as delight.",
      positionClass:
        "bottom-0 left-0 md:left-[10%] -translate-x-1/2 md:translate-y-1/2",
    },
    {
      number: 2,
      title: "Requirement Analysis",
      description:
        "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
      positionClass:
        "top-[40%] right-0 md:right-[30%] translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2",
    },
    {
      number: 3,
      title: "Project Delivery",
      description:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
      positionClass: "top-0 right-0 md:right-0 md:-translate-y-1/2",
    },
  ];

  // --- SVG Path & Points ---
  const svgPath = "M 0 450 C 200 150, 500 350, 800 100 C 850 50, 900 10, 1000 10";
  const svgStepPoints = [
    { cx: 50, cy: 430 },
    { cx: 500, cy: 300 },
    { cx: 900, cy: 10 },
  ];

  return (
    <section className="min-h-screen bg-gray-800 font-['Inter'] flex items-center justify-center p-4 md:p-5">
      <div className="w-full container mx-auto p-6 md:p-10 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-3">
              Stockie Operation Across the World
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-teal-700 leading-tight mb-6">
              We have best team and best process
            </h1>
            <p className="text-white mb-8 max-w-md">
              Yet bed any for travelling indulgence unpleasant. Not thoughts all exercise blessing. Indulgence way everything joy.
            </p>
            <button className="w-fit px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Right Timeline */}
          <div className="lg:col-span-7 h-[400px] relative">
            {/* Background Numbers */}
            <div className="absolute top-[350px] left-[15%] text-9xl font-extrabold text-gray-100 opacity-60 z-0 hidden md:block">1</div>
            <div className="absolute top-[300px] left-[55%] text-9xl font-extrabold text-gray-100 opacity-60 z-0 hidden md:block">2</div>
            <div className="absolute top-[10px] left-[80%] text-[10rem] font-extrabold text-gray-100 opacity-80 z-0 hidden md:block">3</div>

            {/* Timeline SVG */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full absolute top-0 left-0 z-10"
              preserveAspectRatio="none"
            >
              {/* Curved Line */}
              <path
                d={svgPath}
                fill="none"
                stroke="#ff5e62"
                strokeWidth="4"
                className="opacity-70"
              />
              {/* Step Dots */}
              {svgStepPoints.map((point, idx) => (
                <React.Fragment key={idx}>
                  <circle cx={point.cx} cy={point.cy} r="10" fill="#ff5e62" className="opacity-20" />
                  <circle
                    cx={point.cx}
                    cy={point.cy}
                    r="6"
                    fill="#fff"
                    stroke="#ff5e62"
                    strokeWidth="4"
                  />
                </React.Fragment>
              ))}
              {/* Right Purple Background */}
              <path
                d="M 1000 0 L 1000 500 C 800 500, 950 100, 750 0 Z"
                fill="#eef2ff"
                className="opacity-60"
              />
            </svg>

            {/* Timeline Steps */}
            {timelineSteps.map((step) => (
              <div
                key={step.number}
                className={`absolute w-10/12 md:w-56 p-4 md:p-0 text-center md:text-left ${step.positionClass} z-20`}
              >
                <div className="md:hidden text-5xl font-extrabold text-gray-100 opacity-60 mb-2">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-teal-300 mb-1">{step.title}</h3>
                <p className="text-sm text-teal-700 leading-snug">{step.description}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
