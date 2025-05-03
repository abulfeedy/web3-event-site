// wagmi.config.js
import { createConfig, http } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";
import { walletConnect, injected, coinbaseWallet } from "@wagmi/connectors";

const projectId = "c876ed30788812d65bc80a6decb9ba21"; 

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    walletConnect({ projectId }),
    injected({ target: "metaMask" }),
    coinbaseWallet(),
  ],
});