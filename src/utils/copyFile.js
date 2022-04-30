/* 
 copyFile.js
 
 this file contains code to copy a file from its source param and then paste it in the directory param

 Copyright Leo Wong 2022
 */

const fs = require('fs');
const chalkRender = require('./chalkRender');

// function to copy a file from source to destination
async function copyFile(source, destination) {
	const encoding = 'utf8';

	// try to read the css file from the source
	fs.readFile(source, encoding, (error, data) => {
		if (error) {
			console.error(error);
		} else {
			// try to write the css to the destination
			fs.writeFile(destination, data, (err) => {
				if (err) {
					console.warn(err);
				} else {
					chalkRender.greeting(`Successfully created ${destination}!`);
				}
			});
		}
	});
}

module.exports = copyFile;
