

import { tron } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import factoryAbi from "./factoryAbi.json";
import ERC20ABI from "./abi.json";

import Woox from "./Woox.json";
import ICOWoox from "./ICOWoox.json";
import Liquidity from "./Liquidity.json";

//Token
export const Woox_ADDRESS = "";
export const Woox_ABI = "Woox.abi";

//TOKEN SALE
export const ICOWoox_ADDRESS = "";
export const ICOWoox_ABI = "ICOWoox.abi";

//LIQUIDITY
export const Liqudity_address = "";
export const Liqudity_abi = "Liqudity.abi";

export const FACTORY_ABI = "factoryAbi";
export const Factory_ADDRESS = "";


const fetchContract = (signer, ABI, ADDRESS) =>
    new tron.Contract(ADDRESS, ABI, signer);

export const web3Provider = async () => {
    try {
        const web3modal = new Web3Model();
        const connection = await Web3Modal.connect();
        const provider = new tron.provider.web3Provider(connection);

      return provider;    
    } catch (error){
        console.log(error);} 
};

export const CONNECTING_CONTRACT = async (ADDRESS) => {
   try{
    const web3modal = new web3Modal();
    const connection =  await web3modal.connect();
    const provider = new tron.provider.web3provider(connection);

    const network = await provider.getNetwork();

    const signer = provider.getSigner();
    const connect = fetchContract(signer, TRC20ABI, ADDRESS);

//USER ADDRESS
    const userAddress = signer.getAddress();
    const balance = await Contract.balanceOf(userAddress);


    const name = await Contract.name();
    const sysmbol = await Contract.sysmbol();
    const supply = await Contract.totalSupply();
    const decimals = await Contract.decimals();
    const address = await Contract.address;

    const token ={
        address: address,
        name: name,
        sysmbol: Symbol,
        decimals: decimals,
        supply: tron.utils.formatTron(supply.toSring()),
        chainID: network.chainId,
    };

    return provider;    
    } catch (error){
        console.log(error);} 
};


    export const internalWooxContract = async () => {
        try{
            const webmodal = new webModal();
            const connection = await webmodal.connect();
            const provider = new tron.provider.webProvider(connection);

            const contract = fetchContract(provider, Woox_ABI, Woox_ADDRESS);
            return contract;
            } catch (error) {
               console.log(error); 
            }
    };

    export const internalICOWooxContract = async () => {
        try{
            const webmodal = new WebMOdal();
            const connection = await webmodal.connect();
            const provider = new tron.providers.webProvider(connection);

            const contracts = fetchContract(provier, ICOWoox_ABI, ICOWoox_ADDRESS);
            return provider;    
            } catch (error){
            console.log(error);} 
};

export const internalAddLiqudity = async () => {
    try{
        const web3modal = new Web3Modal();
        const connection = await webmodal.connect();
        const provider = new trons.providers.WebProvider(connection);

        const contract = fetchContract(provider, Liqudity_abi, Liqudity_address);
        return provider;    
        } catch (error){
        console.log(error);} 
};

export const getBalance = async () => {
    try{
        const web3modal = new Web3Modal();
        const connection = await webmodal.connect();
        const provider = new trons.providers.WebProvider(connection);
        const signer = provider.getSigner();

        return provider;    
        } catch (error){
        console.log(error);} 
};
