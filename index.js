/* 
index.js

This file contains the init() function to call inquirer and create classes in order to render HTML and CSS files inside the /dist/ folder

Copyright Leo Wong 2022
*/

// utility function to copy a file from source to destination
const copyFile = require('./src/utils/copyFile');

// utility function to create new classes based on user input
const getEmployees = require('./src/utils/getEmployees.js');

// utility function to create good-looking console logs
const chalkRender = require('./src/utils/chalkRender');

// utility function to write a file at a destination
const writeHTML = require('./src/utils/writeHTML');

// filepaths for I/O
const normalizeSource = './Assets/css/normalize.css';
const normalizeDestination = './dist/normalize.css';
const styleSource = './Assets/css/style.css';
const styleDestination = './dist/style.css';
const htmlDestination = './dist/myTeam.html';

// function to initialize app
async function init() {
	// array to store all of the team members
	const employees = [];

	// greet user
	chalkRender.greeting(`Welcome to Team Profile Generator! Let's do this!`);

	// recursively prompt user for employee info and update employees[], starting with 'Manager'
	await getEmployees(employees, 'Manager');

	// copy normalize.css file from Assets/css/ to dist/
	await copyFile(normalizeSource, normalizeDestination);

	// copy style.css file from Assets/css/ to dist/
	await copyFile(styleSource, styleDestination);

	// write the HTML file based on the information obtained from getEmployees function on line 37
	await writeHTML(htmlDestination, employees);
}

// Function call to initialize app
init();
