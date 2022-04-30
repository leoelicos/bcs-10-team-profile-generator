/* 
generateQuestions.js

this file contains code to generate an array of questions based on an employee's role

Copyright Leo Wong 2022
*/

// utility function to create good-looking console logs
const chalkRender = require('./chalkRender');

// function to generate array of questions for user input
function generateQuestions(role) {
	return [
		{
			// employee name
			name: 'name',
			type: 'input',
			message: chalkRender.primary(role) + chalkRender.secondary(`What's the ${role}'s name?`),
		},

		{
			// employee id
			name: 'id',
			type: 'input',
			message: chalkRender.primary(role) + chalkRender.secondary(`What's the ${role}'s ID?`),
			validate(value) {
				const pass = value.match(/[0-9]+/);
				if (pass && +value > 0) return true;
				return 'Please enter a valid ID (positive numbers only)';
			},
		},

		{
			// employee email
			name: 'email',
			type: 'input',
			message: chalkRender.primary(role) + chalkRender.secondary(`What's the ${role}'s email?`),
			validate(value) {
				const pass = value.match(/.+@+.+\.+.+/);
				if (pass) return true;
				return 'Please enter a valid email (must contain @ and .)';
			},
		},

		{
			// employee details based on role
			name: 'details',
			type: 'input',
			message: chalkRender.primary(role) + chalkRender.secondary(`What's the ${role}'s ${role === 'Manager' ? 'office number' : role === 'Engineer' ? 'GitHub' : 'school'}?`),
			validate(value) {
				if (role === 'Manager') {
					const pass = value.match(/[0-9]+/);
					if (pass && +value > 0) return true;
					return 'Please enter a valid office number (positive numbers only)';
				}
				return true;
			},
		},

		{
			// option to add more employees
			name: 'menu',
			type: 'list',
			message: chalkRender.primary('Add') + chalkRender.secondary('Another team member?'),
			choices: ['Engineer', 'Intern', 'No more'],
		},
	];
}
module.exports = generateQuestions;
