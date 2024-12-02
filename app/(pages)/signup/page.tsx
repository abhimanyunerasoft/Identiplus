"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import logo from "@/public/assests/imgaes/logo.png"; // Ensure the path is correct
import signup from "@/public/assests/imgaes/signup.jpg"; // Ensure the path is correct

const Signup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<"email" | "otp" | "name">(
    "email"
  );
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [mobileError, setMobileError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleNextStep = () => {
    if (currentStep === "email") {
      if (!emailOrPhone || !/^\d{10}$/.test(emailOrPhone)) {
        setMobileError(true);
        return;
      }
      setMobileError(false); // Clear the mobile error
      setCurrentStep("otp");
    } else if (currentStep === "otp") {
      if (!/^\d{6}$/.test(otp)) {
        setError("OTP must be exactly 6 digits.");
        return;
      }
      setError(null); // Clear OTP error
      setCurrentStep("name");
    }
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;
    setError(null);
    setMobileError(false);
    setNameError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    // Validate Name
    if (!/^[A-Za-z\s]+$/.test(name)) {
      setNameError(true);
      isValid = false;
    }

    // Validate Mobile Number
    if (!/^\d{10}$/.test(emailOrPhone)) {
      setMobileError(true);
      isValid = false;
    }

    // Validate Password (at least 6 characters, 1 uppercase, 1 number, 1 special character)
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(true);
      isValid = false;
    }

    // Validate Password and Confirm Password
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      isValid = false;
    }

    if (!isValid) return;

    // Clear error if validation passes
    setError(null);

    // Proceed with sign-up logic (e.g., API call)
    router.push("/dashboard"); // This will navigate to the dashboard page
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Primary Color Panel */}
      <div className="flex-1 flex items-center justify-center relative">
        <Image
          src={signup} // Your image path
          alt="Logo"
          layout="fill"
          objectFit="cover" // Ensure the image covers the container
          objectPosition="center" // Center the image
          priority
        />
        <div className="relative z-10">
          {/* Your content that should appear above the image */}
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center bg-neutral  min-h-screen ">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          {/* Logo Section */}
          <div className="flex justify-center mb-6">
            <div className="relative w-[50%] h-[30%] ">
              <Image
                src={logo}
                alt="Logo"
                layout="contain"
                objectFit="contain"
                priority
              />
            </div>
          </div>

          {/* Form Section */}
          {currentStep === "email" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNextStep();
              }}
            >
              <label htmlFor="email" className="block text-sm text-primary">
                Email or Phone
              </label>
              <input
                type="text"
                id="email"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="Email / Phone Number"
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                  mobileError ? "border-red-500" : ""
                }`}
              />
              {mobileError && (
                <p className="text-red-500 text-sm mt-2">
                  Please enter a valid mobile number (10 digits).
                </p>
              )}
              <button
                type="submit"
                className="mt-4 w-full bg-primary hover:bg-secondary text-white py-2 rounded-md"
              >
                Get Signup OTP
              </button>
            </form>
          )}

          {currentStep === "otp" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNextStep();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm text-primary">
                  Mobile Number
                </label>
                <p className="bg-neutral border border-neutral-300 rounded-md px-4 py-2">
                  {emailOrPhone}
                </p>
              </div>
              <label htmlFor="otp" className="block text-sm text-primary">
                One Time Password
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary "
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button
                type="submit"
                className="mt-4 w-full bg-primary hover:bg-secondary text-white py-2 rounded-md"
              >
                Verify OTP
              </button>
            </form>
          )}

          {currentStep === "name" && (
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label className="block text-sm text-primary">
                  Mobile Number
                </label>
                <p className="bg-neutral border border-neutral-300 rounded-md px-4 py-2">
                  {emailOrPhone}
                </p>
              </div>

              <label htmlFor="name" className="block text-sm text-primary">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary  ${
                  nameError ? "border-red-500" : ""
                }`}
              />
              {nameError && (
                <p className="text-red-500 text-sm mt-2">
                  Name must contain only letters.
                </p>
              )}

              <label
                htmlFor="password"
                className="block text-sm text-primary mt-4"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary  ${
                  passwordError ? "border-red-500" : ""
                }`}
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">
                  Password must be at least 6 characters long, include one
                  uppercase letter, one number, and one special character.
                </p>
              )}

              <label
                htmlFor="confirmPassword"
                className="block text-sm text-primary mt-4"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary  ${
                  confirmPasswordError ? "border-red-500" : ""
                }`}
              />
              {confirmPasswordError && (
                <p className="text-red-500 text-sm mt-2">
                  Passwords do not match.
                </p>
              )}

              <button
                type="submit"
                className="mt-4 w-full bg-primary hover:bg-secondary text-white py-2 rounded-md"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>

        {/* Footer Section */}
        <div className="absolute bottom-4 text-center w-full text-xs text-gray-500">
          Powered by reCAPTCHA. Google{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>{" "}
          &{" "}
          <a href="#" className="text-primary hover:underline">
            Terms of Service
          </a>{" "}
          apply.
        </div>
      </div>
    </div>
  );
};

export default Signup;
