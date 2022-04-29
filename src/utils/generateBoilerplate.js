// a function to generate markdown for HTML
function generateBoilerplate() {
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
			<header><h1>${headerText}</h1></header>
         <main id="main" class="main"></main>
		</body>
	</html>
	`;

	return html;
}

module.exports = generateBoilerplate;
