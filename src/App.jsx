import React, { useRef } from "react";
import "./App.css";
import { useState, useEffect } from "react";
import TicketTiers from "./components/TicketTiers";
import ScheduleCard from "./components/ScheduleCard";
import About from "./components/About";
import Venue from "./components/Venue";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import Hero from "./components/hero";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { WagmiProvider } from "wagmi";
import { config } from "../wagmi.config";



// Initializing Web3Modal
const projectId = "c876ed30788812d65bc80a6decb9ba21";
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#1e3a8a", 
    "--w3m-border-radius-master": "12px", 
  },
});

function App() {
  const ticketTiersRef = useRef(null);

  const scrollToTicketTiers = () => {
    ticketTiersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <WagmiProvider config={config}>
    <div>
      <Hero scrollToTicketTiers={scrollToTicketTiers} />
      <section className="relative pt-6 pb-0 px-2 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-r from-[#0d162b] via-[#1e3a8a] to-[#12284d] z-50 min-h-screen">
        <div className="absolute inset-0 w-full h-full">
          <Particle />
        </div>
        <div className="">
          <TicketTiers ticketRef={ticketTiersRef} />
        </div>
        <div className="relative">
          <div className="absolute inset-0 w-full h-full">
            <Particle />
          </div>
          <Venue />
        </div>
        <div className="relative">
          <ScheduleCard />
        </div>
        <div className="relative">
          <About scrollToTicketTiers={scrollToTicketTiers} />
          <div className="absolute inset-0 w-full h-full -z-10">
            <Particle />
          </div>
        </div>
        {/* Removed h-16 div; if needed for gradient, use min-h-0 */}
        <div className="max-w-full min-h-16 bg-gradient-to-r from-[#0d162b] via-[#1e3a8a] to-[#12284d]"></div>
      </section>
      <Footer scrollToTicketTiers={scrollToTicketTiers} />
    </div>
    </WagmiProvider>
  );
}

export default App;
