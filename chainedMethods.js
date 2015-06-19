
// Define the constructor function
function Person(firstName, gender, age){
	this.firstName = firstName;
	this.gender = gender;
	this.age = age;
};

// either define the following methods in the constructor above or add them in using prototype after setting up the initial constructor template
Person.prototype.setFirstName = function(firstName){
	this.firstName = firstName;
	return this;
};

Person.prototype.setGender = function(gender){
	this.gender = gender;
	return this;
};

Person.prototype.setAge = function(age){
	this.age = age;
	return this;
};

//Instantiate an object instance of Person
var visitor = new Person();

//Call the methods in chained manner
$(document).ready(function(){
	console.log("ready!");
	visitor.setFirstName('Alpha').setAge(22).setGender("male");
	console.log("firstName: " + visitor.firstName + " gender: " + visitor.gender + " age: " + visitor.age);
});

//The key to achieving the chained method call is to use the following line in each of the methods defined on the constructor
//return this;


