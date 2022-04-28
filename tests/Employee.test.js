const Employee = require('../lib/Employee');

describe('Employee class', () => {
	describe('initialization', () => {
		// positive tests
		it("returns object with 'name', 'id', 'email' properties set to 'name', 'id', 'email' arguments when called with the 'new' keyword", () => {
			// arrange
			const name = 'Jenny';
			const id = 2;
			const email = 'jenny@hotmail.com';
			// act
			const employee = new Employee(name, id, email);
			// assert
			expect(employee.name).toBe(name);
			expect(employee.id).toBe(id);
			expect(employee.email).toBe(email);
		});

		// exception tests
		it("throws error if non-empty 'name' param is not provided", () => {
			// arrange
			const cb = () => new Employee(2, 2, 'jenny@hotmail.com');
			const err = new Error("Expected parameter 'name' to be a non empty string");

			// assert
			expect(cb).toThrowError(err);
			/* 			expect(cb('')).toThrowError(err);
			expect(cb(' ')).toThrowError(err);
			expect(cb(null)).toThrowError(err); */
		});

		// exception tests
		it("throws error if positive 'id' param is not provided", () => {
			// arrange
			const cb = () => new Employee('Jenny', -1, 'jenny@hotmail.com');
			const err = new Error("Expected parameter 'id' to be positive integer");

			// assert
			expect(cb).toThrowError(err);
			/* 			expect(cb(0)).toThrowError(err); */
		});

		// exception tests
		it("throws error if non-empty and valid string 'email' param is not provided", () => {
			// arrange
			const cb = () => new Employee('Jenny', 2, '');
			const err = new Error("Expected parameter 'email' to be a non empty string");

			// assert
			expect(cb).toThrowError(err);
			/* 			expect(cb(' ')).toThrowError(err);
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
			expect(cb('jenny@hotmail.c om')).toThrowError(err); */
		});
	});

	describe('getName', () => {
		// positive test
		it('returns employee name', () => {
			// arrange
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			const cb = () => employee.getName();

			// assert
			expect(cb).toBe('Jenny');
		});
	});

	describe('getId', () => {
		// positive test
		it('returns employee id', () => {
			// arrange
			const id = 2;
			const employee = new Employee('Jenny', id, 'jenny@hotmail.com');
			const cb = () => employee.getId();

			// assert
			expect(cb).toBe(id);
		});
	});

	describe('getEmail', () => {
		// positive test
		it('returns employee email', () => {
			// arrange
			const email = 'jenny@hotmail.com';
			const employee = new Employee('Jenny', 2, email);
			const cb = () => employee.getEmail();

			// assert
			expect(cb).toBe(email);
		});
	});
});
