require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_TRON_RPC =
  "https://rpc.ankr.com/tron_jsonrpc";
const NEXT_PUBLIC_PRIVATE_KEY = "d56a720cd3d04d9a22e3780cd408b762ad47831cf26b37042a3e3931b3f64064";;
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "shasta",
  networks: {
    hardhat: {},
    tron: {
      url: NEXT_PUBLIC_TRON_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
