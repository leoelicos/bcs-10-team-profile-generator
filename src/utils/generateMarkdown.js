/* 
from index.js
const ROLE_MANAGER = 0;
const ROLE_ENGINEER = 1;
const ROLE_INTERN = 2;
 */

// a function to generate markdown for HTML
function generateMarkdown(data) {
	//mock data for testing
	data = [
		{ name: 'Jared', id: '1', email: 'jared@fakemail.com', details: '1', menu: 'Engineer', role: 0 },
		{ name: 'Alec', id: '2', email: 'alec@fakemail.com', details: 'ibealec', menu: 'Engineer', role: 1 },
		{ name: 'Grace', id: '3', email: 'grace@fakemail.com', details: 'gchoi2u', menu: 'Engineer', role: 1 },
		{ name: 'Tammer', id: '4', email: 'tammer@fakemail.com', details: 'tammerg', menu: 'Intern', role: 1 },
		{ name: 'John', id: '5', email: 'john@fakemail.com', details: '2University', menu: 'No more', role: 2 },
	];

	// raw template
	const ROLE_MANAGER = 0;
	const ROLE_ENGINEER = 1;
	const ROLE_INTERN = 2;

	const faviconLink = 'https://www.veryicon.com/download/png/miscellaneous/fire-fighting-gantt-chart/team-29?s=256';
	const projectTitle = 'Team Profile Generator';
	const headerText = 'My Team';

	let html = `<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="shortcut icon" href="${faviconLink}" type="image/x-icon" />
			<link rel="stylesheet" href="../../dist/normalize.css" />
			<link rel="stylesheet" href="../../dist/style.css" />
			<title>${projectTitle}</title>
		</head>
		<body>
			<h1>${headerText}</h1>
			<ul>
	`;

	// iterate through the number of team member objects and add them to the DOM
	for (let i = 0; i < data.length; i++) {
		let { name, id, email, details, role } = data[i];
		let listItem = '<li>';

		listItem += `<div class="name">${name}</div>`;
		listItem += `<div class="role">${role}</div>`;
		listItem += `<div class="id">${id}</div>`;
		listItem += `<div class="email">${email}</div>`;
		listItem += `<div class="details">`;
		if (role === ROLE_MANAGER) {
			listItem += 'Office number:';
		} else if (role === ROLE_ENGINEER) {
			listItem += 'GitHub:';
		} else if (role === ROLE_INTERN) {
			listItem += 'School:';
		}

		listItem += details;

		listItem += '</div></li>';
		html += listItem;
	}

	html += `
			</ul>
		</body>
	</html>
	`;

	return html;
}

module.exports = generateMarkdown;
