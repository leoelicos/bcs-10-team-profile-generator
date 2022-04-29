/* 
index.js

This file contains all of the necessary javascript to call inquirer and chalk to render the questions and also calls generateMarkdown() from /utils/ to render an HTML and CSS file inside the /dist/ folder

Copyright Leo Wong 2022
*/

// packages needed for this application
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// chalk functions add color to console logs for visual impact
const primary = (w) => chalk.magenta.bgWhite(` ${w} `);
const secondary = (w) => chalk.greenBright.bgGray(` ${w} `);
const tertiary = (w) => chalk.black.bgWhite(` ${w} `);
const greeting = tertiary(`Welcome to Team Profile Generator! Let's do this!`);

// array to store all of the team members
const dataStack = [];

const ROLE_MANAGER = 0;
const ROLE_ENGINEER = 1;
const ROLE_INTERN = 2;

const employeeRole = ['Manager', 'Engineer', 'Intern'];

// function to initialize app
async function init() {
	dataStack.length = 0;
	console.log(greeting);
	await getMember(ROLE_MANAGER);
	writeToFile('myTeam', dataStack);
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
			if (pass) return true;
			return 'Please enter a valid ID (numbers only)';
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
				if (pass) return true;
				return 'Please enter a valid office number (numbers only)';
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
	let menu = data.menu;
	data.role = role;
	dataStack.push(data);
	if (menu === employeeRole[ROLE_ENGINEER]) {
		await getMember(ROLE_ENGINEER);
	} else if (menu === employeeRole[ROLE_INTERN]) {
		await getMember(ROLE_INTERN);
	}
}

// function to write README file
const filePath = './dist/';
const fileType = '.html';
function writeToFile(fileName, data) {
	fs.writeFile(filePath + fileName + fileType, generateMarkdown(data), (err) => (err ? console.warn(err) : console.log(tertiary(`Successfullly created ${filePath + fileName + fileType}!`))));
}

// Function call to initialize app
init();
