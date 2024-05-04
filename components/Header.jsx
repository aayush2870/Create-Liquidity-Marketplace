import React from "react";
import { HeaderICON } from "./index"; // Assuming HeaderICON is a named export
import { shortAddress } from "../Utils/index"; // Assuming shortAddress is imported correctly

const Header = ({ setOpenAddpool, setOpenAllLiquidity, connect, address }) => {
  return (
    <header className="header" id="site-header">
      <div className="container">
        <div className="header-content-wrapper">
          <a href="/" className="site-logo">
            <img src="img/logo-primary.png" alt="Logo" />
            <HeaderICON /> {/* HeaderICON is a React component */}
          </a>
          <nav id="primary-menu" className="primary-menu">
            <ul className="primary-menu-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li
                onClick={() => setOpenAddpool(true)}
                className="menu-item-has-children"
              >
                <a>Add Pool</a>
              </li>
              <li
                onClick={() => setOpenAllLiquidity(true)}
                className="menu-item-has-children"
              >
                <a>Add Liquidity</a>
              </li>
              <li className="menu-item-has-children">
                <a>Coin Market</a>
              </li>
              <li>
                <a href="#tokenbuy">Buy Woox Token</a>
              </li>
              <li>
                {address ? (
                  <a
                    onClick={() => navigator.clipboard.writeText(address)}
                    className="btn btn--large btn--primary btn--transparent"
                  >
                    {shortAddress(address)}
                  </a>
                ) : (
                  <a
                    onClick={() => connect()}
                    className="btn btn--large btn--primary btn--transparent"
                  >
                    Connect Wallet
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
