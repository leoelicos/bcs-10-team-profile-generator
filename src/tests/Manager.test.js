const Manager = require('../../lib/Manager');
/* 
officeNumber
getRole()—overridden to return 'Manager'
*/
describe('Manager class', () => {
	describe('initialization', () => {
		// positive test
		it("returns object with 'officeNumber' property set to 'officeNumber' argument when called with the 'new' keyword", () => {
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
		it("throws error if positive 'officeNumber' param is not provided", () => {
			// arrange
			const validName = 'Jenny';
			const invalidOfficeNumber = -1;
			const validEmail = 'jenny@hotmail.com';
			const cb = () => new Manager(validName, invalidId, validEmail, invalidOfficeNumber);

			// assert
			expect(cb).toThrow();
		});

		// exception test
		it("throws error if positive 'officeNumber' param is not provided", () => {
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
		it("returns role of 'Manager'", () => {
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
});
