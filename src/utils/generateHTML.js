/* 
 generateHTML.js
 
 this file generates HTML string based on the data that is passed into generateHTML()

 Copyright Leo Wong 2022
 */

// function generates HTML based on data param, which is an array of child classes of parent class Employee
function generateHTML(data) {
	// link to favicon, which is an icon of a group of people
	const faviconLink = 'https://www.veryicon.com/download/png/miscellaneous/fire-fighting-gantt-chart/team-29?s=256';

	// name of the project
	const projectTitle = 'Team Profile Generator';

	// the text content of the page header
	const headerText = 'My Team';

	// beginning of the template literal to store the static as well as dynamically generated html on line 39
	// the dynamically generated part comes from helper function renderEmployees on line 47
	let html = `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="shortcut icon" href="${faviconLink}" type="image/x-icon" />
				<link rel="stylesheet" href="../dist/normalize.css" />
				<link rel="stylesheet" href="../dist/style.css" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
				<title>${projectTitle}</title>
			</head>
			<body>
				<header>
					<h1>${headerText}</h1>
				</header>
				<main>
					${renderEmployees(data)}
				</main>
			</body>
		</html>`;

	return html;
}

// helper function to return dynamically generated HTML code based on param data
function renderEmployees(data) {
	// beginning of the template literal to store the dynamically generated HTML
	let html = '';

	// iterate through the number of team member objects and concatenate to the above html string
	data.forEach((employee) => {
		// parent class methods
		const name = employee.getName();
		const id = employee.getId();
		const email = employee.getEmail();

		// string to store employee details
		let detail = '';

		// get employee details using child class methods
		const role = employee.getRole();
		if (role === 'Manager') {
			detail = `Office ${employee.getOfficeNumber()}`;
		} else if (role === 'Engineer') {
			detail = `<a target="_blank" href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
		} else if (role === 'Intern') {
			detail = `${employee.getSchool()}`;
		}

		// concatenate dynamically generated html to the return string
		html += `
		<div class="card ${role.toLowerCase()}">
			<div class="card-title">
				<div class="card-name">${name}</div>
				<div class="card-role">${role}</div>
			</div>
			<div class="card-body">
				<ul class="list">
					<li class="listItem id">ID ${id}</li>
					<li class="listItem email"><a href="mailto:${email}">${email}</a></li>
					<li class="listItem detail">${detail}</li >
				</ul>
			</div>
		</div>`;
	});

	// return string
	return html;
}

module.exports = generateHTML;
