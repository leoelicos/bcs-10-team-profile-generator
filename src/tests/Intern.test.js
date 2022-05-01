const Intern = require('../../lib/Intern');
/* 
school
getSchool()
getRole()—overridden to return 'Intern'
*/
describe('Intern class', () => {
	describe('initialization', () => {
		// positive test
		it("returns object with 'school' property set to 'Harvard University' when called with the 'new' keyword and 'school' param is 'Harvard University'", () => {
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const school = 'Harvard University';
			const intern = new Intern(validName, validId, validEmail, school);
			expect(intern.school).toBe(school);
		});
	});

	describe('getSchool', () => {
		// positive test
		it("returns 'Harvard University' when Intern is called with the new keyword and 'school' param is 'Harvard University'", () => {
			// arrange
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const school = 'Harvard University';
			const intern = new Intern(validName, validId, validEmail, school);
			const result = intern.getSchool();

			// assert
			expect(result).toBe(school);
		});
	});

	describe('getRole', () => {
		// positive test
		it("returns 'Intern' when Intern is called with the new keyword", () => {
			// arrange
			const role = 'Intern';
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const school = 'Harvard University';
			const intern = new Intern(validName, validId, validEmail, school);
			const result = intern.getRole();

			// assert
			expect(result).toBe(role);
		});
	});
});
