import React, { useState } from "react";
import man1 from "../assets/man1.png";
import khan from "../assets/khan.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import maya from "../assets/maya.png";

const scheduleItems = [
  { time: "10:00 AM", description: "Opening Keynote: Pioneering the Web3 Frontier" },
  { time: "12:00 PM", description: "Workshop: Coding Smart Contracts for DApps" },
  { time: "2:00 PM", description: "Panel: DeFi and NFT Innovations" },
  { time: "4:00 PM", description: "Hackathon Showcase: Compete for ETH & NFTs" },
  { time: "6:00 PM", description: "Gala & Awards: Celebrate with MetaFest NFTs" },
];

const hosts = [
  {
    name: "Alex Turing",
    title: "CEO of MileVerse and Web3 strategist",
    image: man1,
    borderColor: "blue-400",
  },
  {
    name: "Sana Khan",
    title: "Co-founder of Avine and CM WI Network",
    image: khan,
    borderColor: "blue-400",
  },
  {
    name: "Liam Chen",
    title: "African Minister of Youth finance ",
    image: man2,
    borderColor: "blue-400",
  },
  {
    name: "Maya Patel",
    title: "CTO of BlockFest",
    image: maya,
    borderColor: "blue-400",
  },
  {
    name: "Jaden Okoye",
    title: "Lead Dev at CryptoCore, Europe & Latam Head of CryptoCore",
    image: man3,
    borderColor: "blue-400",
  },
];

export default function ScheduleCard() {
  const [currentHost, setCurrentHost] = useState(0);

  const handlePrev = () => {
    setCurrentHost((prev) => (prev === 0 ? hosts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentHost((prev) => (prev === hosts.length - 1 ? 0 : prev + 1));
  };

  const host = hosts[currentHost];

  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-12 flex flex-col lg:flex-row gap-6 my-12 sm:my-16 md:my-20">
      {/* Schedule Card (Left) */}
      <div className="flex-1 bg-gradient-to-br from-blue-950 to-blue-900 bg-opacity-50 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl shadow-blue-500/30 ring-1 ring-blue-500/20 p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 mb-4 sm:mb-6">
          Event Schedule
        </h2>
        <div className="divide-y divide-blue-500/20">
          {scheduleItems.map((item, index) => (
            <div key={index} className="flex py-3 sm:py-4">
              <span className="w-20 sm:w-24 font-bold text-blue-300 text-sm sm:text-base">
                {item.time}
              </span>
              <p className="flex-1 text-blue-200 font-medium text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Members Card (Right) */}
      <div className="flex-1 bg-transparent p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        <div className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
          <h1>Host Members</h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center max-w-md mx-auto">
          <img
            src={host.image}
            alt={host.name}
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-2 border-blue-200 shadow-md shadow-blue-400/50 object-cover"
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 md:ml-6 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              {host.name}
            </h3>
            <p className="text-sm sm:text-base font-medium text-blue-300">
              {host.title}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 sm:gap-6">
          <button
            onClick={handlePrev}
            className="bg-blue-900 text-white text-xl sm:text-2xl p-3 sm:p-4 rounded-full hover:bg-blue-600 shadow-md shadow-blue-500/30 cursor-pointer"
            aria-label="Previous host"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-900 text-white text-xl sm:text-2xl p-3 sm:p-4 rounded-full hover:bg-blue-600 shadow-md shadow-blue-500/30 cursor-pointer"
            aria-label="Next host"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}