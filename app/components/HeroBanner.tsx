"use client";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative w-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-10 bg-white">
      {/* Background Image Container */}
      <div className="relative w-full max-w-5xl h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl mt-16 sm:mt-24">
        {/* Background Image */}
        <Image
          src="/istockphoto-1460172015-2048x2048.jpg"
          alt="Business Handshake"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark Overlay with Text */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 leading-snug">
            Push your product to the next level.
          </h2>
          <p className="text-gray-100 text-sm sm:text-base md:text-lg mb-6 max-w-md sm:max-w-xl">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help you grow and scale faster.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
