import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Primary Color Panel */}
      <div className="bg-primary flex-1 flex items-center justify-center">
        <div className="w-20 h-20 bg-white rounded-full"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md px-8">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-8">
            <div className="border border-primary p-2">
              <span className="font-bold text-primary">NIFI</span>{" "}
              <span className="text-secondary">PAYMENTS</span>
            </div>
          </div>

          {/* Welcome Message */}
          <h2 className="text-2xl font-semibold text-secondary text-center">
            Hello, Developer
          </h2>
          <p className="text-accent text-center mt-2">
            Welcome to Nifipayments developer portal. Please login with your
            credentials.
          </p>

          {/* Form */}
          <div className="mt-6">
            <label htmlFor="email" className="block text-sm text-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mt-6">
            <button className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg">
              SEND OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
