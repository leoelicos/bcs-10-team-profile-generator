/* 
 getMember.js
 
 this file contains code to call the user for information

 Copyright Leo Wong 2022
 */

// package inquirer to handle prompts
const inquirer = require('inquirer');

// utility function to get an array of relevant questions
const generateQuestions = require('./generateQuestions');

// library classes with which to instantiate employees using the prompted data
const Employee = require('../../lib/Employee');
const Manager = require('../../lib/Manager');
const Engineer = require('../../lib/Engineer');
const Intern = require('../../lib/Intern');

// function to recursively call inquirer to prompt the user for information about the team members
// param role is either 'Manager', 'Engineer' or 'Intern'
async function getMember(employees, role) {
	// call generateQuestions to get an array of suitable questions for the role arg
	const questions = generateQuestions(role);

	// call inquirer prompt to prompt the user about the role arg
	const data = await inquirer.prompt(questions);

	// create class Employee based on this data
	const employee = new Employee(data.name, +data.id, data.email);

	// use employee methods to get its data
	let name = employee.getName();
	let id = employee.getId();
	let email = employee.getEmail();

	// create Manager, Engineer or Intern classes based on the role arg
	if (role === 'Manager') {
		// manager is constructed with office number
		const officeNumber = +data.details;
		const manager = new Manager(name, id, email, officeNumber);
		employees.push(manager);
		//
	} else if (role === 'Engineer') {
		// engineer is constructed with GitHub login
		const gitHub = data.details;
		const engineer = new Engineer(name, id, email, gitHub);
		employees.push(engineer);
		//
	} else if (role === 'Intern') {
		// intern is constructed with school name
		const school = data.details;
		const intern = new Intern(name, id, email, school);
		employees.push(intern);
	}

	// recursively run this function until menu question returns 'No more'
	if (data.menu === 'No more') {
		return;
	} else if (data.menu === 'Engineer') {
		await getMember(employees, 'Engineer');
	} else if (data.menu === 'Intern') {
		await getMember(employees, 'Intern');
	}
}
module.exports = getMember;
