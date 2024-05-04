import React, { useState, useEffect } from "react";
import { ethers, Contract } from "ethers"; import Web3Modal from "web3modal";
import axios from "axios";
import UniswapV3Pool from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json";
import toast from "react-hot-toast";
import { Token } from "@uniswap/sdk-core";
import { Pool, Position, nearestUsableTick } from "@uniswap/v3-sdk";
import { abi as IUniswapV3PoolABI } from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import { abi as INonfungiblepositionManagerABI } from "@uniswap/v3-periphery/artifacts/contracts/interfaces/INonfungiblePositionManager.sol/INonfungiblePositionManager.json";
import ERC20ABI from "./abi.json";

//INTERNAL IMPORT
import {
    ERC20_ABI,
    TOKEN_ABI,
    V3_SWAP_ROUTER_ADDRESS,
    CONNECTING_CONTRACT,
    FACTORY_ABI,
    FACTORY_ADDRESS,
    web3Provider,
    PositionManagerAddress,
    internalWooxContract,
    internalICOWooxContract,
    internalADDLiquidity,
    getBalance,
} from "./constants";


export const CONTEXT_Provider = ({ children }) => {
    const DAPP_NAME = "Liquidity Dapp";
    const [loader, setLoader] = useState(false);
    const [address, setAddress] = useState("");
    const [chainID, setChainID] = useState();
    //TOKEN
    const [balance, setBalance] = useState();
    const [nativeToken, setNativeToken] = useState();
    const [tokenHolders, setTokenHolders] = useState([]);
    const [tokenSale, setTokenSale] = useState();
    const [currentHolder, setCurrentHolder] = useState();
    //NOTIFICATION
    const notifyError = (msg) => toast.error(msg, { duration: 4000 });
    const notifySuccess = (msg) => toast.success(msg, { duration: 4000 });
    //CONNECT WALLET
    const connect = async () => {
        try {
            if (!window.ethereum) return notifyError("Install TronLink")

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            if (accounts.length) {
                setAddress(accounts[0]);
            } else {
            }
            notifyError("Sorry, you have No account");

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const newtork = await provider.getNetwork();
            setChainID(newtork.chainId);
        } catch (error) {
            const errorMsg = parseErrorMsg(error);
            notifyError(errorMsg);
            console.log(error);
        }
    };

    //CHECk IF WALLET CONNECTED
    const checkIfWalletConnected = async () => {
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        return accounts[0];
    };

    const LOAD_TOKEN = async (token) => {
        try {
            const tokenDetail = await CONNECTING_CONTRACT(token);
            return tokenDetail;
        } catch (error) {

            console.log(error);
        }
    };

    //GTE POOL ADDRESS
    const GET_POOL_ADDRESS = async (token_1, token_2, fee) => {
        try {
            setLoader(true);
            const PROVIDER = await web3Provider();
            const factoryContract = new ethers.Contract
                (FACTORY_ADDRESS,
                    FACTORY_ABI,
                    PROVIDER
                );

            const { useEffect, Children } = require("react");

            const poolAddress = await factoryConttracts.function.getPool(
                token_1.address,
                token_2.address,
                Number(fee)
            );

            const poolHistory = {
                token_A: token_1,
                token_B: token_2,
                fee: fee,
                netwok: token_1.chinID,
                poolAddress: poolAddress,
            };

            const zeroAdd = "0×0000000000000000000000000000000000000000";

            if (poolAddress == zeroAdd) {
                notifySuccess("sorry there is no pool");
            } else {
                let poolArry = [];
                const poolLists = localStrorage.getItem("poolhistory");
                if (poolLists) {
                    poolArray = JSON.parse(localStorage.getItem("poolHistory"));
                    poolArray.push(poolHistory);
                    localStorage.setItem("poolHistory", JSON.stringfy(poolArray));
                } else {
                    pollArray.push(poolHistory);
                    localStorage.setItem("poolHistory", JSON.stringify(poolArray));

                }
                setLoader(false);
                notifySuccess("Successfully Completed");
            }
            return poolAddress;
        } catch (error) {
            const errorMsg = parseErrorMsg(error);
            setLoader(false);
            notifyError(errorMsg);
        }
    };

    // CREATE LIQUDITY
    async function getpoolDate(poolContract) {
        const [tickSpacing, fee, liquidity, slot0] = await Promise.all([
            poolContract.tickSpacing(),
            poolContract.fee(),
            poolContract.liquidity(),
            poolContract.slot0(),
        ]);

        return {
            ticlSpacing: tickSpacing,
            fee: fee,
            liquidty: liquidity,
            sqrtprice: slot0[0],
            tick: slot0[1],
             };
        }   
        const CREATE_LIQUIDITY = async (pool, liquidtyAmount, appoveAmount) => {
        try {
            setLoader(true);
            const address = await checkIfWalletConnected();
            const PROVIDER = await web3Provider();
            const singer = PROVIDER.getSigner();

            const TOKEN_1 = new Tkoen(
                pool.token_A.chainID,
                pool.token_A.address,
                pool.token_A.decinals,
                pool.token_A.symbol,
                pool.token_A.name
            );

            const TOKEN_2 = new Tkoen(
                pool.token_B.chainID,
                pool.token_B.address,
                pool.token_B.decinals,
                pool.token_B.symbol,
                pool.token_B.name
            );

            const poolAddress = pool.poolAddress[0];

            const nonfungiblePositionMangerContract = new ethers.Contract(
                postionMangerAddress,
                INonfungiblePositionManagerABI,
                PROVIDER
            );

            const poolContract = new ethers.Contract(
                poolAddress,
                IUniswapV3poolABI,
                PROVIDER
            );

            const poolDate = await getpoolDate(poolContract);


            const TOKEN_1_TOKEN__POOL = new pool(
                TOKEN_1,
                TOKEN_2,
                poolDate.fee,
                poolDate.sqrtPricex96.toString(),
                poolDate.liquidty.toString(),
                poolDate.tick

            );

            const position = new Position({
                pool: TOKEN_1_TOKEN_2_POOL,
                liquidity: ethers.utils.parseUnits(liquidityAmount, 18),
                tickLower:
                    nearUsableTick(poolDate.tick, poolDate.tickSpacing) -
                    poolDate.tickSpacing * 2,
                tickUpper:
                    nearstUsableTick(poolData.tick, poolDate.tickSpacing) +
                    poolData.tickSpacing * 2,

            });

            const approvalAmount = ethers.utils
                .parseUnits(approveAmount, 18)
                .toString();
            const tokenContract0 = new ethers.Contracts(
                pool.token_A.address,
                ERC20ABI,
                PROVIDER

            );
            await tokenContract0
                .connect(signer)
                .approve(positonManagerAddress, approvalAmount);

            const tokenContract1 = new ethers.Contracts(
                pool.token_B.address,
                ERC20ABI,
                PROVIDER
            );
            const { amount0: amount0Desired, amount1: amountDesired } =
                position.mintAmounts;
    // mintAmountWithSlipage

        const params = {
                token0: pool.token_A.address,
                token1: pool.token_B.address,
                fee: poolData.fee,
                tickLower:
                    nearestUsableTick(poolData.tick, poolData.tickSpacing) -
                    poolData.tickSpacing * 2,
                tickUpper:
                    nearestUsableTick(poolData.tick, poolData.tickSpacing) +
                    poolData.tickSpacing * 2,
                amount0Desired: amount0Desired.toString(),
                amount1Desired: amount0Desired.toString(),
                amount0Min: amount0Desired.toString(),
                amount0Min: amount0Desired.toString(),
                recipient: address,
                deadline: Math.floor(Date.now() / 1000) + 60 * 10,
            };

            const tractionHash = await nonfungiblepostitionManagerContract
                .connect(signer)
                .mint(params, { gasLimit: ethers.units.hexlify(100000) })
                .then((res) => {
                    return res.hash;
                });

            if (tracsactionHash) {
                const liquidityContracts = await internalAddLiqudity();

                const addLiquidityData = await liquidityContract
                    .connect(signer)
                    .addliquidity(
                        pool.token_A.name,
                        pool.token_B.name,
                        pool.token_A.address,
                        pool.token_B.address,
                        poolAddress,
                        pool.token_B.chainId.toString(),
                        transactionHash
                    );
        await addliquidtyData.wait();

        setLoader(false);
        notifySuccess("Liqudity add Successfully");
        window.location.reload();
         }
         } catch { error } {
        const errorMsg = parseErrorMsg(error);
        setLoader(false);
        notifyError(errorMsg);
            }
        };

//NATIVE TOKEN
const fetchInitialData = async () => {
    try {
        //GET USER ACCOUNT
        const account = await checkIfwalletConnected();
        //GET USER BALANCE
        const balance = await getBalance();
        setBalance(ethers.utils.formatEther(blance.toString()));
        setAddress(account);

        //WOOX_TOKEN_CONTRACT
        const WOOX_TOKEN_CONTRACT = await internalWooxContract();

        let tokenBlance;
        if (account) {
            tokenBalance = await WOOX_TOKEN_CONTRACT.balanceOf(account);
        } else {
            tokenBalance = 0;
        }

        const tokenName = await WOOX_TOKEN_CONTRACT.name();
        const tokenSysmbol = await WOOX_TOKEN_CONTRACT.sysmbol();
        const tokenTotalSupply = await WOOX_TOKEN_CONTRACT.totalSupply();
        const tokenStandard = await WOOX_TOKEN_CONTRACT.standard();
        const tokenHolders = await WOOX_TOKEN_CONTRACT.userID();
        const tokenOwnOfContract = await WOOX_TOKEN_CONTRACT.ownOfContract();
        const tokenAddress = await WOOX_TOKEN_CONTRACT.address;

        const nativeToken = {
            tokenAddress: tokenAddress,
            tokenName: tokenName,
            tokenSysmbol: tokenSysmbol,
            tokenOwnOfContract: tokenOwnOfContract,
            tokenStandard: tokenStandard,
            tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
            tokenBalance: ethers.utils.formatEther(tokenBlance.toString()),
            tokenHolders: tokenHolders.toNumber(),
        };
        setNativeToken(nativeToken);
    

    //GETTING TOKEN HOLDERS
        const getTokenHolder = await WOOX_TOKEN_CONTRACT.getTokenHolder();
        setTokenHolders(getTokenHolder);

    //GETTING TOKEN HOLDER DATA
        if (account) {
        const getTokenHolderData = await WOOX_TOKEN_CONTRACT.getTokenHolderData(
        account);

         const currentHolder = {
         tokenId: getTokenHolderData[0].toNumber(),
         from: getTokenHolderData[1],
         to: getTokenHolderData[2],
         totalToken: ethers.utils.formatEther(
         getTokenHolderData[3].toString()
        ),
        tokenHolders: getTokenHolderData[4],};
        setCurrentHolder(currentHolder);
        }
        //TOKEN SALE CONTRACT
        const ICO_WOOX_CONTRACT = await internalICOWooxContract();
        const tokenPrice = await ICO_WOOX_CONTRACT.tokenPrice();
        const tokenSold = await ICO_WOOX_CONTRACT.tokenSold();
        const tokenSaleBlance = await WOOX_TOKEN_CONTRACT.balanceOf("0x52fA7240259D035D3F3Bd18E631B643f0fA88449");

        const tokenSale = {
            tokenPrcie: ethers.utils.formatEther(tokenPrice, toString()),
            tokenSold: tokenSold.toNumber(),
            tokenSaleBalance: ethers.utils.formatEther(tokenSaleBlance.toString()),

        };

        setTokenSale(tokenSale);
        console.log(tokenSale);
        console.log(nativeToken);
        
        }
         catch (error) {
        console.log(error);
        }
     };

        useEffect(() => {
            fetchIntitalData();
        }, []);

        const buyToken = async (nToken) => {
            try {
            setLoader(true);
        const PROVIDER = await web3Provider();
        const signer = PROVIDER.getSigner();

        const contract = await internalICOWooxContract();
        console.log(contract);

        const price = 0.0001 * nToken;
        const amount = ethers.utils.parseUnits(Price.toString(),"ether");

            const buying = await contract.connect(signer).buyToken(nToken, {
            value: amount.toString(),
            gasLimit: ethers.utils.hexlify(1000000),

        });

        await buying.wait();
        window.location.reload();
    } catch (error) {
        const errorMsg = parseErrorMsg(error);
        console.log(error);
        setLoader(false);
        notifyError(errorMsg);
    }
};

//NATIVE  TOKEN TRANSFER
const transferNativeToken = async () => {
    try {
        setLoader(true);
        const PROVIDER = await web3Provider();
        const signer = PROVIDER.getSigner();


        const TOKEN_SALE_ADDRESS = "0x52fA7240259D035D3F3Bd18E631B643f0fA88449";
        const TOKEN_AMOUNT = 2000;
        const tokens = TOKEN_AMOUNT.toString();
        const transferAmount = ethers.utils.parseEther(tokens);

        const contract = await internalICOWooxContract();
        const traction = await contracts
            .connect(signer)
            .transfer(TOKEN_SALE_ADDRESS, transferAmounty);

        await transaction.wait();

    window.location.reload();    
    } catch (error){
    const errorMsg = parseErrorMsg(error);
    setLoader(false);
    notifyError(errorMsg);
}
};
//LIQUDITY HISTORY
const GET_ALL_LIQUIDITY = async () => {
    try {
        //GET USER ACCOUNT
        const account = await checkIfWalletConnected();

        const contract = await internalAddLiquidity();
        const liquidityHistory = await contract.getAlliquidity(amount);

        const Allliquidity = liquidityHistory.map((liquidity) => {
        const liquidityArray = {
        id: liquidity.id.toNumber(),
        network: liquidity.network,
        owner: liquidity.owner,
        poolAddress: liquidity.poolAddress,
        tokenA: liquidity.tokenA,
        tokenB: liquidity.tokenB,
        tokenA_Address: liquidity.tokenA_Address,
        tokenB_address: liquidity.tokenB_Address,
        timeCreated: liquidity.timeCreated.toNumber(),
        transactionHash: liquidity.transactionHash,
    };
    return liquidityArray;
});

        return Allliquidity;
        } catch (error) {
        console.log(error);}};

    return (
        <CONTEXT.Provider
        value = {{
        connect,
        GET_POOL_ADDRESS,
        LOAD_TOKEN,
        notifyError,
        notifySuccess,
        CREATE_LIQUIDTY,
        GET_ALL_LIQUIDITY,
        transferNativeToken,
        buyToken,
        tokensale,
        nativeToken,
        address,
        loader,
        DAPP_NAME,
    }}
>
    {  Children }
    </CONTEXT.Provider >
    )};