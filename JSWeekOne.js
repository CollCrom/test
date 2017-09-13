Math.PI; //number
"Collin Cromwell"; //string
[1, 3, 5, 7, 11]; //object
87; //number
true; //boolean

arr = [];
arr.push("Chicago");
arr.push("San Francisco");
arr.push("New York");
arr.shift();
arr.shift();
arr.push("Seattle");
arr.push("Austin");
arr.push("LA");
arr.pop();
arr[2] = "Japan";
arr[0] = "Where am I going?";
arr.push(8);

function canDrink(age){
	if(age < 21)
		console.log("Don't break the law!");
	else
		console.log("Go have a drink!");
}

function convertToC(fahrenheit){
	let celcius = Math.trunc((fahrenheit - 32) * 5 / 9);
	console.log(fahrenheit + " degrees fahrenheit is " + celcius + " degrees celcius");
}

for(let i = 50; i > 20; i--){
	if(i === 21){
		console.log(prompt('are you thirsty?'));
	}
}