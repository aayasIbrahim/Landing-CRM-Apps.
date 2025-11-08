"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  logo: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Is be upon sang fond must shew. Really boy law county she unable her sister...",
    name: "AR Shakir",
    title: "CEO GetNextDesign",
    logo: "segment",
    rating: 5,
    imageUrl: "/image 61.png",
  },
  {
    id: 2,
    quote:
      "The service exceeded my expectations. Their team was professional, responsive, and delivered high-quality results ahead of schedule...",
    name: "Jane Doe",
    title: "CTO TechSolutions Inc.",
    logo: "intercom",
    rating: 4,
    imageUrl: "/link.jpg",
  },
  {
    id: 3,
    quote:
      "An absolute game-changer for our workflow. The implementation was seamless, and we saw an immediate positive impact...",
    name: "Mark T.",
    title: "Founder Innovate Co.",
    logo: "stripe",
    rating: 5,
    imageUrl: "/ali.jpg",
  },
];

interface StarsProps {
  rating: number;
}
const Stars: React.FC<StarsProps> = ({ rating }) => (
  <div className="flex space-x-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-orange-400 fill-orange-400" : "text-gray-300"}`}
      />
    ))}
  </div>
);

interface NavButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}
const NavButton: React.FC<NavButtonProps> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition flex items-center justify-center"
    aria-label={`${direction} testimonial`}
  >
    {direction === "prev" ? (
      <ChevronLeft className="w-5 h-5 text-gray-700" />
    ) : (
      <ChevronRight className="w-5 h-5 text-gray-700" />
    )}
  </button>
);

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 sm:p-8 font-['Inter'] relative">
      <style jsx>{`
        .dotted-line {
          background-image: linear-gradient(
            to bottom,
            #ccc 50%,
            rgba(255, 255, 255, 0) 50%
          );
          background-size: 1px 16px;
          width: 1px;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
        .bg-grid {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .shape-top-left {
          width: 20px;
          height: 20px;
          background-color: #00e4ff;
          transform: rotate(45deg);
          border-radius: 4px;
          position: absolute;
          top: 0;
          left: 0;
        }
        .shape-bottom-right {
          width: 150px;
          height: 150px;
          background-color: #00e4ff;
          border-radius: 50%;
          position: absolute;
          right: -50px;
          bottom: -50px;
        }
      `}</style>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Check what our clients are saying
          </h2>
        </div>

        {/* Slider */}
        <div className="relative flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl overflow-hidden min-h-[400px]">
          {/* Left Section */}
          <div className="relative w-full lg:w-5/12 p-8 flex items-center justify-center bg-blue-50/50 min-h-[300px] lg:min-h-0">
            <div className="dotted-line hidden lg:block"></div>
            <div className="bg-grid absolute inset-0 opacity-20"></div>
            <div className="shape-top-left"></div>
            <div className="shape-bottom-right"></div>

            {/* Testimonials as <ul> */}
            <ul className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
              {testimonials.map((testimonial, index) => (
                <li
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                  aria-hidden={index !== currentIndex}
                >
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    width={400}
                    height={500}
                    className="rounded-xl w-full h-auto object-cover shadow-xl z-1111 "
                  />
                </li>
              ))}
            </ul>

            {/* Desktop Arrows */}
            <div className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2  z-1111111">
              <NavButton direction="prev" onClick={prevSlide} />
            </div>
            <div className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-1111111">
              <NavButton direction="next" onClick={nextSlide} />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-7/12 p-8 sm:p-12 flex flex-col justify-center">
            <span className="text-5xl text-orange-400 font-serif">&#8220;</span>
            <Stars rating={testimonials[currentIndex].rating} />
            <p className="text-xl sm:text-2xl font-semibold text-gray-800 leading-relaxed mt-4">
              {testimonials[currentIndex].quote}
            </p>

            <div className="pt-4 border-t border-gray-100 mt-4">
              <p className="text-lg font-bold text-gray-900">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-indigo-600">
                {testimonials[currentIndex].title}
              </p>
            </div>

            <div className="pt-4 flex justify-end">
              <div className="flex items-center space-x-1 text-gray-400">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="font-medium text-sm uppercase">
                  {testimonials[currentIndex].logo}
                </span>
              </div>
            </div>

            {/* Mobile arrows */}
            <div className="flex justify-center space-x-4 mt-8 lg:hidden">
              <NavButton direction="prev" onClick={prevSlide} />
              <NavButton direction="next" onClick={nextSlide} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
