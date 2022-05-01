/* 
 Engineer.js
 
 this file contains Engineer class properties and methods
 Engineer class is a child of Employee class

 Copyright Leo Wong 2022
 */

// parent class
const Employee = require('./Employee');

// child class
class Engineer extends Employee {
	constructor(name, id, email, github) {
		// access methods in parent class Employee
		super(name, id, email);

		// override role from parent class Employee
		this.role = 'Engineer';

		// set 'github' property to 'github' param
		this.github = github;
	}
}

// function to return engineer 'github' property
Engineer.prototype.getGithub = function () {
	return this.github;
};

// function to return employee 'role' property
Engineer.prototype.getRole = function () {
	return this.role;
};

module.exports = Engineer;
