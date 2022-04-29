const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
/* 
github—GitHub username
getGithub()
getRole()—overridden to return 'Engineer'
*/
describe('Engineer class', () => {
	describe('initialization', () => {
		// positive test
		it("returns object with 'name' property set to 'name' argument when called with the 'new' keyword", () => {
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const validGithub = 'jenny22';
			const engineer = new Engineer(validName, validId, validEmail, validGithub);
			expect(engineer.name).toBe('Jenny');
		});
		// positive test
		it("returns object with 'id' property set to 'id' argument when called with the 'new' keyword", () => {
			const validName = 'Jenny';
			const validId = 2;
			const validEmail = 'jenny@hotmail.com';
			const validGithub = 'jenny22';
			const engineer = new Engineer(validName, validId, validEmail, validGithub);
			expect(engineer.name).toBe('Jenny');
		});
	});

	describe('id', () => {
		it('should store engineer id', () => {
			expect(engineer.id).toBe(2);
		});
	});

	describe('email', () => {
		it('should store engineer email', () => {
			expect(engineer.email).toBe('jenny@hotmail.com');
		});
	});

	describe('github', () => {
		it('should store engineer github', () => {
			expect(engineer.github).toBe('jenny22');
		});
	});

	describe('getName', () => {
		it('should return engineer name', () => {
			expect(engineer.getName()).toBe('Jenny');
		});
	});

	describe('getId', () => {
		it('should return engineer id', () => {
			expect(engineer.getId()).toBe(2);
		});
	});

	describe('getEmail', () => {
		it('should return engineer email', () => {
			expect(engineer.getEmail()).toBe('jenny@hotmail.com');
		});
	});

	describe('getRole', () => {
		it("should return 'Engineer'", () => {
			expect(engineer.getRole()).toBe('Engineer');
		});
	});

	describe('getGitHub', () => {
		it('should return github username', () => {
			expect(engineer.getGithub()).toBe('jenny22');
		});
	});
});
