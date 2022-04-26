const Employee = require('../lib/employee');

describe('Employee class', () => {
	const name = 'Jenny';
	const id = 2;
	const email = 'jenny@hotmail.com';
	const employee = new Employee(name, id, email);
	const returnedName = employee.getName();
	const returnedId = employee.getId();
	const returnedEmail = employee.getEmail();
	const returnedRole = employee.getRole();

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
