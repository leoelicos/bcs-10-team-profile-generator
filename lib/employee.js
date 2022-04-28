class Employee {
	constructor(name, id, email) {
		if (typeof name != 'string') {
			const err = new Error("Expected parameter 'name' to be a non empty string");
			throw err;
		}
		if (typeof id != 'number') {
			const err = new Error("Expected parameter 'id' to be positive integer");
			throw err;
		}
		if (typeof email != 'string') {
			const err = new Error("Expected parameter 'email' to be a non empty string");
			throw err;
		}

		this.name = name;
		this.id = id;
		this.email = email;
	}
}
