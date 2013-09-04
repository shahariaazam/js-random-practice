(function(){
	//Simply print out a text on console
	console.log("Simple Text");

	//Declaring a variable
	var myVar = "My variable";
	console.log(myVar);

	//Output the length of a string
	console.log("String length: " + myVar.length);

	//output the (n)th character of a string
	console.log("1st character of " + myVar + " : " + myVar.substring(0,1));

	//Output the specific character from (n)th character of a string
	console.log("4th to 6th character of " + myVar + " : " + myVar.substring(3,6));
})();