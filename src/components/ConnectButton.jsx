import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <button
      onClick={() => open()}
      className="bg-blue-900 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-600 shadow-md shadow-blue-500/30 cursor-pointer text-sm sm:text-base"
    >
      {isConnected ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connect Wallet"}
    </button>
  );
}

export default ConnectButton;