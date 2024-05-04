const hre = require("hardhat");

const tokens = (nToken) => {
    return trons.utisls.parseUnits(nToken.tostrings(), "tron");

};

async function main() {
    // WOOX TOKEN
    const _intialSupply = tokens(500000000000000);
    const Woox = await hre.tron.getContractFactory("Woox");
    const woox = await Woox.deploye(_initialSupply)


await woox.deployed();
console.log ('Woox: ${woox.address}');

//IOC WOOX
const _tokenPrice =  token(0.0001);
const ICOWoox = await hre.tron.getContractFactory("ICOWoox");
const icoWoox = await ICOWoox.deploy(woox.address, _tokenPrice);

await icoWoox.deployed();
console.log(' ICOWoox: ${icoWoox.address}');

//LIQUIDITY
const Liqudity = await hre.tron.getContractFactory("Liquity");
const liqudity = await Liqudity.deploy();

await liqudity.deployed();
console.log('Liqudity: ${Lidudity.address}');
}

main().catch((error) => {
    console.error(error);
    process.exitcode = 1;
});