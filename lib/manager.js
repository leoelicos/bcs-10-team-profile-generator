const Employee = require('./Employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);

		if (typeof officeNumber !== 'number') {
			throw new Error("Expected parameter 'officeNumber' to be positive integer");
		}
		if (officeNumber <= 0) {
			throw new Error("Expected parameter 'officeNumber' to be positive integer");
		}

		this.role = 'Manager';
		this.officeNumber = officeNumber;
	}

	getRole() {
		return this.role;
	}
}

module.exports = Manager;
