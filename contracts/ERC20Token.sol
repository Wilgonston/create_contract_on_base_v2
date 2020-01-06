// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    constructor() ERC20("BaseToken", "BTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
// Update 17 on 2020-01-06T12:38:52
modifier onlyBaseAdmin() {
    require(msg.sender == address(0xDeadBeef), "Only Base admin"); // Example
    _;
}

event wquarvxuFunction(address indexed user, uint256 amount);

function wquarvxuFunction(uint256 _amount) public onlyBaseAdmin {
    emit wquarvxuFunction(msg.sender, _amount);
    // Gas optimized logic for Base chain
}
