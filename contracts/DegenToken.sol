//Minting new tokens: The platform should be able to create new tokens and distribute them to players as rewards. Only the owner can mint tokens.
//Transferring tokens: Players should be able to transfer their tokens to others.
//Redeeming tokens: Players should be able to redeem their tokens for items in the in-game store.
//Checking token balance: Players should be able to check their token balance at any time.
//Burning tokens: Anyone should be able to burn tokens, that they own, that are no longer needed.

// inherited functions like approve, inc/dec allowance & tranferfrom are not overrided so they accept tokens in wei
// all required functions accept values in eth (1 * 10 ** decimals() wei) for convenience

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DegenToken is ERC20, Ownable {

    struct Item {
        string name;
        uint256 cost;
        address owner;
    }

    Item[] public items;

    constructor(uint256 initialSupply) ERC20("DegenToken", "DGN") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10 ** decimals());

        // Initialize redeemable items
        items.push(Item("Sword", 100 * 10 ** decimals(), address(0)));
        items.push(Item("Shield", 150 * 10 ** decimals(), address(0)));
        items.push(Item("Potion", 50 * 10 ** decimals(), address(0)));
        items.push(Item("Boots", 80 * 10 ** decimals(), address(0)));
        items.push(Item("Armor", 120 * 10 ** decimals(), address(0)));
        items.push(Item("Helmet", 90 * 10 ** decimals(), address(0)));
    }

    event TokensRedeemed(address indexed player, uint256 amount);
    event ItemRedeemed(address indexed player, uint256 itemId);

    function mint(address to, uint256 _amt) public onlyOwner {
        uint amount = _amt * 10 ** decimals();
        _mint(to, amount);
    }

    function transfer(address to, uint256 _amt) public override returns (bool) {
        uint amount = _amt * 10 ** decimals();
        _transfer(msg.sender, to, amount);
        return true;
    }

    function burn(uint256 _amt) public {
        uint amount = _amt * 10 ** decimals();
        _burn(msg.sender, amount);
    }

    function balanceOf(address account) public view override returns (uint256) {
        return super.balanceOf(account);
    }

    function redeemItem(uint256 itemId) public {
    require(itemId < items.length, "Invalid item ID"); // Ensure the item ID is valid
    Item storage item = items[itemId];
    require(balanceOf(msg.sender) >= item.cost, "Insufficient balance"); // Check if the sender has enough balance
    require(item.owner == address(0), "Item already redeemed"); // Ensure the item has not been redeemed before

    // If all conditions are met, burn the tokens and assign ownership of the item to the sender
    _burn(msg.sender, item.cost);
    item.owner = msg.sender;

    emit ItemRedeemed(msg.sender, itemId);
}

    function getAllItems() public view returns (Item[] memory) {
        return items;
    }
}
