"use client";
import React, { useState } from "react";
import RegisterDrawer from "./RegisterDrawer";
import SignUpDrawer from "./SignUpDrawer";
import SignInDrawer from "./SignInDrawer";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isRegisterDrawerOpen, setIsRegisterDrawerOpen] =
    useState<boolean>(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* === Logo === */}
        <div className="flex justify-center items-center">
          <Image
            src="/CF Logo Black.png" // ✅ Path from the public folder root
            alt="logo"
            width={40}
            height={40}
          />
          <div  className=" font-bold text-gray-800">Courseficton</div>
        </div>

        {/* === Desktop Links === */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/product"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Product <span className="ml-1">&#9662;</span>
          </a>
          <a
            href="/template"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Template <span className="ml-1">&#9662;</span>
          </a>
          <a
            href="/blog"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Blog
          </a>
          <a
            href="/pricing"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Pricing
          </a>
        </div>

        {/* === Action Buttons === */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsSignInOpen(true)}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Sign In
          </button>
          <button
            onClick={() => setIsRegisterDrawerOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Registration
          </button>
        </div>

        {/* === Mobile Hamburger === */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* === Mobile Menu === */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-4 py-4 gap-3">
            <a href="/product" className="text-gray-700 hover:text-blue-600">
              Product
            </a>
            <a href="/template" className="text-gray-700 hover:text-blue-600">
              Template
            </a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600">
              Blog
            </a>
            <a href="/pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </a>

            <button
              onClick={() => {
                setIsSignInOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 font-medium text-left"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsRegisterDrawerOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Registration
            </button>
          </div>
        </div>
      )}

      {/* === Drawers === */}
      <RegisterDrawer
        isOpen={isRegisterDrawerOpen}
        onClose={() => setIsRegisterDrawerOpen(false)}
      />
      <SignUpDrawer
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
      <SignInDrawer
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        openSignUp={() => {
          setIsSignInOpen(false); // close Sign In drawer
          setIsSignUpOpen(true); // open Sign Up drawer
        }}
      />
    </header>
  );
};

export default NavBar;
