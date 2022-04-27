const Employee = require('../lib/employee');

describe('Employee class', () => {
	describe('Initialization', () => {
		it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			expect('name' in employee).toEqual(true);
		});
		it("should set 'name' when created", () => {
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			expect(employee.name).toBe('Jenny');
		});
		it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			expect('id' in employee).toEqual(true);
		});
		it("should set 'id' when created", () => {
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			expect(employee.id).toBe(2);
		});
		it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			expect('email' in employee).toEqual(true);
		});
		it("should set 'email' when created", () => {
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			expect(employee.email).toBe('jenny@hotmail.com');
		});
	});

	describe('getName', () => {
		it('should return employee name', () => {
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			expect(employee.getName()).toBe('Jenny');
		});
	});

	describe('getId', () => {
		it('should return id', () => {
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			expect(employee.getId()).toBe(2);
		});
	});

	describe('getEmail', () => {
		it('should return email', () => {
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			expect(employee.getEmail()).toBe('jenny@hotmail.com');
		});
	});

	describe('getRole', () => {
		it("should return 'Employee'", () => {
			const employee = new Employee('Jenny', 2, 'jenny@hotmail.com');
			expect(employee.getRole()).toBe('Employee');
		});
	});
});
