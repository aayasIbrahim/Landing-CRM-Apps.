"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import FormDrawer from "./FormDrawer";
import SignUpDrawer from "./SignUpDrawer";
import SignInDrawer from "./SignInDrawer";
import Image from "next/image";
import Link from "next/link";

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const [isRegisterDrawerOpen, setIsRegisterDrawerOpen] =
    useState<boolean>(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  
  const role = session?.user?.role;
  const isAdmin = role === "admin";

  // 🧭 Navigation Links Array
  const navLinks = [
    ...(isAdmin ? [{ name: "Lead Collection", path: "/admin" }] : []),
  ];

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* === Logo === */}
        <div className="flex items-center">
          <Image src="/CF Logo Black.png" alt="logo" width={40} height={40} />
          <div className="font-bold text-gray-800 ml-2">Coursefiction</div>
        </div>

        {/* === Desktop Links === */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
              {link&& <span className="ml-1">&#9662;</span>}
            </Link>
          ))}
        </div>

        {/* === Action Buttons === */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <>
              <span className="text-gray-700 font-medium">
                Hi, {session.user?.fullName || "User"}
              </span>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
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
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            {session ? (
              <>
                <span className="text-gray-700 font-medium">
                  Hi, {session.user?.fullName || "User"}
                </span>
                <button
                  onClick={() => {
                    signOut();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      )}

      {/* === Drawers === */}
      <FormDrawer
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
          setIsSignInOpen(false);
          setIsSignUpOpen(true);
        }}
      />
    </header>
  );
};

export default NavBar;
