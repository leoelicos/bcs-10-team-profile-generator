/* 
 Intern.js
 
 this file contains Intern class properties and methods
 Intern class is a child of Employee class

 Copyright Leo Wong 2022
 */

const Employee = require('./Employee');

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.role = 'Intern';
		this.school = school;
	}
}

Intern.prototype.getSchool = function () {
	return this.school;
};

Intern.prototype.getRole = function () {
	return this.role;
};

module.exports = Intern;
