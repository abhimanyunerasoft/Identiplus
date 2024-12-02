"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assests/imgaes/logo.png";
import esign from "@/public/assests/imgaes/esign.png";
import south from "@/public/assests/imgaes/south.png";
import iifl from "@/public/assests/imgaes/IIFL.png";
import dhan from "@/public/assests/imgaes/Dhan-Franchise-Logo.png";
import asian from "@/public/assests/imgaes/asian-paints-vector-logo.png";
import tata from "@/public/assests/imgaes/tata.png";
import axis from "@/public/assests/imgaes/Axis Finance.png";
import casestudy from "@/public/assests/imgaes/casestudy.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [isCaseStudyFlyoutVisible, setIsCaseStudyFlyoutVisible] =
    useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const storedLink = localStorage.getItem("activeLink");
    if (storedLink) {
      setActiveLink(storedLink);
    } else {
      setActiveLink("/");
    }
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    localStorage.setItem("activeLink", href);
  };

  return (
    <header className="bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
        <div className="w-40 h-16 bg"> 
          <Image src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        </div>

        {/* Centered Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-lg font-medium mx-auto">
          {/* Product Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsFlyoutVisible(true)}
            onMouseLeave={() => setIsFlyoutVisible(false)}
          >
            <div className="flex items-center space-x-2">
              <Link href="/header" className="hover:text-indigo-300 p-4">
                Product
              </Link>
              <span className="transition-transform duration-300">
                <i
                  className={`fa ${
                    isFlyoutVisible ? "fa-chevron-up" : "fa-chevron-down"
                  } h-5 w-5 text-white`}
                ></i>
              </span>
            </div>

            {isFlyoutVisible && (
              <div className="absolute left-0 transform -translate-x-1/3 mt-2 h-[50vh] w-[60vw] bg-slate-50 text-black rounded-lg shadow-lg p-4 flex space-x-6 z-50">
                {/* Product Categories */}
                <div className="w-[25%]">
                  <ul className="space-y-1 text-gray-800">
                    {[
                      { title: "Document Execution Platform", path: "/" },
                      {
                        title: "Deal Collaboration",
                        path: "/deal-collaboration",
                      },
                      {
                        title: "Electronic Bank Guarantees",
                        path: "/electronic-bank-guarantees",
                      },
                      { title: "Consent Manager", path: "/consent-manager" },
                    ].map((item) => (
                      <li
                        key={item.path}
                        className={`p-2 m-2 rounded-r-lg h-10 font-bold text-base ${
                          activeLink === item.path ? "bg-purple-200" : ""
                        }`}
                        onClick={() => handleLinkClick(item.path)}
                      >
                        <Link href={item.path}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div className="w-[50%] bg-purple-100 p-4 rounded-lg">
                  <p className="mb-2 text-sm text-gray-700 text-left">
                    Everything your company needs to digitally transform its
                    paperwork processes — in one unified solution.
                  </p>
                  <h3 className="font-bold text-indigo-600">Key Features</h3>
                  <ul className="grid grid-cols-2 gap-4 text-gray-800 mt-2">
                    {[
                      { name: "Bharat Sign", icon: "fa-pencil-alt" },
                      { name: "Bharat Stamp", icon: "fa-id-card" },
                      { name: "Paperwork Operation", icon: "fa-paperclip" },
                      { name: "Document Fraud Prevention", icon: "fa-lock" },
                      { name: "Plug and Play Dashboard", icon: "fa-play" },
                      { name: "Low-code APIs", icon: "fa-microchip" },
                      { name: "NeSL", icon: "fa-file-alt" },
                      { name: "Paperwork Analytics", icon: "fa-chart-bar" },
                    ].map((feature) => (
                      <li
                        key={feature.name}
                        className="flex items-center space-x-2 hover:bg-purple-300 p-2 rounded"
                      >
                        <i
                          className={`fa ${feature.icon} h-6 w-6 text-indigo-600`}
                        ></i>
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/feature-explainer"
                    className="text-indigo-600 mt-2 inline-block"
                  >
                    Feature Explainer
                  </Link>
                </div>

                {/* Esign Laws Section */}
                <div className="w-[25%] p-4 bg-neutral-100">
                  <Image
                    src={esign}
                    alt="Esign Law Mockup"
                    className="h-36 object-contain"
                  />
                  <h3 className="font-bold text-lg text-indigo-600 mt-3">
                    Read the Laws of Esign
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Discover everything about electronic signatures and their
                    legal validity.
                  </p>
                  <div className="h-40 flex items-end justify-center">
                    <Link href="/get-copy">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-2 rounded transition">
                        Get Your Copy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Case Studies Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsCaseStudyFlyoutVisible(true)}
            onMouseLeave={() => setIsCaseStudyFlyoutVisible(false)}
          >
            <div className="flex items-center space-x-2">
              <Link href="/case-studies" className="hover:text-indigo-300 p-4">
                Case Studies
              </Link>
              <i className="fa fa-chevron-down h-5 w-5 text-white"></i>
            </div>

            {isCaseStudyFlyoutVisible && (
              <div className="absolute left-0 mt-2 w-[45vw] h-[50vh] bg-slate-100 text-black rounded-lg shadow-lg p-6 z-50">
                {/* Case Study Images */}
                <div className="left-0 w-[50%]">
                  <p className="mb-2 text-sm text-gray-700">
                    How top Indian companies are adopting digital paperwork to
                    drive fantastic business results
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-10">
                    {[south, iifl, tata, asian, dhan, axis].map(
                      (image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`Case Study ${index + 1}`}
                          width={128}
                          height={72}
                          className="object-cover rounded-md"
                        />
                      )
                    )}
                  </div>
                  <Link
                    href="/case-studies"
                    className="text-purple-600 underline mt-4 inline-block"
                  >
                    See All Case Studies
                  </Link>
                </div>

                {/* Documentary Section */}
                <div className="w-[50%] bg-white p-4 rounded-lg shadow-lg">
                  <h4 className="text-sm font-bold text-indigo-600 mb-2">
                    Documentary
                  </h4>
                  <Image
                    src={casestudy}
                    alt="Documentary Image"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="font-bold mb-2">
                    Federal Banks decision makers, employees, and customers
                    share their experience with Leegality.
                  </p>
                  <Link href="/watch-documentary">
                    <button className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white transition-colors">
                      Watch Full Documentary
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* Other Static Links */}
          {["Use Cases", "Resources", "Pricing"].map((link, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Link
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="hover:text-indigo-300"
              >
                {link}
              </Link>
              <i className="fa fa-chevron-down h-5 w-5 text-white"></i>
            </li>
          ))}
        </ul>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <Link href="/signup">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden text-3xl cursor-pointer">☰</div>
      </nav>
    </header>
  );
};

export default Header;
