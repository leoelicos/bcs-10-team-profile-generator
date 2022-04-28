class Employee {
	constructor(name, id, email) {
		if (typeof name !== 'string') {
			throw new Error("Expected parameter 'name' to be a non empty string");
		}

		if (name.trim().length === 0) {
			throw new Error("Expected parameter 'name' to be a non empty string");
		}
		if (typeof id !== 'number') {
			throw new Error("Expected parameter 'id' to be positive integer");
		}
		if (id <= 0) {
			throw new Error("Expected parameter 'id' to be positive integer");
		}
		if (typeof email !== 'string') {
			throw new Error("Expected parameter 'email' to be a non empty string");
		}
		if (email.trim().length === 0) {
			throw new Error("Expected parameter 'email' to be a non empty string");
		}

		this.name = name;
		this.id = id;
		this.email = email;
	}
}

module.exports = Employee;
