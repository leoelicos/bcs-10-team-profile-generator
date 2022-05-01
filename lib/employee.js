/* 
 Employee.js
 
 this file contains Employee class properties and methods
 Employee class is the parent of Engineer, Intern and Manager classes

 Copyright Leo Wong 2022
 */

class Employee {
	constructor(name, id, email) {
		if (typeof name !== 'string') throw new Error("Expected parameter 'name' to be a non empty string");
		if (name.trim().length === 0) throw new Error("Expected parameter 'name' to be a non empty string");
		if (typeof id !== 'number') throw new Error("Expected parameter 'id' to be positive integer");
		if (id <= 0) throw new Error("Expected parameter 'id' to be positive integer");
		if (typeof email !== 'string') throw new Error("Expected parameter 'email' to be a string");
		if (!email.trim().length) throw new Error("Expected parameter 'email' to be a non empty string");
		if (!email.trim().match(/.+@+.+\.+.+/)) throw new Error("Expected parameter 'email' to be of the form ___@___.___");
		if (email.trim().match(/  */)) throw new Error('Expected an email without any spaces');

		this.name = name;
		this.id = id;
		this.email = email;
		this.role = 'Employee';
	}
}

// function to return employee 'name' property
Employee.prototype.getName = function () {
	return this.name;
};

// function to return employee 'id' property
Employee.prototype.getId = function () {
	return this.id;
};

// function to return employee 'email' property
Employee.prototype.getEmail = function () {
	return this.email;
};

// function to return employee 'role' property
Employee.prototype.getRole = function () {
	return this.role;
};

module.exports = Employee;
