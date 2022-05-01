/* 
 Engineer.test.js
 
 this file contains Jest methods to test the Engineer class

 Copyright Leo Wong 2022
 */

// library class
const Engineer = require('../../lib/Engineer');

// tests for Engineer class
describe('Engineer class', () => {
	describe('initialization', () => {
		// positive test
		it("returns object with 'github' property set to 'jenny22' when called with the 'new' keyword and 'github' param is 'jenny22'", () => {
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
		it("returns 'jenny22' when Engineer is called with the 'new' keyword and 'github' param is 'jenny22'", () => {
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
		it("returns 'Engineer' when Engineer is called with the 'new' keyword", () => {
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
