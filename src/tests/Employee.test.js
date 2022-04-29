const Employee = require('../../lib/Employee');

describe('Employee class', () => {
	describe('initialization', () => {
		// positive test
		it("returns object with 'name' property set to 'name' argument when called with the 'new' keyword", () => {
			// arrange
			const name = 'Jenny';
			const id = 2;
			const email = 'jenny@hotmail.com';
			// act
			const employee = new Employee(name, id, email);
			// assert
			expect(employee.name).toBe(name);
		});

		// positive test
		it("returns object with 'id' property set to 'id' argument when called with the 'new' keyword", () => {
			// arrange
			const name = 'Jenny';
			const id = 2;
			const email = 'jenny@hotmail.com';
			// act
			const employee = new Employee(name, id, email);
			// assert
			expect(employee.id).toBe(id);
		});

		// positive test
		it("returns object with 'email' property set to 'email' argument when called with the 'new' keyword", () => {
			// arrange
			const name = 'Jenny';
			const id = 2;
			const email = 'jenny@hotmail.com';
			// act
			const employee = new Employee(name, id, email);
			// assert
			expect(employee.email).toBe(email);
		});

		// exception test
		it("throws error if 'name' param is not a string", () => {
			// arrange
			const invalidName = 2;
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const cb = () => new Employee(invalidName, validId, validEmail);

			// assert
			expect(cb).toThrow();
		});

		// exception test
		it("throws error if 'name' param is empty string", () => {
			// arrange
			const invalidName = '';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const cb = () => new Employee(invalidName, validId, validEmail);

			// assert
			expect(cb).toThrow();
		});

		// exception test
		it("throws error if 'name' param trimmed is empty string", () => {
			// arrange
			const invalidName = ' ';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const cb = () => new Employee(invalidName, validId, validEmail);

			// assert
			expect(cb).toThrow();
		});

		// exception test
		it("throws error if 'name' param is null", () => {
			// arrange
			const invalidName = null;
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const cb = () => new Employee(invalidName, validId, validEmail);

			// assert
			expect(cb).toThrow();
		});

		// exception test
		it("throws error if positive 'id' param is not provided", () => {
			// arrange
			const validName = 'Jenny';
			const invalidId = -1;
			const validEmail = 'jenny@hotmail.com';
			const cb = () => new Employee(validName, invalidId, validEmail);

			// assert
			expect(cb).toThrow();
		});

		// exception test
		it("throws error if positive 'id' param is not provided", () => {
			// arrange
			const validName = 'Jenny';
			const invalidId = 0;
			const validEmail = 'jenny@hotmail.com';
			const cb = () => new Employee(validName, invalidId, validEmail);

			// assert
			expect(cb).toThrow();
		});

		// exception test
		// you can use test.each to loop through these
		it("throws error if non-empty and valid string 'email' param is not provided", () => {
			const invalidEmails = ['', ' ', 2, null, 'jenny', '@', '.', '@.', 'jenny@.', '@hotmail.', '@.com', 'jenny@hotmail.', 'jenny@.com', '@hotmail.com', 'je nny@hotmail.com', 'jenny@ho tmail.com', 'jenny@hotmail.c om'];
			invalidEmails.forEach((invalidEmail) => {
				let cb = () => new Employee(validName, validId, invalidEmail);
				expect(cb).toThrow();
			});
		});

		const validName = 'Jenny';
		const validId = 2;
		test.each(['', ' ', 2, null, 'jenny', '@', '.', '@.', 'jenny@.', '@hotmail.', '@.com', 'jenny@hotmail.', 'jenny@.com', '@hotmail.com', 'je nny@hotmail.com', 'jenny@ho tmail.com', 'jenny@hotmail.c om'])("throws error if non-empty and valid string 'email' param is not provided input %s", (input) => {
			let cb = () => new Employee(validName, validId, input);
			expect(cb).toThrow();
		});
	});

	describe('getName', () => {
		// positive test
		it('returns employee name', () => {
			// arrange
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			const result = employee.getName();

			// assert
			expect(result).toBe('Jenny');
		});
	});

	describe('getId', () => {
		// positive test
		it('returns employee id', () => {
			// arrange
			const id = 2;
			const employee = new Employee('Jenny', id, 'jenny@hotmail.com');
			const result = employee.getId();

			// assert
			expect(result).toBe(id);
		});
	});

	describe('getEmail', () => {
		// positive test
		it('returns employee email', () => {
			// arrange
			const email = 'jenny@hotmail.com';
			const employee = new Employee('Jenny', 2, email);
			const result = employee.getEmail();

			// assert
			expect(result).toBe(email);
		});
	});

	describe('getRole', () => {
		// positive test
		it("returns role of 'employee'", () => {
			// arrange
			const role = 'Employee';
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			const result = employee.getRole();

			// assert
			expect(result).toBe(role);
		});
	});
});