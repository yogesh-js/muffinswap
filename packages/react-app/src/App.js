import React from "react";
import { useEthers } from "@usedapp/core";

import styles from "./styles";
import { usePools } from "./hooks";
import { uniswapLogo } from "./assets";
import { Exchange, Loader, WalletButton } from "./components";

const App = () => {
  const { account } = useEthers();
  const [poolsLoading, pools] = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt="uniswap-logo"
            className="w-16 h-16 object-contain"
          />
          <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>MuffinSwap</h1>
          <p className={styles.subTitle}>Exchange tokens in an instant!</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="yellow_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet (Goerli Network)" />
                )}
              </div>
              <div className="red_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
