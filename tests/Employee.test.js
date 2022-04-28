const Employee = require('../lib/Employee');

describe('Employee', () => {
	describe('initialization', () => {
		// positive test
		it("returns object with 'name' property set to 'name' argument when called with the 'new' keyword", () => {
			// arrange
			const name = 'Jenny';
			// act
			const employee = new Employee(name, 2, 'jenny@hotmail.com');
			// assert
			expect(employee.name).toBe(name);
		});

		// positive test
		it("returns object with 'id' property set to 'id' argument when called with the 'new' keyword", () => {
			// arrange
			const id = 2;
			// act
			const employee = new Employee('Jenny', id, 'jenny@hotmail.com');
			// assert
			expect(employee.id).toBe(id);
		});

		// positive test
		it("returns object with 'name', 'id', 'email' properties set to 'name', 'id', 'email' arguments when called with the 'new' keyword", () => {
			// arrange
			const email = 'jenny@hotmail.com';
			// act
			const employee = new Employee('Jenny', 2, email);
			// assert
			expect(employee.email).toBe(email);
		});

		// exception test
		it("throws error if non-empty 'name' param is not provided", () => {
			// arrange
			const cb = (badName) => new Employee(badName, 2, 'jenny@hotmail.com');
			const err = new Error("Expected parameter 'name' to be a non empty string");

			// assert
			expect(cb('')).toThrowError(err);
			expect(cb(' ')).toThrowError(err);
			expect(cb(2)).toThrowError(err);
			expect(cb(null)).toThrowError(err);
		});

		// exception test
		it("throws error if positive 'id' param is not provided", () => {
			// arrange
			const cb = (badId) => new Employee('Jenny', badId, 'jenny@hotmail.com');
			const err = new Error("Expected parameter 'id' to be positive integer");

			// assert
			expect(cb(-1)).toThrowError(err);
			expect(cb(0)).toThrowError(err);
		});

		// exception test
		it("throws error if non-empty and valid string 'email' param is not provided", () => {
			// arrange
			const cb = (badEmail) => new Employee('Jenny', 2, badEmail);
			const err = new Error("Expected parameter 'email' to be a non empty string");

			// assert
			expect(cb('')).toThrowError(err);
			expect(cb(' ')).toThrowError(err);
			expect(cb(2)).toThrowError(err);
			expect(cb(null)).toThrowError(err);
			expect(cb('jenny')).toThrowError(err);
			expect(cb('@.')).toThrowError(err);
			expect(cb('jenny@.')).toThrowError(err);
			expect(cb('@hotmail.')).toThrowError(err);
			expect(cb('@.com')).toThrowError(err);
			expect(cb('jenny@hotmail.')).toThrowError(err);
			expect(cb('jenny@.com')).toThrowError(err);
			expect(cb('@hotmail.com')).toThrowError(err);
			expect(cb('je nny@hotmail.com')).toThrowError(err);
			expect(cb('jenny@ho tmail.com')).toThrowError(err);
			expect(cb('jenny@hotmail.c om')).toThrowError(err);
		});
	});

	describe('getName', () => {
		// positive test
		it('returns employee name', () => {
			// arrange
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');

			// act
			const result = employee.getName();

			// assert
			expect(result).toBe('Jenny');
		});

		// positive test
		it('takes no params', () => {
			// arrange
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');

			// assert
			expect(employee.getName).toHaveBeenCalledWith();
		});
	});

	describe('getId', () => {
		// positive test
		it('returns employee id', () => {
			// arrange
			const id = 2;
			const employee = new Employee('Jenny', id, 'jenny@hotmail.com');

			// act
			const result = employee.getId();

			// assert
			expect(result).toBe(id);
		});

		// positive test
		it('takes no params', () => {
			// arrange
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');

			// assert
			expect(employee.getId).toHaveBeenCalledWith();
		});
	});

	describe('getEmail', () => {
		// positive test
		it('returns employee email', () => {
			// arrange
			const email = 'jenny@hotmail.com';
			const employee = new Employee('Jenny', 2, email);

			// act
			const result = employee.getEmail();

			// assert
			expect(result).toBe(email);
		});

		// positive test
		it('takes no params', () => {
			// arrange
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');

			// assert
			expect(employee.getEmail).toHaveBeenCalledWith();
		});
	});
});
