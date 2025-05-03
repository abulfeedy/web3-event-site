import React, { useState } from "react";

const tiers = [
  {
    name: "Regular",
    price: "0.01 ETH",
    access: "Main Floor",
    gradient: "#1e3a8a, #3b82f6",
    rgb: "59, 130, 246",
  },
  {
    name: "Golden",
    price: "0.03 ETH",
    access: "Front Row + Perks",
    gradient: "#1e40af, #60a5fa",
    rgb: "96, 165, 250",
  },
  {
    name: "VIP",
    price: "0.05 ETH",
    access: "All Access + Backstage",
    gradient: "#1d4ed8, #93c5fd",
    rgb: "147, 197, 253",
  },
];

export default function TicketTiers({ ticketRef }) {
  const [minting, setMinting] = useState(null);
  const [mintedTickets, setMintedTickets] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleMint = (tierName) => {
    if (mintedTickets.includes(tierName)) return;

    console.log(`Starting minting for ${tierName}`);
    setMinting(tierName);

    setTimeout(() => {
      setMintedTickets((prev) => [...prev, tierName]);
      setMinting(null);
      setShowModal(true);
    }, 1500);
  };

  return (
    <section ref={ticketRef} className=" mb-16 ">
       <div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
              Choose Your Ticket Tier
            </h2>
             </div>
      <div className="max-w-6xl mx-auto py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => {
            const isMinted = mintedTickets.includes(tier.name);
            const isMinting = minting === tier.name;
            const [startColor, endColor] = tier.gradient.split(", ");

            return (
              <div
                key={tier.name}
                className="relative group rounded-2xl p-0.5 lightning-border transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]"
                style={{ "--glow-color": endColor, "--glow-rgb": tier.rgb }}
              >
                <div className="relative z-10 h-full w-full rounded-2xl bg-[#0f172a]/20 backdrop-blur-xl border border-white/20 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <p className="mt-3 text-blue-200 text-lg">{tier.access}</p>
                  <p className="mt-4 text-3xl font-semibold text-white">{tier.price}</p>

                  <button
                    onClick={() => handleMint(tier.name)}
                    disabled={isMinted || isMinting}
                    style={
                      isMinted
                        ? { backgroundColor: "#16a34a" } // bg-green-600
                        : isMinting
                        ? {
                            background: `linear-gradient(to right, ${startColor}, ${endColor})`,
                            animation: "pulse 1.5s infinite",
                          }
                        : { background: `linear-gradient(to right, ${startColor}, ${endColor})` }
                    }
                    className={`mt-6 w-full py-3 rounded-full cursor-pointer text-white font-semibold transition-all duration-300 ${
                      isMinted
                        ? "cursor-not-allowed"
                        : isMinting
                        ? "animate-pulse"
                        : "hover:opacity-90"
                    }`}
                  >
                    {isMinted ? "Minted!" : isMinting ? "Minting..." : "Mint Ticket"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gradient-to-b from-[#0d162b] to-[#1e3a8a] rounded-xl p-6 text-center text-white max-w-sm w-full border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold">Ticket Minted!</h3>
              <p className="mt-4">
                You’ve successfully minted your {mintedTickets[mintedTickets.length - 1]} ticket!
              </p>
              <p className="mt-2 text-blue-200">MetaVerse Fest 2025 awaits you...</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-6 cursor-pointer bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] hover:opacity-90 px-6 py-2 rounded-full text-white transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}