/* 
 Manager.js
 
 this file contains Manager class properties and methods
 Manager class is a child of Employee class

 Copyright Leo Wong 2022
 */

// parent class
const Employee = require('./Employee');

// child class
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		// param validation: officeNumber
		if (typeof officeNumber !== 'number') throw new Error("Expected parameter 'officeNumber' to be positive integer");
		if (officeNumber <= 0) throw new Error("Expected parameter 'officeNumber' to be positive integer");

		// access methods in parent class Employee
		super(name, id, email);

		// override role from parent class Employee
		this.role = 'Manager';

		// set 'officeNumber' property to 'officeNumber' param
		this.officeNumber = officeNumber;
	}
}

// function to return manager 'officeNumber' property
Manager.prototype.getOfficeNumber = function () {
	return this.officeNumber;
};

// function to return manager 'role' property
Manager.prototype.getRole = function () {
	return this.role;
};

module.exports = Manager;
