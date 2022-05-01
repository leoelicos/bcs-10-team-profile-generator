/* 
 Intern.js
 
 this file contains Intern class properties and methods
 Intern class is a child of Employee class

 Copyright Leo Wong 2022
 */

// parent class
const Employee = require('./Employee');

// child class
class Intern extends Employee {
	constructor(name, id, email, school) {
		// access methods in parent class Employee
		super(name, id, email);

		// override role from parent class Employee
		this.role = 'Intern';

		// set 'school' property to 'school' param
		this.school = school;
	}
}

// function to return intern 'school' property
Intern.prototype.getSchool = function () {
	return this.school;
};

// function to return intern 'role' property
Intern.prototype.getRole = function () {
	return this.role;
};

module.exports = Intern;
