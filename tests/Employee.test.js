const Employee = require('../lib/employee');

describe('Employee class', () => {
	const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
	const name = employee.name;
	const id = employee.id;
	const email = employee.email;
	const returnedName = employee.getName();
	const returnedId = employee.getId();
	const returnedEmail = employee.getEmail();
	const returnedRole = employee.getRole();

	describe('name', () => {
		it('should store employee name', () => {
			expect(name).toBe('Jenny');
		});
	});

	describe('id', () => {
		it('should store id', () => {
			expect(id).toBe(2);
		});
	});

	describe('email', () => {
		it('should store email', () => {
			expect(email).toBe('jenny@hotmail.com');
		});
	});

	describe('getName', () => {
		it('should return employee name', () => {
			expect(returnedName).toBe('Jenny');
		});
	});

	describe('getId', () => {
		it('should return id', () => {
			expect(returnedId).toBe(2);
		});
	});

	describe('getEmail', () => {
		it('should return email', () => {
			expect(returnedEmail).toBe('jenny@hotmail.com');
		});
	});

	describe('getRole', () => {
		it("should return 'Employee'", () => {
			expect(returnedRole).toBe('Employee');
		});
	});
});
