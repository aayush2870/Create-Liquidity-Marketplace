// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Liqudity 
{
    
    address public admin;
    mapping(address => LiquidityInfo[]) public Liquidities;
    uint256 public liquidityID;
    
    struct LiquidityInfo {
        uint256 id;
        address owner;
        string tokenA;
        string tokenB;
        string tokenA_Address;
        string tokenB_Address;
        string poolAddress;
        string network;
        string transactionHash;
        uint256 timeCreated;
        
    }

    modifier onlyAdmin() 
        {
            require(msg.sender == admin, "only admin can call this function");
            _;
            
        }
        
        constructor() 
        {
            admin = msg.sender;
        }
        
    function addliquidity(
        string memory _tokenA,
        string memory _tokenB,
        string memory _tokenA_Address,
        string memory _tokenB_Address,
        string memory _poolAddress,
        string memory _network,
        string memory _transactionhash
        ) external {
            liquidityID++;
            uint256 currentLiquidityID = liquidityID;
            
            Liquidities[msg.sender].push(LiquidityInfo({
                id: currentLiquidityID,
                owner: msg.sender,
                tokenA: _tokenA,
                tokenB: _tokenB,
                tokenA_Address: _tokenA_Address,
                tokenB_Address: _tokenB_Address, 
                poolAddress: _poolAddress,
                network: _network,
                transactionHash: _transactionhash,
                timeCreated: block.timestamp 
                
            }));
        }
        
    function getAllLiquidity(address _address) public view returns (LiquidityInfo[] memory){
             return Liquidities [_address];
            }
        
    function transferEther() external payable 
    {
            require(msg.value > 0, "Amount shuold be greater than 0");
        
        
        // Transfer Ether to the specified address 
        (bool success,  ) = admin.call{value: msg.value}("");
        require(success, "Transfer failed");
    }       
}