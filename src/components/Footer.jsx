import React from "react";
import ConnectButton from "./ConnectButton";

function Footer({ scrollToTicketTiers }) {
  return (
    <footer className="py-6 sm:py-8 text-center bg-gradient-to-r from-[#0d162b] via-[#1e3a8a] to-[#12284d]">
      <div className="bg-transparent border border-white/10 rounded-3xl shadow-lg shadow-blue-500/20 p-4 sm:p-6 md:p-8 max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-3 sm:mb-4">
          MetaFest 2025
        </h2>
        <p className="text-sm sm:text-base font-medium text-blue-300 mb-3 sm:mb-4">
          No. 54 Remitino Palace, Celestia Avenue, Nova Etheris, 90124, Italy
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <a
            href="https://twitter.com"
            className="text-blue-200 hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://discord.com"
            className="text-blue-200 hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            href="https://telegram.org"
            className="text-blue-200 hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button
            onClick={scrollToTicketTiers}
            className="bg-blue-900 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-600 shadow-md shadow-blue-500/30 cursor-pointer text-sm sm:text-base"
          >
            Join the Hackathon
          </button>
          <ConnectButton />
        </div>
        <p className="text-xs sm:text-sm font-medium text-blue-300">
          Powered by MetaChain © 2025 — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;