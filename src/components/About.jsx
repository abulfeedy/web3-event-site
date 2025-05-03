import React from "react";

function About({ scrollToTicketTiers }) {
  return (
    <div className="my-8 sm:my-12 md:my-16 text-center">
      <div className="bg-transparent border border-white/10 rounded-3xl shadow-lg shadow-blue-500/20 p-4 sm:p-6 md:p-8 max-w-3xl sm:max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-4 sm:mb-6">
          About MetaFest 2025
        </h1>
        <p className="text-sm sm:text-base font-medium text-blue-300 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8">
          MetaFest 2025 is the ultimate Web3 summit, uniting innovators, developers, and dreamers to shape the decentralized future. Join us on April 27, 2025, at No. 54 Remitino Palace for a day of groundbreaking talks, workshops, and networking in the heart of Nova Etheris, Italy.
        </p>
        <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">
          What You’ll Learn
        </h2>
        <ul className="text-sm sm:text-base text-blue-200 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 text-left list-disc pl-4 sm:pl-6">
          <li className="mb-2">
            Build <span className="font-bold">smart contracts</span> to power decentralized apps with hands-on coding sessions.
          </li>
          <li className="mb-2">
            Master <span className="font-bold">DeFi protocols</span> to revolutionize finance, guided by industry pioneers.
          </li>
          <li className="mb-2">
            Create <span className="font-bold">NFTs and digital art</span> for the metaverse, blending creativity and tech.
          </li>
          <li>
            Explore <span className="font-bold">Web3 governance</span> to lead DAOs and shape community-driven projects.
          </li>
        </ul>
        <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">
          Prizes
        </h2>
        <p className="text-sm sm:text-base font-medium text-blue-300 max-w-xl sm:max-w-2xl mx-auto mb-4 sm:mb-6">
          MetaFest 2025 will feature a <span className="font-bold">hackathon</span> with epic rewards for top builders.
        </p>
        <ul className="text-sm sm:text-base text-blue-200 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 text-left list-disc pl-4 sm:pl-6">
          <li className="mb-2">
            <span className="font-bold">10 ETH Prize Pool</span> for the best DApp, fueling your next big project.
          </li>
          <li className="mb-2">
            <span className="font-bold">Exclusive MetaFest NFT Collection</span> for winners, minted on Ethereum.
          </li>
          <li>
            <span className="font-bold">High-End VR Headset</span> to dive deeper into the metaverse.
          </li>
        </ul>
        <button
          onClick={scrollToTicketTiers}
          className="bg-blue-900 cursor-pointer text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-600 shadow-md shadow-blue-500/30 text-sm sm:text-base"
        >
          Get Your Ticket Now
        </button>
      </div>
    </div>
  );
}

export default About;