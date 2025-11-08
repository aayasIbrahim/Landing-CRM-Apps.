"use client";

import React from 'react';
import { Apple, Play } from 'lucide-react';

const AppDownloadCta: React.FC = () => {
  const handleDownload = (store: string) => {
    console.log(`Navigating to ${store} store...`);
  };

  return (
    <div className="flex items-center justify-center   bg-gray-50 p-4 sm:p-8">
      <div
        className="
          relative w-full max-w-4xl 
          bg-indigo-200/50 
          text-center py-20 sm:py-28 lg:py-40 
          px-4 sm:px-10 rounded-xl shadow-2xl
          [clip-path:polygon(0_0,100%_0,100%_80%,50%_100%,0_80%)]
          lg:[clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]
        "
      >
        <div className="relative z-10 space-y-6">
          {/* Subtitle */}
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Project Management App
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900  leading-tight mx-auto max-w-3xl">
            Download our app and start your free trial today!
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600  mx-auto max-w-md pt-2">
            End-to-end payments and financial management in a single solution.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
            <button
              onClick={() => handleDownload('App Store')}
              className="flex items-center justify-center px-6 py-3 w-4/5 sm:w-auto text-white font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              <Apple className="w-5 h-5 mr-2" />
              App Store
            </button>

            <button
              onClick={() => handleDownload('Google Play')}
              className="flex items-center justify-center px-6 py-3 w-4/5 sm:w-auto text-white font-semibold bg-gray-800 hover:bg-gray-900 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-600"
            >
              <Play className="w-5 h-5 mr-2 fill-white" />
              Google Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadCta;
