import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x8cba3c22C46E82934d91A29a8636E82e62a95111";
export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/aWs56zcFrX4ldPHu4ZFet8HzRzmjfEfM",
  },
};
