const Engineer = require('../../lib/Engineer');
/* 
github—GitHub username
getGithub()
getRole()—overridden to return 'Engineer'
*/
describe('Engineer class', () => {
	describe('initialization', () => {
		// positive test
		it("returns object with 'github' property set to 'github' argument when called with the 'new' keyword", () => {
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const validGithub = 'jenny22';
			const engineer = new Engineer(validName, validId, validEmail, validGithub);
			expect(engineer.github).toBe(validGithub);
		});
	});

	describe('getGithub', () => {
		// positive test
		it("returns employee's github", () => {
			// arrange
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const validGithub = 'jenny22';
			const engineer = new Engineer(validName, validId, validEmail, validGithub);
			const result = engineer.getGithub();

			// assert
			expect(result).toBe(validGithub);
		});
	});

	describe('getRole', () => {
		// positive test
		it("returns role of 'Engineer'", () => {
			// arrange
			const role = 'Engineer';
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const validGithub = 'jenny22';
			const engineer = new Engineer(validName, validId, validEmail, validGithub);
			const result = engineer.getRole();

			// assert
			expect(result).toBe(role);
		});
	});
});
