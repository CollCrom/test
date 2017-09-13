// loops

const arr = [1, 2, 3];

for(let i = 0; i < arr.length; i++)
{
	console.log(arr[i]);
}

for(let i = 0; i < arr.length; i++)
{
	if(arr[i]%2)
		console.log('odd');
	else
		console.log('even');
}

for(let i = 0; i < 3; i++)
{
	console.log(arr.pop() + " has left the array");
}

const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true
};

for (let temp in turtle){
	turtle[temp] += 'kowabunga';
}


//1
for( let i = 0; i < 21; i++)
{
	if(i%2)
	{
		console.log(i, 'is odd');
	}
	else {
		console.log(i, 'is even');
	}
}

//2
let myBagOfBeans = 50;
for (i = 100; i > 0; i--){
	if(!(i%2)){
		myBagOfBeans += i;
		console.log(myBagOfBeans);
	}
}

//3
const arrayOfStringsRememberIcanNameMyVariablesAnythingIWant = ['cheese', 'pepperoni', 'sausage', 'coca cola', 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];
const drinks = [];
const food = [];
const sauces = [];

for (let i = 0; i < arrayOfStringsRememberIcanNameMyVariablesAnythingIWant.length; i++){
	let temp = arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i];
	if(temp === 'coca cola' || temp === 'lemonade' || temp === 'beer' || temp === 'wine'){
		drinks.push(temp);
	}
	else if(temp === 'cheese' || temp === 'pepperoni' || temp === 'sausage' || temp === 'dough'){
		food.push(temp);
	}
	else
		sauces.push(temp);
}

//4
const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]
const numArray = [];
for( let i = 0; i < mixedArray.length; i ++){
	if(typeof(mixedArray[i]) === 'number'){
		numArray.push(mixedArray[i]);
	}
}

//5
const food = ['bun', "jalepeno cheddar", "elk", "beef", "1954 ford mustang", 1.14, 1.23, 'hot dog', "gary clark jr", " I'lll never fall in love again", "mustard", "ketchup", 30, 50, 80, "grilled onions", "egg", "Dr. Suess"]
const dinner = [];
for (let i = 0; i < food.length; i++){
	if(food[i] == 'bun' || food[i] === "jalepeno cheddar" || food[i] === 'beef' || food[i] === 'mustard' || food[i] === 'ketchup' || food[i] === 'grilled onions' || food[i] === 'egg'){
		dinner.push(food[i]);
	}
}

//6
const colorObjects = {red: 'red', blue: 'blue', cyan: 'cyan'}
const seinfeld = {cosmo: "kramer", jerry: "Seinfeld", george: "constanza", elaine: "bennis"}
const profile = {name: "Elon Musk", occupation: "space man", hobbies: ["paypal", "space X", "rocket science"]}
for(let prop in colorObjects){
	console.log(prop);
}

//7
for(let prop in seinfeld){
	console.log(seinfeld[prop]);
}

//8
for(let prop in profile){
	console.log(prop);
}

//9

//for loop because its an arry
const oldTime = ["benton flippen", "carter family", "roscoe Holcomb", "gus cannon", "Tommy Jarrell"];
for ( let i = 0; i < oldTime.length; i++){
	console.log(oldTime[i]);
}

//10
//for in because sandwich is an object
const sandwhich = {name: "sunday morning special", bread: "ciabatta", cheese: "pepper jack", green: "arugala", redStuff: "cherry tomatoes", heated: true};
for ( let prop in sandwhich){
	console.log(prop, ':', sandwhich[prop]);
}

//11
//for loop because its an arry
const zeppelin = ["In through the out door", "Zep 1", "Zep 2", "Zep3", "Zep4", "Physical Graffiti"];
for (let i = 0; i < zeppelin.length; i++){
	console.log(zeppelin[i]);
}