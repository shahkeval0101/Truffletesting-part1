const HelloWorld = artifacts.require('HelloWorld');

//There should be "co`ntract block" which is equivalent "describe block" in mocha
contract('HelloWorld',()=>{
	//inside contract` block we describe each stmt with it. "it" is function whose args is desc of test 
	it('should return hello world',async ()=>{//call back fn i.e aync await
		//grab the contract instance i.e the obj that points to the deployed contract on the blockchain....this is the first thing we want to do
	//creating the instance and await should have name of the smartcontract
	const helloWorld=await HelloWorld.deployed();//use this instance everywhere
	const result = await helloWorld.hello();//as in the function of the solidity contract this same as that in console we write
	assert(result==='Hello World')
	});
});

//whenever you call some function use awiat there