const Employee = require('./Employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		if (typeof officeNumber !== 'number') throw new Error("Expected parameter 'officeNumber' to be positive integer");
		if (officeNumber <= 0) throw new Error("Expected parameter 'officeNumber' to be positive integer");
		super(name, id, email);

		this.role = 'Manager';
		this.officeNumber = officeNumber;
	}
}

Manager.prototype.getOfficeNumber = function () {
	return this.officeNumber;
};

Manager.prototype.getRole = function () {
	return this.role;
};

module.exports = Manager;
