import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Welcome to IdentiPlus
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Seamless Video Calls, Audio Calls, and Chat in One Platform
        </p>
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
