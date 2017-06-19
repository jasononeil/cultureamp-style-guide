const chalk = require('chalk');

function error(message) {
  throw new Error(
    chalk.red(`\nCULTUREAMP STYLE GUIDE ERROR:\n${singleLine(message)}\n`)
  );
}

function warn(message) {
  console.warn(
    chalk.yellow(`\nCULTUREAMP STYLE GUIDE WARNING:\n${singleLine(message)}\n`)
  );
}

function singleLine(string) {
  return string.replace(/^ +/gm, ' ').replace(/\n|\r/gm, '').trim();
}

module.exports = {
  default: error,
  error: error,
  warn: warn,
};
