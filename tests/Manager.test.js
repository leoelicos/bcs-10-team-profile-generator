const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

describe('Manager class', () => {
	const manager = new Manager('Jenny', 2, 'jenny@hotmail.com', 23);
	const name = manager.name;
	const id = manager.id;
	const email = manager.email;
	const officeNumber = manager.officeNumber;
	const returnedName = manager.getName();
	const returnedId = manager.getId();
	const returnedEmail = manager.getEmail();
	const returnedRole = manager.getRole();

	describe('name', () => {
		it('should store manager name', () => {
			expect(name).toBe('Jenny');
		});
	});

	describe('id', () => {
		it('should store manager id', () => {
			expect(id).toBe(2);
		});
	});

	describe('email', () => {
		it('should store manager email', () => {
			expect(email).toBe('jenny@hotmail.com');
		});
	});

	describe('officeNumber', () => {
		it('should store manager office number', () => {
			expect(officeNumber).toBe(23);
		});
	});

	describe('getName', () => {
		it('should return manager name', () => {
			expect(returnedName).toBe('Jenny');
		});
	});

	describe('getId', () => {
		it('should return manager id', () => {
			expect(returnedId).toBe(2);
		});
	});

	describe('getEmail', () => {
		it('should return manager email', () => {
			expect(returnedEmail).toBe('jenny@hotmail.com');
		});
	});

	describe('getRole', () => {
		it("should return 'Manager'", () => {
			expect(returnedRole).toBe('Manager');
		});
	});
});
