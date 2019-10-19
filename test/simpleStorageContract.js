const SimpleStorageContract = artifacts.require('SimpleStorageContract');

//There should be "contract block" which is equivalent "describe block" in mocha
contract('SimpleStorageContract',()=>{
	//inside contract block we describe each stmt with it. "it" is function whose args is desc of test 
	it('should set the value of the data variable',async ()=>{//call back fn i.e aync await
		//grab the contract instance i.e the obj that points to the deployed contract on the blockchain....this is the first thing we want to do
	//creating the instance and await should have name of the smartcontract
	const simpleStorageContract=await SimpleStorageContract.deployed();//use this instance everywhere
	await simpleStorageContract.set('this');
	const result=await simpleStorageContract.get();
	assert(result==='this');
	});
});