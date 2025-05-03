import React from "react";
import ThreeScene from "./ThreeScene";
import ConnectButton from "./ConnectButton";
import Countdown from "./Countdown";



function Hero({ scrollToTicketTiers }) {
  return (
    <div>
      <div className="max-h-screen bg-[url('./assets/bg.png')] bg-cover bg-center bg-no-repeat bg-fixed text-white relative before:absolute before:inset-0 before:bg-black before:opacity-30 overflow-hidden">
        <header className="flex justify-between items-center px-4 sm:px-6 py-4 relative z-20">
          <div className="flex items-center gap-3 sm:gap-4">
            <h1 className="text-lg md:text-2xl sm:text-3xl font-extrabold tracking-tight">
              MetaVerse Fest 2025
            </h1>
          </div>
          <ConnectButton />
        </header>
        {/* Section */}
        <section className="relative px-2 sm:px-4 pb-4 sm:pb-6 text-center ">
          {/* 3D Scene as Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <ThreeScene />
          </div>
          <div className="relative z-50 max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto space-y-8 sm:space-y-6 mt-32 sm:mt-28 md:mt-10 mb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                Step Into the Future
              </h2>
              <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-blue-300 max-w-xl sm:max-w-2xl mx-auto">
                MetaVerse Fest 2025 is not just an event—it’s a revolution powered by the limitless possibilities of Web3.
              </p>
            </div>
            <div className="mt-36 sm:mt-28 md:mt-24">
              <p className="text-base sm:text-lg md:text-xl text-blue-300 max-w-xl sm:max-w-2xl mx-auto">
                Join the ultimate Web3 experience with exclusive NFT tickets to MetaVerse Fest 2025
              </p>
                  <div className="mt-24 sm:mt-12 md:mt-24">
                <Countdown targetDate="2025-04-27T20:00:00" />
              </div>
              <div className="mt-12 sm:mt-10">
                <button
                  onClick={scrollToTicketTiers}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-sm sm:text-base"
                >
                  Get Your NFT Ticket
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;