"use client";

import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/assests/imgaes/logo.png";
import Link from "next/link";
import { menuData } from "@/app/data/menuData";

interface P {
  children: any;
}

const DashboardLayout: React.FC<P> = ({ children }) => {
  const [activePage, setActivePage] = useState<"home" | "account">("home");

  return (
    <div className="flex h-screen bg-[#f3f3ff] text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4">
        <div className="text-2xl font-bold mb-6">
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <nav className="space-y-4">
          {menuData.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.link}
                className="flex items-center space-x-2 p-2 rounded bg-white hover:bg-primary hover:text-white"
              >
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Header */}
        <div className="flex justify-end items-center mb-6">
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
              Upgrade Now
            </button>
            <div className="flex items-center space-x-2">
              <span>Addie Bradford</span>
              <FaUserCircle size={40} color="#3B1E54" />
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
