"use client";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-96 flex items-center justify-center p-6 bg-white ">
      {/* Background Image Container */}
      <div className="relative w-full max-w-4xl h-72 rounded-xl overflow-hidden shadow-2xl mt-[120px]">
        {/* Background Image */}
        <Image
          src="/istockphoto-1460172015-2048x2048.jpg"
          alt="Business Handshake"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0  flex flex-col items-center justify-center text-center p-8">
          <h2 className="text-red-300 text-3xl md:text-4xl font-bold mb-4">
            Push your product to next level.
          </h2>
          <p className="text-red-300 text-base md:text-lg mb-8 max-w-xl">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
