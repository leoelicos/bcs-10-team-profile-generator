const Employee = require('../lib/employee');

describe('Employee class', () => {
	describe('getName', () => {
		it('should return employee name', () => {
			expect(new Employee('Jenny', 2, 'jenny@hotmail.com').getName()).toBe('Jenny');
		});
	});

	describe('getId', () => {
		it('should return id', () => {
			expect(new Employee('Jenny', 2, 'jenny@hotmail.com').getId()).toBe(2);
		});
	});

	describe('getEmail', () => {
		it('should return email', () => {
			expect(new Employee('Jenny', 2, 'jenny@hotmail.com').getEmail()).toBe('jenny@hotmail.com');
		});
	});

	describe('getRole', () => {
		it("should return 'Employee'", () => {
			expect(new Employee('Jenny', 2, 'jenny@hotmail.com').getRole()).toBe('Employee');
		});
	});
});
