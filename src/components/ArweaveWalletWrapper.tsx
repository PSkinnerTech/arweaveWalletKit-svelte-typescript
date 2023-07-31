// src/components/ArweaveWalletWrapper.tsx
import React from "react";
import { ArweaveWalletKit } from "arweave-wallet-kit";
import { useConnection } from "arweave-wallet-kit";

const ArweaveWalletWrapper: React.FC = () => {
  const { connected, connect, disconnect } = useConnection();

  return (
    <ArweaveWalletKit>
      {connected ? (
        <button onClick={disconnect}>Disconnect Wallet</button>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </ArweaveWalletKit>
  );
};

export default ArweaveWalletWrapper;
