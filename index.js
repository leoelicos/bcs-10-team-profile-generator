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
	employees.length = 0;
	console.log(greeting(`Welcome to Team Profile Generator! Let's do this!`));
	await getMember('Manager');
	await writeStyleCSS('style.css');
	await writeNormalizeCSS('normalize.css');
	await writeHTML('myTeam.html', employees);
}

// function to generate array of questions for user input
function generateQuestions(role) {
	const questions = [];

	// name
	questions.push({
		name: 'name',
		type: 'input',
		message: primary(role) + secondary(`What's the ${role}'s name?`),
	});

	// id
	questions.push({
		name: 'id',
		type: 'input',
		message: primary(role) + secondary(`What's the ${role}'s ID?`),
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
		message: primary(role) + secondary(`What's the ${role}'s email?`),
		validate(value) {
			const pass = value.match(/.+@+.+\.+.+/);
			if (pass) return true;
			return 'Please enter a valid email (must contain @ and .)';
		},
	});

	// extraDetails
	questions.push({
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
	});

	// moreTeamMembers
	questions.push({
		name: 'menu',
		type: 'list',
		message: primary('Add') + secondary('Another team member?'),
		choices: ['Engineer', 'Intern', 'No more'],
	});

	return questions;
}

async function getMember(role) {
	let questions = generateQuestions(role);
	let data = await inquirer.prompt(questions);
	let employee = new Employee(data.name, +data.id, data.email);
	if (role === 'Manager') {
		let officeNumber = +data.details;
		employees.push(new Manager(employee.getName(), employee.getId(), employee.getEmail(), officeNumber));
	} else if (role === 'Engineer') {
		let gitHub = data.details;
		employees.push(new Engineer(employee.getName(), employee.getId(), employee.getEmail(), gitHub));
	} else if (role === 'Intern') {
		let school = data.details;
		employees.push(new Intern(employee.getName(), employee.getId(), employee.getEmail(), school));
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
async function writeStyleCSS(fileName) {
	const filePath = './dist/';
	fs.readFile('./src/utils/style.css', 'utf8', (error, data) => {
		if (error) {
			console.error(error);
		} else {
			fs.writeFile(filePath + fileName, data, (err) => (err ? console.warn(err) : console.log(tertiary(`Successfullly created ${filePath + fileName}!`))));
		}
	});
}
// function to write normalize CSS file
async function writeNormalizeCSS(fileName) {
	const filePath = './dist/';
	fs.readFile('./src/utils/normalize.css', 'utf8', (error, data) => {
		if (error) {
			console.error(error);
		} else {
			fs.writeFile(filePath + fileName, data, (err) => (err ? console.warn(err) : console.log(tertiary(`Successfullly created ${filePath + fileName}!`))));
		}
	});
}

// Function call to initialize app
init();
