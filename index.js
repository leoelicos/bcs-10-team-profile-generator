/* 
index.js

This file contains all of the necessary javascript to call inquirer and chalk to render the questions and also calls generateHTML() from /utils/ to render an HTML and CSS file inside the /dist/ folder

Copyright Leo Wong 2022
*/

// packages needed for this application
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');

const generateHTML = require('./src/utils/generateHTML');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// chalk functions add color to console logs for visual impact
const primary = (w) => chalk.magenta.bgWhite(` ${w} `);
const secondary = (w) => chalk.greenBright.bgGray(` ${w} `);
const tertiary = (w) => chalk.black.bgWhite(` ${w} `);
const greeting = (w) => tertiary(w);

// array to store all of the team members
const employees = [];

// function to initialize app
async function init() {
	// initialize employees array to remove prior memory
	employees.length = 0;

	// greet user
	console.log(greeting(`Welcome to Team Profile Generator! Let's do this!`));

	// ask user questions about team manager and any other members
	await getMember('Manager');

	// copy normalize.css file from utils/ to dist/
	await copyNormalize('./src/utils/normalize.css', './dist/normalize.css');

	// copy style.css file from utils/ to dist/
	await copyStyle('./src/utils/style.css', './dist/style.css');

	// write the HTML file based on the information obtained from getMember function on line 38
	await writeHTML('myTeam.html', employees);
}

// function to generate array of questions for user input
function generateQuestions(role) {
	return [
		{
			// employee name
			name: 'name',
			type: 'input',
			message: primary(role) + secondary(`What's the ${role}'s name?`),
		},

		{
			// employee id
			name: 'id',
			type: 'input',
			message: primary(role) + secondary(`What's the ${role}'s ID?`),
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
			message: primary(role) + secondary(`What's the ${role}'s email?`),
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
			message: primary(role) + secondary(`What's the ${role}'s ${role === 'Manager' ? 'office number' : role === 'Engineer' ? 'GitHub' : 'school'}?`),
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
			message: primary('Add') + secondary('Another team member?'),
			choices: ['Engineer', 'Intern', 'No more'],
		},
	];
}

// function to recursively call inquirer to prompt the user for information about the team members
// param role is either 'Manager', 'Engineer' or 'Intern'
async function getMember(role) {
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
		await getMember('Engineer');
	} else if (data.menu === 'Intern') {
		await getMember('Intern');
	}
}

// function to write HTML file
async function writeHTML(fileName, data) {
	const filePath = './dist/';
	fs.writeFile(filePath + fileName, generateHTML(data), (err) => (err ? console.warn(err) : console.log(tertiary(`Successfullly created ${filePath + fileName}!`))));
}
// function to write style CSS file
async function copyStyle(source, destination) {
	// store generated files in the dist folder
	const source = './src/utils/style.css';
	const destination = './dist/' + fileName;
	const encoding = 'utf8';
	// read the css file from the source, then try to write it to the destination
	fs.readFile(source, encoding, (error, data) => {
		if (error) {
			console.error(error);
		} else {
			fs.writeFile(destination, data, (err) => (err ? console.warn(err) : console.log(tertiary(`Successfullly created ${destination}!`))));
		}
	});
}
// function to write normalize CSS file
async function copyNormalize(source, destination) {
	// store generated files in the dist folder
	const source = './src/utils/normalize.css';
	const destination = './dist/' + fileName;
	const encoding = 'utf8';
	// read the css file from the source, then try to write it to the destination
	fs.readFile(source, encoding, (error, data) => {
		if (error) {
			console.error(error);
		} else {
			fs.writeFile(destination, data, (err) => (err ? console.warn(err) : console.log(tertiary(`Successfullly created ${destination}!`))));
		}
	});
}

// Function call to initialize app
init();
