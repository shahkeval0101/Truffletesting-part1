pragma solidity ^0.5.2;

/**
 * The contract does this and that...
 */
contract SimpleStorageContract {
	string public data;

function set(string memory _data) public {
	data =_data;
}
function get() view public returns(string memory)
{
	return data;
}		
}

