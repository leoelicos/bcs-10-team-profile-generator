/* 
index.js

This file contains all of the necessary javascript to call inquirer and chalk to render the questions and also calls generateMarkdown() from /utils/ to render an HTML and CSS file inside the /dist/ folder

Copyright Leo Wong 2022
*/

// packages needed for this application
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const generateMarkdown = require('./src/utils/generateMarkdown');
const generateStyle = require('./src/utils/generateStyle');
const generateNormalize = require('./src/utils/generateNormalize');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// chalk functions add color to console logs for visual impact
const primary = (w) => chalk.magenta.bgWhite(` ${w} `);
const secondary = (w) => chalk.greenBright.bgGray(` ${w} `);
const tertiary = (w) => chalk.black.bgWhite(` ${w} `);
const greeting = tertiary(`Welcome to Team Profile Generator! Let's do this!`);

// array to store all of the team members
const employees = [];

const ROLE_MANAGER = 0;
const ROLE_ENGINEER = 1;
const ROLE_INTERN = 2;

const employeeRole = ['Manager', 'Engineer', 'Intern'];

// function to initialize app
async function init() {
	employees.length = 0;
	console.log(greeting);
	await getMember(ROLE_MANAGER);
	await writeStyleCSS('style.css');
	await writeNormalizeCSS('normalize.css');
	await writeHTML('myTeam.html', employees);
}

// function to generate array of questions for user input
function generateQuestions(role) {
	const questions = [];
	const thisRole = employeeRole[role];

	// name
	questions.push({
		name: 'name',
		type: 'input',
		message: primary(thisRole) + secondary(`What's the ${thisRole}'s name?`),
	});

	// id
	questions.push({
		name: 'id',
		type: 'input',
		message: primary(thisRole) + secondary(`What's the ${thisRole}'s ID?`),
		validate(value) {
			const pass = value.match(/[0-9]+/);
			if (pass && +value > 0) return true;
			return 'Please enter a valid ID (positive numbers only)';
		},
	});

	// email
	questions.push({
		name: 'email',
		type: 'input',
		message: primary(thisRole) + secondary(`What's the ${thisRole}'s email?`),
		validate(value) {
			const pass = value.match(/.+@+.+\.+.+/);
			if (pass) return true;
			return 'Please enter a valid email (must contain @ and .)';
		},
	});

	// extraDetails
	const details = ['office number', 'GitHub', 'school'];
	questions.push({
		name: 'details',
		type: 'input',
		message: primary(thisRole) + secondary(`What's the ${thisRole}'s ${details[role]}?`),
		validate(value) {
			if (role === ROLE_MANAGER) {
				const pass = value.match(/[0-9]+/);
				if (pass && +value > 0) return true;
				return 'Please enter a valid office number (positive numbers only)';
			}
			return true;
		},
	});

	// moreTeamMembers
	questions.push({
		name: 'menu',
		type: 'list',
		message: primary('Add') + secondary('Another team member?'),
		choices: [employeeRole[ROLE_ENGINEER], employeeRole[ROLE_INTERN], 'No more'],
	});

	return questions;
}

async function getMember(role) {
	let questions = generateQuestions(role);
	let data = await inquirer.prompt(questions);
	let employee = new Employee(data.name, +data.id, data.email);
	if (role === ROLE_MANAGER) {
		let officeNumber = +data.details;
		employees.push(new Manager(employee.getName(), employee.getId(), employee.getEmail(), officeNumber));
	} else if (role === ROLE_ENGINEER) {
		let gitHub = data.details;
		employees.push(new Engineer(employee.getName(), employee.getId(), employee.getEmail(), gitHub));
	} else if (role === ROLE_INTERN) {
		let school = data.details;
		employees.push(new Intern(employee.getName(), employee.getId(), employee.getEmail(), school));
	}

	// recursively run this function until menu question returns 'No more'
	if (data.menu === 'No more') {
		return;
	} else if (data.menu === employeeRole[ROLE_ENGINEER]) {
		await getMember(ROLE_ENGINEER);
	} else if (data.menu === employeeRole[ROLE_INTERN]) {
		await getMember(ROLE_INTERN);
	}
}

// function to write HTML file
async function writeHTML(fileName, data) {
	const filePath = './dist/';
	fs.writeFile(filePath + fileName, generateMarkdown(data), (err) => (err ? console.warn(err) : console.log(tertiary(`Successfullly created ${filePath + fileName}!`))));
}
// function to write style CSS file
async function writeStyleCSS(fileName) {
	const filePath = './dist/';
	fs.writeFile(filePath + fileName, generateStyle(), (err) => (err ? console.warn(err) : console.log(tertiary(`Successfullly created ${filePath + fileName}!`))));
}
// function to write normalize CSS file
async function writeNormalizeCSS(fileName) {
	const filePath = './dist/';
	fs.writeFile(filePath + fileName, generateNormalize(), (err) => (err ? console.warn(err) : console.log(tertiary(`Successfullly created ${filePath + fileName}!`))));
}

// Function call to initialize app
init();
