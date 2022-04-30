/* 
 writeHTML.js
 
 this file contains code to write a file in the destination folder

 Copyright Leo Wong 2022
 */

// fs package for write function
const fs = require('fs');

// utility function to generate html based on the data parm
const generateHTML = require('./generateHTML');

// utility function to create good-looking console logs
const chalkRender = require('./chalkRender');

// function to write HTML file
async function writeHTML(destination, data) {
	fs.writeFile(destination, generateHTML(data), (err) => (err ? console.warn(err) : console.log(chalkRender.tertiary(`Successfully created ${destination}!`))));
}
module.exports = writeHTML;
