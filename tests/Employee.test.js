const Employee = require('../lib/employee');

describe('Employee class', () => {
	describe('Initialization', () => {
		it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const employee = new Employee(testName, testId, testEmail);
			expect('name' in employee).toEqual(true);
		});
		it("should set 'name' when created", () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const employeeName = new Employee(testName, testId, testEmail).name;
			expect(employeeName).toBe(testName);
		});
		it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const employee = new Employee(testName, testId, testEmail);
			expect('id' in employee).toEqual(true);
		});
		it("should set 'id' when created", () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const employeeId = new Employee(testName, testId, testEmail).id;
			expect(employeeId).toBe(testId);
		});
		it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const employee = new Employee(testName, testId, testEmail);
			expect('email' in employee).toEqual(true);
		});
		it("should set 'email' when created", () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const employeeEmail = new Employee(testName, testId, testEmail).email;
			expect(employeeEmail).toBe(testEmail);
		});
	});

	describe('getName', () => {
		it('should return a string', () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const str = new Employee(testName, testId, testEmail).getName();
			expect(typeof str).toBe('string');
		});
		it('should return employee name', () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const employee = new Employee(testName, testId, testEmail);
			expect(employee.getName()).toBe(testName);
		});
	});

	describe('getId', () => {
		it('should return a string', () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const str = new Employee(testName, testId, testEmail).getId();
			expect(typeof str).toBe('string');
		});
		it('should return id', () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const employee = new Employee(testName, testId, testEmail);
			expect(employee.getId()).toBe(testId);
		});
	});

	describe('getEmail', () => {
		it('should return a string', () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const str = new Employee(testName, testId, testEmail).getEmail();
			expect(typeof str).toBe('string');
		});
		it('should return email', () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const str = new Employee(testName, testId, testEmail).getEmail();
			expect(str).toBe(testEmail);
		});
	});

	describe('getRole', () => {
		it('should return a string', () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const str = new Employee(testName, testId, testEmail).getRole();
			expect(typeof str).toBe('string');
		});
		it("should return 'Employee'", () => {
			const testName = 'Jenny';
			const testId = 2;
			const testEmail = 'jenny@hotmail.com';
			const str = new Employee(testName, testId, testEmail).getRole();
			expect(str).toBe('Employee');
		});
	});
});
