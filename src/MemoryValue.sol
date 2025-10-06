//SPDX-License-Identifier:MIT

pragma solidity 0.8.19;

contract Value {
    uint256 internal latestValue;

    mapping(address => uint256) valueUser;

    function setValue(uint256 _value) public {
        latestValue = _value;
        valueUser[msg.sender] = _value;
    }

    function readValue() public view returns (uint256) {
        return latestValue;
    }

    function readValueForUser(address _user) public view returns (uint256) {
        return valueUser[_user];
    }
}
