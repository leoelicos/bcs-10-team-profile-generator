/* 
 this file generates the markdown for HTML
 */

// a function to generate markdown for HTML
function generateMarkdown(data) {
	const faviconLink = 'https://www.veryicon.com/download/png/miscellaneous/fire-fighting-gantt-chart/team-29?s=256';
	const projectTitle = 'Team Profile Generator';
	const headerText = 'My Team';

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

// function to return HTML code containing employee data
function renderEmployees(data) {
	let string = '';
	// iterate through the number of team member objects and add them to the string
	for (let i = 0; i < data.length; i++) {
		const role = data[i].getRole();
		const name = data[i].getName();
		const id = data[i].getId();
		const email = data[i].getEmail();

		let details = '';
		let detail = '';

		if (role === 'Manager') {
			details = data[i].getOfficeNumber();
			detail = `Office ${details}`;
		} else if (role === 'Engineer') {
			details = data[i].getGithub();
			detail = `<a target="_blank" href="https://github.com/${details}">${details}</a>`;
		} else if (role === 'Intern') {
			details = data[i].getSchool();
			detail = `${details}`;
		}

		string += `
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
	}
	return string;
}

module.exports = generateMarkdown;
