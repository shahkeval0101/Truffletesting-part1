const SimpleSmartContract = artifacts.require('SimpleSmartContract.sol');

//There should be "contract block" which is equivalent "describe block" in mocha
contract('SimpleSmartContract',()=>{
	//inside contract block we describe each stmt with it. "it" is function whose args is desc of test 
	it('should deploy the smart contract properly',async ()=>{//call back fn i.e aync await
		//grab the contract instance i.e the obj that points to the deployed contract on the blockchain....this is the first thing we want to do
	//creating the instance and await should have name of the smartcontract
	const simpleSmartContract=await SimpleSmartContract.deployed();//use this instance everywhere
	console.log(simpleSmartContract.address);
	assert(simpleSmartContract.address !=='');//assert is a compare stmt
	});
});