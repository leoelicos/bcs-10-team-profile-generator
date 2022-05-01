/* 
 chalkRender.js
 
 this file contains code to render messages in the console using customization via chalk

 Copyright Leo Wong 2022
 */

// utility function to create good-looking console logs
const chalk = require('chalk');

// chalk callback functions add color to console logs for visual impact
const primary = (w) => chalk.magenta.bgWhite(` ${w} `);
const secondary = (w) => chalk.greenBright.bgGray(` ${w} `);
const tertiary = (w) => chalk.black.bgWhite(` ${w} `);
const greeting = (w) => console.log(tertiary(w));

module.exports = { primary, secondary, tertiary, greeting };
