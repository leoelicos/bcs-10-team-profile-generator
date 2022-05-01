const Manager = require('../../lib/Manager');
/* 
officeNumber
getRole()—overridden to return 'Manager'
*/
describe('Manager class', () => {
	describe('initialization', () => {
		// positive test
		it("returns object with 'officeNumber' set to 10 when called with the 'new' keyword and 'officeNumber' param is 10", () => {
			// arrange
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const officeNumber = 10;
			const manager = new Manager(validName, validId, validEmail, officeNumber);

			//assert
			expect(manager.officeNumber).toBe(officeNumber);
		});

		// exception test
		it("throws error when Manager is called with the 'new' keyword and 'officeNumber' param is -1", () => {
			// arrange
			const validName = 'Jenny';
			const invalidOfficeNumber = -1;
			const validEmail = 'jenny@hotmail.com';
			const cb = () => new Manager(validName, invalidId, validEmail, invalidOfficeNumber);

			// assert
			expect(cb).toThrow();
		});

		// exception test
		it("throws error when Manager is called with the 'new' keyword and 'officeNumber' param is 0", () => {
			// arrange
			const validName = 'Jenny';
			const invalidOfficeNumber = 0;
			const validEmail = 'jenny@hotmail.com';
			const cb = () => new Manager(validName, invalidId, validEmail, invalidOfficeNumber);

			// assert
			expect(cb).toThrow();
		});
	});

	describe('getRole', () => {
		// positive test
		it("returns 'Manager' when Manager is called with the 'new' keyword", () => {
			// arrange
			const role = 'Manager';
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const officeNumber = 10;
			const manager = new Manager(validName, validId, validEmail, officeNumber);
			const result = manager.getRole();

			// assert
			expect(result).toBe(role);
		});
	});

	describe('getOfficeNumber', () => {
		// positive test
		it("returns 10 when Manager is called with the 'new' keyword and the 'officeNumber' param is 10", () => {
			// arrange
			const officeNumber = 10;
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const manager = new Manager(validName, validId, validEmail, officeNumber);
			const result = manager.getOfficeNumber();

			// assert
			expect(result).toBe(officeNumber);
		});
	});
});
